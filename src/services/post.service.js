const { BlogPost } = require('../models');

const create = async (body) => {
  const { dataValues } = await BlogPost.create(body);
  return { type: null, message: dataValues }; 
};

module.exports = {
  create,
};