const mongoose = require('mongoose');
const config = require('./index');
const logger = require('./logger');

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri);
    logger.info(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
