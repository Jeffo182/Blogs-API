const { postService } = require('../services');

const create = async (req, res) => {
  const token = req.header('Authorization');
  const { body } = req;
  const { type, message } = await postService.createPost(token, body);
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  create,
};