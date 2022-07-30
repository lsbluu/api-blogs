const blogPostService = require('../services/blogPostService');

const getBlogPost = async (req, res, next) => {
  try {
    const rows = await blogPostService.get();
  res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBlogPost,
};