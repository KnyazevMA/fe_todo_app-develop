'use strict';

import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( 'User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [6, 16],
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set (val) {
        this.setDataValue( 'password', bcrypt.hash( val, 10 ) );
      }
    }
  }, {} );

  User.associate = function (models) {
    User.belongsTo(models.User, {
      foreignKey: {
        field: 'userId',

      },
      as: {
        plural: 'tasks',
        singular: 'task'
      }
    });
  };
  return User;
};