'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      [
        Post.hasMany(models.Comment, { foreignKey: 'postId' }),
        Post.belongsTo(models.Category, { foreignKey: 'categoryId' }),
        Post.belongsTo(models.User, { foreignKey: 'userId' }),
      ]
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};