// const { Pool } = require('pg');

// const pool = new Pool({
// 	user: 'tanzim',
// 	host: 'localhost',
// 	database: 'nodeApp',
// 	password: 'password',
// 	port: 5432,
// });

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://tanzim:password@localhost:5432/nodeApp');


module.exports = sequelize;