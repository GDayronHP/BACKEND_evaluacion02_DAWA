'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrdenCompras', [
      {
        NroOrdenC: 1,
        fechaEmision: '2025-04-01',
        Situacion: 'Pendiente',
        Total: 100.00,
        CodLab: 1,
        NrofacturaProv: 'FAC-001',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrdenCompras', null, {});
  }
};