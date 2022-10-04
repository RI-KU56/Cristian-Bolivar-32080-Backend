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
		host: '127.0.0.1',
		port : 3306,
		user: 'root',
		password: '',
		database: 'nuestra_primera_db'
	}
}

module.exports = { optionsSQLite3, optionsMariaDB };