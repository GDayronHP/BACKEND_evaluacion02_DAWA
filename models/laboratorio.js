'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un laboratorio tiene muchas ordenes de compra
      Laboratorio.hasMany(models.OrdenCompra, {
        foreignKey: 'CodLab'
      });
    }
  }
  Laboratorio.init({
    CodLab: DataTypes.INTEGER,
    razonSocial: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    contacto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Laboratorio',
  });
  return Laboratorio;
};