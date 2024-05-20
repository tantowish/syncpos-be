'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      [
        Pasien.hasMany(models.Post, { foreignKey: 'categoryId' }),
      ]
    }
  }

  Pasien.init({
    nik: DataTypes.STRING,
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    tanggal_lahir: DataTypes.DATE,
    status: DataTypes.ENUM('balita', 'lansia'),
    jenis_kelamin: DataTypes.ENUM('l', 'p')
  }, {
    sequelize,
    modelName: 'Pasien',
  });
  return Pasien;
};