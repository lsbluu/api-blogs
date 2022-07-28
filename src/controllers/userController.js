const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
  const token = await userService.createUser(displayName, email, password, image);
  res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};