const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const config = require('../config');
const { AppError } = require('../middlewares/errorHandler');

const generateAccessToken = (payload) =>
  jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresIn });

const generateRefreshToken = (payload) =>
  jwt.sign(payload, config.jwt.refreshSecret, { expiresIn: config.jwt.refreshExpiresIn });

const formatUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  isActive: user.isActive,
  createdAt: user.createdAt,
});

const register = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new AppError('Email already in use', StatusCodes.CONFLICT);

  const user = await User.create({ name, email, password });
  const tokenPayload = { id: user._id, role: user.role };
  const accessToken = generateAccessToken(tokenPayload);
  const refreshToken = generateRefreshToken(tokenPayload);

  // Lưu refresh token vào DB
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { user: formatUser(user), accessToken, refreshToken };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select('+password +refreshToken');
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid email or password', StatusCodes.UNAUTHORIZED);
  }
  if (!user.isActive) {
    throw new AppError('Account is deactivated', StatusCodes.FORBIDDEN);
  }

  const tokenPayload = { id: user._id, role: user.role };
  const accessToken = generateAccessToken(tokenPayload);
  const refreshToken = generateRefreshToken(tokenPayload);

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { user: formatUser(user), accessToken, refreshToken };
};

const logout = async (userId) => {
  await User.findByIdAndUpdate(userId, { refreshToken: null });
};

const refresh = async (token) => {
  if (!token) throw new AppError('Refresh token required', StatusCodes.UNAUTHORIZED);

  let decoded;
  try {
    decoded = jwt.verify(token, config.jwt.refreshSecret);
  } catch {
    throw new AppError('Invalid or expired refresh token', StatusCodes.UNAUTHORIZED);
  }

  const user = await User.findById(decoded.id).select('+refreshToken');
  if (!user || user.refreshToken !== token) {
    throw new AppError('Refresh token mismatch', StatusCodes.UNAUTHORIZED);
  }

  const tokenPayload = { id: user._id, role: user.role };
  const accessToken = generateAccessToken(tokenPayload);
  const newRefreshToken = generateRefreshToken(tokenPayload);

  user.refreshToken = newRefreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken: newRefreshToken };
};

module.exports = { register, login, logout, refresh };
