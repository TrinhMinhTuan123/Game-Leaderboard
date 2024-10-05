'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const gameModes = [
    //   {
    //     "id": faker.string.uuid(),
    //     "title": "Dance",
    //     "description": "You will play to the rhythm of dance music - fast, strong and explosive.",
    //     "created_at": new Date(),
    //     "updated_at": new Date(),
    //     "deleted_at": null
    //   },
    //   {
    //     "id": faker.string.uuid(),
    //     "title": "Pop music",
    //     "description": "You will play to the rhythm of pop music—catchy, energetic, and full of life.",
    //     "created_at": new Date(),
    //     "updated_at": new Date(),
    //     "deleted_at": null
    //   },
    //   {
    //     "id": faker.string.uuid(),
    //     "title": "Rock music",
    //     "description": "You will play to the rhythm of rock music—bold, electrifying, and full of power.",
    //     "created_at": new Date(),
    //     "updated_at": new Date(),
    //     "deleted_at": null
    //   },
    //   {
    //     "id": faker.string.uuid(),
    //     "title": "Ballad music",
    //     "description": "You will play to the rhythm of ballad music—gentle, heartfelt, and full of emotion.",
    //     "created_at": new Date(),
    //     "updated_at": new Date(),
    //     "deleted_at": null
    //   }
    // ];
    // await queryInterface.bulkInsert('tbl_game_mode', gameModes, {});
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('tbl_game_mode', null, {});
  }
};