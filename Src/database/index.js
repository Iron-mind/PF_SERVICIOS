require('dotenv').config();
;
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
	dialect: 'postgres',
	host: 'localhost',
	logging: false
});




module.exports = sequelize;
