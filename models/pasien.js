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
        Pasien.hasMany(models.LansiaPemeriksaan, { foreignKey: 'nik' }),
        Pasien.hasMany(models.BalitaPemeriksaan, { foreignKey: 'nik' }),
      ]
    }
  }

  Pasien.init({
    nik: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },    
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    tanggal_lahir: DataTypes.DATE,
    status: DataTypes.ENUM('balita', 'lansia'),
    jenis_kelamin: DataTypes.ENUM('l', 'p')
  }, {
    sequelize,
    modelName: 'Pasien',
    tableName: 'pasien'
  });
  return Pasien;
};