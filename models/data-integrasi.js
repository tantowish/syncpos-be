'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataIntegrasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      [
        DataIntegrasi.belongsTo(models.Fasyankes, { foreignKey: 'fasyankes_id' }),
      ]
    }
  }
  DataIntegrasi.init({
    fasyankes_id: DataTypes.UUID,
    api_key: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'DataIntegrasi',
  });
  return DataIntegrasi;
};