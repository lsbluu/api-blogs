const blogPostService = require('../services/blogPostService');

const getBlogPost = async (req, res, next) => {
  try {
    const rows = await blogPostService.get();
  res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

const getSearchBlog = async (req, res, next) => {
  try {
    const { q } = req.query;
    const rows = await blogPostService.getSearch(q);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

const getByIdBlogPost = async (req, res, next) => {
 try {
  const { id } = req.params;
  const row = await blogPostService.getById(id);
  res.status(200).json(row);
 } catch (error) {
  next(error);
 }
};

const createBlog = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = res.locals.user;
  const result = await blogPostService.add(title, content, id, categoryIds);
  res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateByIdBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
  const { title, content } = req.body;
  const users = res.locals.user;
  const result = await blogPostService.updateById(id, title, content, users);
  res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
  const users = res.locals.user;
  await blogPostService.deleteById(id, users);
  res.status(204).end();
  } catch (error) {    
    next(error);
  }
};

module.exports = {
  getBlogPost,
  getByIdBlogPost,
  updateByIdBlogPost,
  deleteBlogPost,
  getSearchBlog,
  createBlog,
};