const { Router } = require('express');
const authRoutes = require('./authRoutes');
const newsRoutes = require('./newsRoutes');
const aboutRoutes = require('./aboutRoutes');

const router = Router();

router.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));
router.use('/auth', authRoutes);
router.use('/news', newsRoutes);
router.use('/about', aboutRoutes);

module.exports = router;
