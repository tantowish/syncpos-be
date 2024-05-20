'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'Title 1',
        content: 'Content 1',
        userId: 1,
        categoryId: 1,
        imageUrl: 'https://picsum.photos/id/1/200/300',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 2 title',
        content: 'Post 2 content',
        userId: 1,
        categoryId: 3,
        imageUrl: 'https://picsum.photos/id/1/200/300',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        title: 'Title 3',
        content: 'Content 3',
        userId: 1,
        categoryId: 2,
        imageUrl: 'https://picsum.photos/id/1/200/300',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {})
  }
};
