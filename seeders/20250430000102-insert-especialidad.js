'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Especialidads', [
      { CodEspec: 1, descripcionEsp: 'Cardiología', createdAt: new Date(), updatedAt: new Date() },
      { CodEspec: 2, descripcionEsp: 'Neurología', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Especialidads', null, {});
  }
};