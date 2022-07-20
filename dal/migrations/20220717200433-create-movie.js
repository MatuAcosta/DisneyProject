'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      creation_date: {
        type: Sequelize.DATE
      },
      score: {
        type: Sequelize.INTEGER
      },
      image:{
        type: Sequelize.STRING,
        allowNull:false
      },
      genreId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'genres', // name of Source model
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    //await queryInterface.removeConstraint('acts_in', 'acts_in_ibfk_1')
    await queryInterface.dropTable('Movies');
  }
};

/* 20220717200433-create-movie.js */