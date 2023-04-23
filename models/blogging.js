const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Blogging extends Model {}

Blogging.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        comment: {
            type: Datatypes.STRING,
            allowNull: false,
        },

    }
);

module.exports = Blogging