const { User } = require('../database/models');
const { generateToken } = require('../utils/jwt');

const getAll = async () => {
  const rows = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return rows;
};

const getUserById = async (id) => {
  const row = await User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (!row) {
    const error = { status: 404, message: 'User does not exist' };
    throw error;
  }

  return row;
};

const createUser = async (displayName, email, password, image) => {  
  const user = await User.findOne({
    attributes: ['displayName', 'email', 'password', 'image'],
    where: { email },
  });

  if (user) {
    const error = { status: 409, message: 'User already registered' };
    throw error;
  }  
  await User.create({ displayName, email, password, image });

  const token = generateToken({ displayName, email, password, image });
  return token;
};

module.exports = {
  createUser,
  getAll,
  getUserById,
};