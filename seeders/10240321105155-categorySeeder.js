'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Technology',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'Finance',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'Health',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'Sports',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
