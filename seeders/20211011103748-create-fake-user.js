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
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: "doe@gmail.com",
        password: "123123123",
        numberPhone: "012121221",
        avatar: "https://fundraisingcore.demo.fit/storage/blogs/introducing-coinlist-karma-earn-rewards-for-advancing-crypto.jpg",
        type: "ADMIN",
        createdAt: "2021-09-18 12:09:32",
        updatedAt: "2021-09-18 12:09:32",
      },
      {
        name: 'John Son',
        email: "son@gmail.com",
        password: "123123123",
        numberPhone: "012121221",
        avatar: "https://fundraisingcore.demo.fit/storage/blogs/introducing-coinlist-karma-earn-rewards-for-advancing-crypto.jpg",
        type: "ADMIN",
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
