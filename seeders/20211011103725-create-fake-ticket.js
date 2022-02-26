'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('tickets', [{
        trip_id: 36,
        user_id: 14,
        createdAt: "2021-09-18 12:09:32",
        updatedAt: "2021-09-18 12:09:32",
      },
      {
        trip_id: 37, 
        user_id: 14,
        createdAt: "2021-09-18 12:09:32",
        updatedAt: "2021-09-18 12:09:32",
      },
      {
        trip_id: 38,
        user_id: 15,
        createdAt: "2021-09-18 12:09:32",
        updatedAt: "2021-09-18 12:09:32",
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('tickets', null, {});
  }
};
