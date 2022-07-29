const { verifyToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  
  const user = verifyToken(token);

  if (!user) {
    const err = { status: 401, message: 'Token not found' };
    throw err;
  }

  res.locals.user = user;
  next();
};

module.exports = authMiddleware;