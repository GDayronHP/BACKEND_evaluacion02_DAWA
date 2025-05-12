'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicamentos', [
      {
        CodMedicamento: 1,
        descripcionMed: 'Paracetamol',
        fechaFabricacion: '2025-01-01',
        fechaVencimiento: '2026-01-01',
        Presentacion: 'Tabletas',
        stock: 100,
        precioVentaUni: 0.50,
        precioVentaPres: 5.00,
        CodTipoMed: 1,
        Marca: 'Genérico',
        CodEspec: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CodMedicamento: 2,
        descripcionMed: 'Amoxicilina',
        fechaFabricacion: '2025-02-01',
        fechaVencimiento: '2026-02-01',
        Presentacion: 'Cápsulas',
        stock: 50,
        precioVentaUni: 1.00,
        precioVentaPres: 10.00,
        CodTipoMed: 2,
        Marca: 'MarcaX',
        CodEspec: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medicamentos', null, {});
  }
};