const error = require('./error');
const validate = require('./validate');
const authMiddleware = require('./auth');
const validateName = require('./validateName');
const validatePost = require('./validatePost');

module.exports = {
  error,
  validate,
  authMiddleware,
  validateName,
  validatePost,
};