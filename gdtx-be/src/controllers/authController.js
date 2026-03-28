const { StatusCodes } = require('http-status-codes');
const authService = require('../services/authService');
const User = require('../models/User');

const register = async (req, res, next) => {
  try {
    const data = await authService.register(req.body);
    res.status(StatusCodes.CREATED).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    res.status(StatusCodes.OK).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    await authService.logout(req.user.id);
    res.status(StatusCodes.OK).json({ success: true, message: 'Logged out successfully' });
  } catch (err) {
    next(err);
  }
};

const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const data = await authService.refresh(refreshToken);
    res.status(StatusCodes.OK).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'User not found' });
    }
    return res.status(StatusCodes.OK).json({ success: true, data: { user } });
  } catch (err) {
    return next(err);
  }
};

module.exports = { register, login, logout, refresh, me };
