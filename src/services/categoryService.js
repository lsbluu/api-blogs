const { Category } = require('../database/models');

const get = async () => {
  const rows = await Category.findAll();
  return rows;
};

const create = async (name) => {
 const result = await Category.create({ name });
 return result;
};

module.exports = {
  create,
  get,
};