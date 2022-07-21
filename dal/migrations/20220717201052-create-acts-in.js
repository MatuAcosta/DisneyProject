'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('acts_in', {
      movieId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'movies', // name of Source model
          key: 'id',
        },
      },
      characterId: {
        allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'characters', // name of Source model
            key: 'id',
          },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('acts_in');
  }
};