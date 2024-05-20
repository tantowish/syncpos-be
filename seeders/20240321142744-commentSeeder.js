'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        content: 'Comment 1',
        postId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment 2',
        postId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Comment 3',
        postId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
