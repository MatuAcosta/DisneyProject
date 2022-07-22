'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_roles', {
      roleId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // name of Source model
          key: 'id',
        },
      },
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // name of Source model
          key: 'id',
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_roles');
  }
};