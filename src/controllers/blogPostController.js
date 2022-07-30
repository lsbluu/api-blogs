const blogPostService = require('../services/blogPostService');

const getBlogPost = async (req, res, next) => {
  const rows = await blogPostService.get();
  res.status(200).json(rows);
};

module.exports = {
  getBlogPost,
};