'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BalitaPemeriksaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      [
        BalitaPemeriksaan.hasMany(models.Post, { foreignKey: 'categoryId' }),
      ]
    }
  }

  BalitaPemeriksaan.init({
    id: DataTypes.UUID,
    nik: DataTypes.STRING,
    fasyankes_id: DataTypes.UUID,
    berat_badan: DataTypes.FLOAT,
    tinggi_badan: DataTypes.FLOAT,
    lingkar_kepala: DataTypes.FLOAT,
    umur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BalitaPemeriksaan',
  });
  return BalitaPemeriksaan;
};