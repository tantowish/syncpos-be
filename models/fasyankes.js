'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fasyankes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      [
        Fasyankes.hasMany(models.BalitaPemeriksaan, { foreignKey: 'fasyankes_id' }),
        Fasyankes.hasMany(models.LansiaPemeriksaan, { foreignKey: 'fasyankes_id' }),
        Fasyankes.hasOne(models.DataIntegrasi, { foreignKey: 'fasyankes_id' }),
      ]
    }
  }
  Fasyankes.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_fasyankes: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    alamat: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Fasyankes',
  });
  return Fasyankes;
};