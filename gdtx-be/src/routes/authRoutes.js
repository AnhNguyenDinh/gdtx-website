const { Router } = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { authenticate } = require('../middlewares/auth');
const validate = require('../middlewares/validate');

const router = Router();

// POST /api/v1/auth/register
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  validate,
  authController.register
);

// POST /api/v1/auth/login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  authController.login
);

// POST /api/v1/auth/logout  (cần token)
router.post('/logout', authenticate, authController.logout);

// POST /api/v1/auth/refresh
router.post(
  '/refresh',
  [body('refreshToken').notEmpty().withMessage('Refresh token is required')],
  validate,
  authController.refresh
);

// GET /api/v1/auth/me  (cần token)
router.get('/me', authenticate, authController.me);

module.exports = router;
