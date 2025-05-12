'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleOrdenCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DetalleOrdenCompra.belongsTo(models.Medicamento, {
        foreignKey: 'CodMedicamento'        
      })

      DetalleOrdenCompra.belongsTo(models.OrdenCompra, {
        foreignKey: 'NroOrdenC'
      })
    }
  }
  DetalleOrdenCompra.init({
    descripcion: DataTypes.STRING,
    Cantidad: DataTypes.INTEGER,
    Precio: DataTypes.DECIMAL,
    MontoUni: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'DetalleOrdenCompra',
  });
  return DetalleOrdenCompra;
};