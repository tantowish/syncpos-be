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
        LansiaPemeriksaan.belongsTo(models.Pasien, { foreignKey: 'nik' }),
        LansiaPemeriksaan.belongsTo(models.Fasyankes, { foreignKey: 'fasyankes_id' }),
      ]
    }
  }

  LansiaPemeriksaan.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
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