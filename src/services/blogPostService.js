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

const getById = async (id) => {
  const row = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!row) {
    const erro = { status: 404, message: 'Post does not exist' };
    throw erro;
  }
  
  return row;
};

module.exports = {
  get,
  getById,
};