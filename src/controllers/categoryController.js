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

const getCategory = async (req, res, next) => {
  try {
    const rows = await categoryService.get();
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getCategory,
};