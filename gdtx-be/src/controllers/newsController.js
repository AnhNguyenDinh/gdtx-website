const { StatusCodes } = require('http-status-codes');
const News = require('../models/News');
const fs = require('fs');
const path = require('path');

const getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, tag, q } = req.query;
    const filter = {};
    if (tag) filter.tag = tag;
    if (q) filter.$or = [
      { title: { $regex: q, $options: 'i' } },
      { excerpt: { $regex: q, $options: 'i' } },
    ];

    const total = await News.countDocuments(filter);
    const news = await News.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ success: true, data: { news, total, page: Number(page), limit: Number(limit) } });
  } catch (err) { next(err); }
};

const getOne = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'Không tìm thấy bài viết' });
    res.json({ success: true, data: news });
  } catch (err) { next(err); }
};

const create = async (req, res, next) => {
  try {
    const body = { ...req.body };
    if (req.file) body.img = `/uploads/${req.file.filename}`;
    const news = await News.create(body);
    res.status(StatusCodes.CREATED).json({ success: true, data: news });
  } catch (err) { next(err); }
};

const update = async (req, res, next) => {
  try {
    const existing = await News.findById(req.params.id);
    if (!existing) return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'Không tìm thấy bài viết' });

    const body = { ...req.body };
    if (req.file) {
      // Xóa ảnh cũ nếu là file local
      if (existing.img && existing.img.startsWith('/uploads/')) {
        const oldPath = path.join(__dirname, '../../', existing.img);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      body.img = `/uploads/${req.file.filename}`;
    }

    const news = await News.findByIdAndUpdate(req.params.id, body, { new: true, runValidators: true });
    res.json({ success: true, data: news });
  } catch (err) { next(err); }
};

const remove = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'Không tìm thấy bài viết' });

    if (news.img && news.img.startsWith('/uploads/')) {
      const filePath = path.join(__dirname, '../../', news.img);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await news.deleteOne();
    res.json({ success: true, message: 'Đã xóa bài viết' });
  } catch (err) { next(err); }
};

module.exports = { getAll, getOne, create, update, remove };
