const { postService } = require('../services');

const getAll = async (_req, res) => {
  const { message } = await postService.getAll();
  return res.status(200).json(message);
};

module.exports = {
  getAll,
};