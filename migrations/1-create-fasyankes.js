'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fasyankes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nama_fasyankes: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lokasi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provinsi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kabupaten: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kecamatan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kelurahan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_telp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      alamat: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('fasyankes');
  }
};
