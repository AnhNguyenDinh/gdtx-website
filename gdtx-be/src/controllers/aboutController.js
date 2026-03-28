const About = require('../models/About');
const fs = require('fs');
const path = require('path');

// GET /api/v1/about — public, trả về document duy nhất
const getAbout = async (req, res, next) => {
  try {
    let about = await About.findOne();
    if (!about) about = await About.create({});
    res.json({ success: true, data: about });
  } catch (err) { next(err); }
};

// PUT /api/v1/about — admin only, upsert
const updateAbout = async (req, res, next) => {
  try {
    let about = await About.findOne();
    if (!about) about = new About();

    const { title, content } = req.body;
    if (title !== undefined) about.title = title;
    if (content !== undefined) about.content = content;
    if (req.body.content2 !== undefined) about.content2 = req.body.content2;

    if (req.file) {
      // Xóa ảnh cũ nếu là file local
      if (about.img && about.img.startsWith('/uploads/')) {
        const oldPath = path.join(__dirname, '../../', about.img);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      about.img = `/uploads/${req.file.filename}`;
    }

    await about.save();
    res.json({ success: true, data: about });
  } catch (err) { next(err); }
};

module.exports = { getAbout, updateAbout };
