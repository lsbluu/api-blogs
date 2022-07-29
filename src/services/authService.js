const { User } = require('../database/models');
const { generateToken } = require('../utils/jwt');

const authenticate = async (email, password) => {
if (!email || !password) {
  const erro = { status: 400, message: 'Some required fields are missing' }; 
  throw erro;
}
const user = await User.findOne({
  attributes: ['email', 'password'],
  where: { email, password },
});

if (!user) {
  const erro = { status: 400, message: 'Invalid fields' }; 
  throw erro;
}

const token = generateToken(user.dataValues);
return token;
};

module.exports = { authenticate };