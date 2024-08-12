"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          ModelNumber: "Boeing 747",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ModelNumber: "Boeing 737",
          capacity: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ModelNumber: "Boeing 777",
          capacity: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ModelNumber: "Boeing 787",
          capacity: 380,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ModelNumber: "Airbus A380",
          capacity: 320,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ModelNumber: "Airbus A320",
          capacity: 280,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ModelNumber: "Airbus A370",
          capacity: 370,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
