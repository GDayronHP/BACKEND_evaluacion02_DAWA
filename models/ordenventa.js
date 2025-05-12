'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrdenVenta.hasMany(models.DetalleOrdenVta, {
        foreignKey: 'NroOrdenVta'
      });
      OrdenVenta.belongsTo(models.Medicamento, {
        foreignKey: 'CodMedicamento'
      });
    }
  }
  OrdenVenta.init({
    NroOrdenVta: DataTypes.INTEGER,
    fechaEmision: DataTypes.DATE,
    Motivo: DataTypes.STRING,
    Situacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrdenVenta',
  });
  return OrdenVenta;
};