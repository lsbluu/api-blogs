const { User } = require('../database/models');
const generateToken = require('../utils/jwt');

const authenticate = async (email, password) => {

const user = await User.findOne({
  attributes: ['email', 'password'],
  where: { email, password },
});

const token = generateToken(user.dataValues);
return token;
};

module.exports = { authenticate };