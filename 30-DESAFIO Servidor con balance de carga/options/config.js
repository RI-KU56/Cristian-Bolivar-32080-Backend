require('dotenv').config();

const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './db/ecommerce.sqlite'
	},
	useNullAsDefault: true
}

const optionsMariaDB = {
	client: 'mysql',
	connection: {
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASS,
		database: 'nuestra_primera_db'
	}
}

module.exports = { optionsSQLite3, optionsMariaDB };