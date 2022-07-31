module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  categoryId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
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