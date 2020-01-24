'use strict';

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable( 'Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING( 64 ),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING( 64 ),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      login: {
        type: Sequelize.STRING( 16 ),
        unique: true,
        allowNull: false,
      },
      passwordHash: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable( 'Users' );
  }
};