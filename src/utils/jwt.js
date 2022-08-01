const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

const generateToken = (data) => 
jwt.sign({ ...data }, SECRET, jwtConfig);

const verifyToken = (token) => { 
    if (!token) {   
      const err = { status: 401, message: 'Token not found' }; 
      throw err;
    } 
  try {
    const validate = jwt.verify(token, SECRET);
    return validate;
  } catch (error) {
    const err = { status: 401, message: 'Expired or invalid token' };
    throw err;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};