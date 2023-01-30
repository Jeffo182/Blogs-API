const { authToken } = require('../utils/jwt');

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const { type, message } = authToken(token);
  if (type) return res.status(type).json({ message });
  next();
};

module.exports = validateToken;