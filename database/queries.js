const connection = require('./index.js');

const getSuccessfulMentees = (whenGotten) => {
	const theQuery = `SELECT * FROM successful_mentees`;
	connection.query(theQuery, (err, res) => {
		if (err) {
			console.log('Database-side error in retrieving data from the successful_mentees table : ', err);
			whenGotten(err);
		} else {
			whenGotten(null, res);
		}
	});
}

const getMentorsVisitors = (whenGotten) => {
	const theQuery = `SELECT * FROM mentors_visits`;
	connection.query(theQuery, (err, res) => {
		if (err) {
			console.log('Database-side error in retrieving data from the mentors_visits table : ', err);
		} else {
			whenGotten(null, res);
		}
	})
}

/*getSuccessfulMentees((err, res) => {
	console.log('Here it is! ', res);
})*/

getMentorsVisitors((err, res) => {
	console.log('Here it is! ', res);
})

module.exports = {
	getSuccessfulMentees,
	getMentorsVisitors
};