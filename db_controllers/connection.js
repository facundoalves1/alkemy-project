const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASSWORD;

const sequelize = new Sequelize(DB_NAME,USER,DB_PASS,{
    host: 'localhost',
    dialect: 'postgres'

});

module.exports = sequelize;