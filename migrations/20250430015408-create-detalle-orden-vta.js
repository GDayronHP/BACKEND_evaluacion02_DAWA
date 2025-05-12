'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetalleOrdenVta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NroOrdenVta: {
        type: Sequelize.INTEGER,
        references: {
          model: 'OrdenVenta',
          key: 'NroOrdenVta'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      CodMedicamento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medicamentos',
          key: 'CodMedicamento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      descripcionMed: {
        type: Sequelize.STRING
      },
      cantidadRequerida: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetalleOrdenVta');
  }
};