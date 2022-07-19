'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Character,{through:'Acts_in'})

    }
  }
  Movie.init({
    title: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    score: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};