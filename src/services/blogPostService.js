const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../database/models');

const missing = { status: 400, message: 'Some required fields are missing' };
const get = async () => {
  const rows = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
  },
    );
  return rows;
};

const getSearch = async (q) => {
  const rows = await BlogPost.findAll({
    where: {      
     [Op.or]: {
      content: {
        [Op.like]: `%${q}%` },
      title: {
        [Op.like]: `%${q}%` },
     },
  },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ], 
});
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

const deleteById = async (id, users) => {
  const result = await BlogPost.findByPk(id);

  if (!result) {
    const erro = { status: 404, message: 'Post does not exist' };
    throw erro;
  }  
  
    if (result.dataValues.userId !== users.id) {
      const erro = { status: 401, message: 'Unauthorized user' };
      throw erro;  
    }

      await BlogPost.destroy({
        where: { id }, 
});
};

const add = async (title, content, userId, categoryIds) => {
  if (!title || !content || !categoryIds) {
    throw missing; 
  }
  const result = await BlogPost.create({ title, content, userId });
  const postId = result.dataValues.id;
  const category = await Promise.all(categoryIds.map(async (e) => {
    const exist = await Category.findByPk(e);
    if (!exist) return false;
       return true;
  }));  
  const check = category.every((b) => b);
  if (!check) { 
    const erro = { status: 400, message: '"categoryIds" not found' };
      throw erro; 
    }
   await PostCategory.bulkCreate([
    { postId, categoryId: categoryIds[0] }, { postId, categoryId: categoryIds[1] }]);
    return result; 
  };

const updateById = async (id, title, content, users) => {
  if (!title || !content) {
    throw missing;
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
  deleteById,
  getSearch,
  add,
};