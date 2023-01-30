const { Category } = require('../models');
const { validateName } = require('./validations/validations');

const create = async ({ name }) => {
  const error = validateName(name);
  if (error.type) return error;
  console.log(error);
  const verifyCategory = await Category.findOne({ where: { name } });
  if (verifyCategory) { return { type: 400, message: 'This category alredy exist' }; }

  const { dataValues } = await Category.create({ name });
  console.log(dataValues);
  return { type: null, message: dataValues };
};

const getAll = async () => {
  const response = await Category.findAll({ order: [['id', 'ASC']] });
  console.log(response);
  return { type: null, message: response };
};

module.exports = {
  create,
  getAll,
};
