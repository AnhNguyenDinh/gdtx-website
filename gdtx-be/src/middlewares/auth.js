const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const config = require('../config');
const { AppError } = require('./errorHandler');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('No token provided', StatusCodes.UNAUTHORIZED));
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
    return next();
  } catch {
    return next(new AppError('Invalid or expired token', StatusCodes.UNAUTHORIZED));
  }
};

const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new AppError('Forbidden: insufficient permissions', StatusCodes.FORBIDDEN));
  }
  return next();
};

module.exports = { authenticate, authorize };
