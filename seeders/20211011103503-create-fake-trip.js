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
      await queryInterface.bulkInsert('trips', [{
        fromStation: 42,
        toStation: 43,
        startTime: "2021-06-17 08:00:00",
        price: 200000,
        createdAt: '2021-10-06 06:10:02',
        updatedAt: '2021-10-06 06:10:02'
      },
      {
        fromStation: 43,
        toStation: 44,
        startTime: "2021-06-17 08:00:00",
        price: 280000,
        createdAt: '2021-10-06 06:10:02',
        updatedAt: '2021-10-06 06:10:02'
      },
      {
        fromStation: 44,
        toStation: 45,
        startTime: "2021-06-17 08:00:00",
        price: 280000,
        createdAt: '2021-10-06 06:10:02',
        updatedAt: '2021-10-06 06:10:02'
      },
            {
        fromStation: 45,
        toStation: 43,
        startTime: "2021-06-17 08:00:00",
        price: 280000,
        createdAt: '2021-10-06 06:10:02',
        updatedAt: '2021-10-06 06:10:02'
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
     await queryInterface.bulkDelete('trips', null, {});
  }
};
