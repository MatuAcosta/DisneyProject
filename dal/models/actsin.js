'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActsIn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActsIn.init({
    movieId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'ActsIn',
    tableName:'acts_in'
  });
  return ActsIn;
};