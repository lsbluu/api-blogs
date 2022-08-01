module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPost',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  categoryId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Category',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }}, 
  {timestamps: false},
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };

  return PostCategory;
};