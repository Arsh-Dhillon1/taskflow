const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async ({ name, email, password }) => {
  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  return user;
};

module.exports = {
  registerUser
};
