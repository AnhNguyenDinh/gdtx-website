const { Router } = require('express');
const { getAbout, updateAbout } = require('../controllers/aboutController');
const { authenticate, authorize } = require('../middlewares/auth');
const upload = require('../config/upload');

const router = Router();

router.get('/', getAbout);
router.put('/', authenticate, authorize('admin'), upload.single('img'), updateAbout);

module.exports = router;
