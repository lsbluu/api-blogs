const error = require('./error');
const validateName = require('./validateName');
const authMiddleware = require('./auth');

module.exports = {
  error,
  validateName,
  authMiddleware,
};