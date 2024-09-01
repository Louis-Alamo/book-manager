'use strict';
/** @type {import('sequelize').ModelCtor<import('sequelize').Model>} */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Asegúrate de ajustar la ruta si es necesario

class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    timestamps: true
});

module.exports = Book;
