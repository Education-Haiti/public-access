DROP DATABASE IF EXISTS visitors;
CREATE DATABASE visitors;

USE visitors;

CREATE TABLE successful_mentees (
	id INT NOT NULL AUTO_INCREMENT, 
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	bio TEXT NOT NULL,
	photo VARCHAR(250) NOT NULL,
	PRIMARY KEY(id)
);


INSERT INTO successful_mentees (first_name, last_name, bio, photo) VALUES ('Bedjinal', 'Gondré', 'Born and raised in Haïti, Bedjinal is a student who came from a family which faced  difficulties. He attended high school at Saint-Louis de Gonzague only a few months after the earthquake of 2010. Fortunately, he continued to be a meticulous student. Thanks to his mentors and some teachers, he started with the preparation of standardized tests(TOEFL, SAT) during the academic year 2013-2014. His determination allowed him to be accepted at Berea College for class of 2021.  His chosen major is general economics. He plays soccer and practices track and field.', 'https://s3.amazonaws.com/educationhaiti/bedginal_gondre.png');


INSERT INTO successful_mentees (first_name, last_name, bio, photo) VALUES ('Kelly', 'Jean', 'Originally from Haiti, Kelly Rubens Jean attended Jean-Marie Guilloux during five years, then the Institution Saint-Louis de Gonzague from 2010 to 2017. Surrounded by highly determined people, Kelly dreamed about studying abroad long years ago. Thanks to God and his mentors, he is a part of  the Class of 2021 of the University of Rochester. Science-minded, Kelly intends to study Mechanical Engineering and Computer Science. Also, he is passionate about drawing and ecological activities.', 'https://s3.amazonaws.com/educationhaiti/kelly_jean.png');

INSERT INTO successful_mentees (first_name, last_name, bio, photo) VALUES ('Ludgie', 'Gelin', 'Ludgie grew up in Haiti where she received both elementary and secondary education. She graduated from Institution du Sacré-Coeur where she went to school from Kindergarten to Philo (2003-2017). She was admitted to the University of Notre Dame where she intends to pursue an engineering degree with a minor in economics, hoping to put her knowledge at the service of useful purposes later on. She enjoys playing music, spending time with family and reading is among her favorite hobbies.', 'https://s3.amazonaws.com/educationhaiti/ludgie_gelin.png');

INSERT INTO successful_mentees (first_name, last_name, bio, photo) VALUES ('Beverlye', 'Gedéon', 'Beverlye was born and raised in Haiti. She attended College Marie Anne from 2004 to 2017, the year she graduated and the same year she was admitted to the Class of 2021 of the University of Pennsylvania. Dreaming about creating her own green company, Beverlye is interested in a major in Economics and a minor in Environmental Studies. She has also developed a passion for both music and volleyball, hobbies that she will use to bring her spark on the campus during her college journey.', 'https://s3.amazonaws.com/educationhaiti/beverlye_gedeon.png');




