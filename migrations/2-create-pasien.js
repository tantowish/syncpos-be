'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasien', {
      nik: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(16)
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.ENUM('balita', 'lansia')
      },
      jenis_kelamin: {
        type: Sequelize.ENUM('l', 'p')
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pasien');
  }
};
