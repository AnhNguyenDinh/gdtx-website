const User = require('../models/User');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123@';

const initAdmin = async () => {
  const existing = await User.findOne({ email: ADMIN_EMAIL });
  if (existing) return;

  await User.create({
    name: 'Admin',
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    role: 'admin',
    isActive: true,
  });

  console.log(`✅ Admin account created: ${ADMIN_EMAIL}`);
};

module.exports = initAdmin;
