'use strict';
const bcrypt = require( 'bcrypt' );

function generateUsers () {
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push( {
                  firstName: 'Test',
                  lastName: 'Testovich',
                  email: `email${i}@gmail.com`,
                  login: `login_login${i}`,
                  passwordHash: bcrypt.hashSync( `password${1}`, 10 ),
                  createdAt: new Date(),
                  updatedAt: new Date(),
                } );
  }
  return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert( 'Users', generateUsers(), {} );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete( 'Users', null, {} );

  }
};
