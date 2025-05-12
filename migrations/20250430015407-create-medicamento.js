'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CodMedicamento: {
        type: Sequelize.INTEGER,
        unique: true
      },
      descripcionMed: {
        type: Sequelize.STRING
      },
      fechaFabricacion: {
        type: Sequelize.DATE
      },
      fechaVencimiento: {
        type: Sequelize.DATE
      },
      Presentacion: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      precioVentaUni: {
        type: Sequelize.DECIMAL
      },
      precioVentaPres: {
        type: Sequelize.DECIMAL
      },
      CodTipoMed: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TipoMedics',
          key: 'CodTipoMed'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      Marca: {
        type: Sequelize.STRING
      },
      CodEspec: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Especialidads', // Nombre de la tabla relacionada
          key: 'CodEspec'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('Medicamentos');
  }
};