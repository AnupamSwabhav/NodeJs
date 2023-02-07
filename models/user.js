'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Contact)
    }
  }
  User.init({
    
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    paranoid: true,
  });
  return User;
};
 