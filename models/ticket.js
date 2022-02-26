'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users,Trip }) {
      // define association here
     this.belongsTo(Users, {foreignKey : "user_id"});
     this.belongsTo(Trip, {foreignKey : "trip_id"})
    }
  };
  Ticket.init({
    // id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};