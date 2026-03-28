require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const config = require('../config');

const seed = async () => {
  await mongoose.connect(config.db.uri);

  const email = 'admin@gmail.com';
  const existing = await User.findOne({ email });

  if (existing) {
    console.log('✅ Admin user already exists:', email);
    process.exit(0);
  }

  await User.create({
    name: 'Admin',
    email,
    password: 'admin123@',
    role: 'admin',
    isActive: true,
  });

  console.log('✅ Admin user created:', email);
  process.exit(0);
};

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
