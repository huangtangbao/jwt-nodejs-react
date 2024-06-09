'use strict';

module.exports = {

  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'johndoe1@gmail.com',
        password: '1234166',
        username: 'anhjohn1'
      },
      {
        email: 'johndoe2@gmail.com',
        password: '1234166',
        username: 'anhjohn2'
      }, {
        email: 'johndoe2@gmail.com',
        password: '1234166',
        username: 'anhjohn3'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
