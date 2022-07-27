const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

const generateToken = ({ email, password }) => 
jwt.sign({ email, password }, SECRET, jwtConfig);

module.exports = generateToken;