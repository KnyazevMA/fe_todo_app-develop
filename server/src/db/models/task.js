'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {

  }

  Task.init( {
               isDone: DataTypes.BOOLEAN,
               value: DataTypes.STRING,
               deadline: DataTypes.DATE
             }, {} );

  Task.associate = function (models) {
    Task.belongsTo( models.User, {
      foreignKey: {
        field: 'userId',

      }
    } );
  };
  return Task;
};