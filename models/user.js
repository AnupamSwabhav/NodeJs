'use strict';
const {
  Model, DataTypes
} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
  const sequelize = require("../db")
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
    id : DataTypes.UUID,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  // return User;
// };
 