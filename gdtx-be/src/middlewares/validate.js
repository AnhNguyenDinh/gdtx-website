const { validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      success: false,
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }
  return next();
};

module.exports = validate;
