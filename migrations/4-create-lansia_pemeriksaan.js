'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('balita_pemeriksaan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      nik: {
        type: Sequelize.STRING(16),
        allowNull: false,
        references: {
          model: 'pasien',
          key: 'nik'
        }
      },
      fasyankes_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'fasyankes',
          key: 'id'
        }
      },
      berat_badan: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tinggi_badan: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tekanan_darah: {
        type: Sequelize.STRING,
        allowNull: false
      },
      denyut_nadi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      assesment: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('lansia_pemeriksaan');
  }
};
