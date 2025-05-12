'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMedic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoMedic.hasMany(models.Medicamento, {
        foreignKey: 'CodTipoMed'
      });
    }
  }
  TipoMedic.init({
    CodTipoMed: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoMedic',
  });
  return TipoMedic;
};