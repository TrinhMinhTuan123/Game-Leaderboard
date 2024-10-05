'use strict';

const { faker } = require('@faker-js/faker');
const { random } = require('lodash');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const players = [];

    // for (let i = 0; i < 1000; i++) {
    //   players.push({
    //     id: faker.string.uuid(),
    //     name: faker.person.fullName(),
    //     age: random(5, 40),
    //     gender: faker.helpers.arrayElement(['male', 'female', 'other']),
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     deleted_at: null
    //   });
    // }

    // await queryInterface.bulkInsert('tbl_player', players, {});
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('tbl_player', null, {});
  }
};