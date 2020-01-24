'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable( 'Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: "id",
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deadline: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable( 'Tasks' );
  }
};