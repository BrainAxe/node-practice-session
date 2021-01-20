const { Pool } = require('pg');

const pool = new Pool({
	user: 'tanzim',
	host: 'localhost',
	database: 'nodeApp',
	password: 'password',
	port: 5432,
});

module.exports = pool;