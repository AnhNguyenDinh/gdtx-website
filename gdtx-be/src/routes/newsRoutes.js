const { Router } = require('express');
const newsController = require('../controllers/newsController');
const { authenticate, authorize } = require('../middlewares/auth');
const upload = require('../config/upload');

const router = Router();

// Public
router.get('/', newsController.getAll);
router.get('/:id', newsController.getOne);

// Protected (admin only)
router.post('/', authenticate, authorize('admin'), upload.single('img'), newsController.create);
router.put('/:id', authenticate, authorize('admin'), upload.single('img'), newsController.update);
router.delete('/:id', authenticate, authorize('admin'), newsController.remove);

module.exports = router;
