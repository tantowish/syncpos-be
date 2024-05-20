'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LansiaPemeriksaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      [
        LansiaPemeriksaan.hasMany(models.Post, { foreignKey: 'categoryId' }),
      ]
    }
  }

  LansiaPemeriksaan.init({
    id: DataTypes.UUID,
    nik: DataTypes.STRING,
    fasyankes_id: DataTypes.UUID,
    berat_badan: DataTypes.FLOAT,
    tinggi_badan: DataTypes.FLOAT,
    tekanan_darah: DataTypes.STRING,
    denyut_nadi: DataTypes.STRING,
    assesment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LansiaPemeriksaan',
  });
  return LansiaPemeriksaan;
};