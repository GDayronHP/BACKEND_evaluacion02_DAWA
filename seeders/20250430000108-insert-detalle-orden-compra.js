'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 1,
        CodMedicamento: 1,
        descripcion: 'Paracetamol',
        cantidad: 20,
        precio: 0.50,
        montouni: 10.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};