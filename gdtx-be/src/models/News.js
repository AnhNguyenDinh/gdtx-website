const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
  {
    tag: { type: String, required: true, default: 'TIN TỨC' },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    img: { type: String, default: '' },
    date: { type: String },
  },
  { timestamps: true }
);

// Tự set date dạng dd-mm-yyyy hh:mm khi tạo mới
newsSchema.pre('save', function (next) {
  if (!this.date) {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    this.date = `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  next();
});

module.exports = mongoose.model('News', newsSchema);
