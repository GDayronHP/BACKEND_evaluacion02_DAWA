'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Laboratorios', [
      {
        CodLab: 1,
        razonSocial: 'Laboratorio A',
        direccion: 'Av. Siempre Viva 123',
        telefono: '123456789',
        email: 'contacto@labA.com',
        contacto: 'Juan Pérez',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CodLab: 2,
        razonSocial: 'Laboratorio B',
        direccion: 'Calle Falsa 456',
        telefono: '987654321',
        email: 'contacto@labB.com',
        contacto: 'María López',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laboratorios', null, {});
  }
};