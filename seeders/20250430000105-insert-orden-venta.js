'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrdenVenta', [
      {
        NroOrdenVta: 1,
        fechaEmision: '2025-04-01',
        Motivo: 'Compra regular',
        Situacion: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrdenVenta', null, {});
  }
};