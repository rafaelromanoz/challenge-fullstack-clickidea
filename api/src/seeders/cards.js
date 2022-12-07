const {v4} = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Cards',
      [
        {
          id: v4(),
          list: 'column1',
          content: 'Vqv',
          title: 'Primeiro card',
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Cards', null, {}),
};
