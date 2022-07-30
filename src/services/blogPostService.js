const { BlogPost, User, Category } = require('../database/models');

const get = async () => {
  const rows = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
  },
    );
  return rows;
};

module.exports = {
  get,
};