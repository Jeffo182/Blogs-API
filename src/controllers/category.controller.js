const { categoryService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categoryService.create({ name });
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const response = await categoryService.getAll();
  return res.status(200).json(response.message); 
};

module.exports = {
  create,
  getAll,
};