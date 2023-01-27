require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

// CONFIG DO JWT
const config = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

// GENERATE TOKEN
const generateToken = ({ email }) => jwt.sign({ email }, JWT_SECRET, config);

// JWT VERIFY
const authToken = (token) => {
  try {
    const decryptedData = jwt.verify(token, JWT_SECRET);
    return { type: null, message: decryptedData };
  } catch (error) {
    return { type: 400, message: 'invalid token' };
  }
};

module.exports = {
  generateToken,
  authToken,
};