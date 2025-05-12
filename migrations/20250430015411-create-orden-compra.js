'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrdenCompras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NroOrdenC: {
        type: Sequelize.INTEGER,
        unique: true
      },
      fechaEmision: {
        type: Sequelize.DATE
      },
      Situacion: {
        type: Sequelize.STRING
      },
      Total: {
        type: Sequelize.DECIMAL
      },
      CodLab: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Laboratorios',
          key: 'CodLab'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      NrofacturaProv: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('OrdenCompras');
  }
};