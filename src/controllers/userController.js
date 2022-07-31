const userService = require('../services/userService');

const getUsers = async (req, res, next) => {
  try {
    const rows = await userService.getAll();
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const row = await userService.getUserById(id);
    res.status(200).json(row);
  } catch (error) {
    next(error);    
  }
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
  const token = await userService.createUser(displayName, email, password, image);
  res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const deleteMe = async (req, res, next) => {
  try {
     const users = res.locals.user;
    await userService.deleteMe(users);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteMe,
};