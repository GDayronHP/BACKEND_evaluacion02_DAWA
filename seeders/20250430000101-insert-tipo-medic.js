'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TipoMedics', [
      { CodTipoMed: 1, descripcion: 'Analgésico', createdAt: new Date(), updatedAt: new Date() },
      { CodTipoMed: 2, descripcion: 'Antibiótico', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TipoMedics', null, {});
  }
};