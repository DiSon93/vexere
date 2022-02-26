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
      await queryInterface.bulkInsert('stations', 
      [{
       name: 'Bến xa miền Tây',
        address: "395, Kinh dương Vương",
        province: "HCM",
        createdAt: "2021-09-18 12:09:32",
        updatedAt: "2021-09-18 12:09:32",
      },
      {
        name: 'Bến xa miền Đông',
         address: "22, QL13, Bình Thạnh",
         province: "ĐN",
         createdAt: "2021-09-18 12:09:32",
         updatedAt: "2021-09-18 12:09:32",
       },
       {
        name: 'Bến xa miền Nam',
         address: "22, Lê Văn Duyệt, Q8",
         province: "VT",
         createdAt: "2021-09-18 12:09:32",
         updatedAt: "2021-09-18 12:09:32",
       },
       {
        name: 'Bến xa miền Bắc',
         address: "22, Lê Văn Lượng, Q10",
         province: "VT",
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
     await queryInterface.bulkDelete('stations', null, {});
  }
};
