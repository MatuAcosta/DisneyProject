'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.REAL
      },
      history: {
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING,
        allowNull: false 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    //await queryInterface.removeConstraint('acts_in', 'acts_in_ibfk_2')
    await queryInterface.dropTable('Characters');
  }
};