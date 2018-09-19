const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'mysqldb', // when not dockerizing, change the hosts name to "localhost"
	user: 'root',
	password: 'abc',
	database: 'visitors',
	port: '3306',
	
});

connection.connect((err) => {
	if (err) {
		console.log('Error connecting to mysql !! ', err);
	} else {
		console.log('Successful connection to mysql !!');
	}
})

module.exports = connection;