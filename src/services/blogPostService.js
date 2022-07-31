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

const updateById = async (id, title, content, users) => {
  if (!title || !content) {
    const erro = { status: 400, message: 'Some required fields are missing' }; throw erro;
  }
  const result = await BlogPost.findByPk(id);

 if (result.dataValues.userId === users.id) {
  await BlogPost.update({ title, content }, {
    where: { id },
  });

  const row = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return row; 
 }
 const erro = { status: 401, message: 'Unauthorized user' };
    throw erro;
};

module.exports = {
  get,
  getById,
  updateById,
};