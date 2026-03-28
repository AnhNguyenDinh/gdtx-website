const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    content2: { type: String, default: '' },
    img: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
