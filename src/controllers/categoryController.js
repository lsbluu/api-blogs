const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
  const { dataValues } = await categoryService.create(name);
  console.log(dataValues);
  res.status(201).json(dataValues);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};