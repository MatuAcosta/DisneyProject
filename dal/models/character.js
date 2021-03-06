'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsToMany(models.Movie,{through:'acts_in',onDelete:'CASCADE',onUpdate:'CASCADE'})
    }
  }
  Character.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.REAL,
    history: DataTypes.STRING,
    image:DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Character',
  });
  return Character;
};

