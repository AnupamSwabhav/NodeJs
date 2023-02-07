'use strict';

import Contact from '../view/contact';

const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Contact.init({
    id: DataTypes.UUID,
    userId : {
        type : DataTypes.UUID,
        references : {
            model : "User",
            key : "id",
          },
    }
  }, {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts',
    underscored: true
  });
  return Contact;
};

export default Contact