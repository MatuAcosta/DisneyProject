'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("movies", {
      type: "FOREIGN KEY",
      fields: ["genreId"], // field name of the foreign key
      name: "fk_movies_genreId",
      references: {
        table: "genres", // Target model
        field: "id", // key in Target model
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.removeConstraint(
      "movies", // Source model
      "fk_movies_genreId" // key to remove
    );
  }
};