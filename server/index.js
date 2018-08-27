const express = require ('express');
const path = require ('path');
const PORT = process.env.PORT || 3000;
const queries = require('../database/queries.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.json());

app.get('/visitors/successful-mentees', (req, res) => {
	queries.getSuccessfulMentees((err, results) => {
		if (err) {
			console.log('Server-side error in query to get data from successful-mentees table :', err);
		} else {
			res.json(results);
		}
	})

});

app.get('/visitors/mentors', (req, res) => {
	queries.getMentorsVisits((err, results) => {
		if (err) {
			console.log('Server-side error in query to get data from the mentors-visits table: ', err);
		} else {
			res.json(results);
		}
	})
})

app.listen(PORT, () => console.log('Listening at ' + PORT));


