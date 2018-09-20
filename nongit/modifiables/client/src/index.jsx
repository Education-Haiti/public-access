import React from 'react';
import ReactDOM from 'react-dom';
import Visitor from './Visitor.jsx';

const links = [
	{ label: 'Home', url: 'www.google.com'},
	{ label: 'Success Stories', url: 'www.google.com'},
	{ label: 'Mentors', url: 'www.google.com'},
]

const panels = {
	about: 
	{
		label: 'About Us', 
		tag: 'about',
		description: 'We strive to provide talented Haitian students with mentorship in an effort to open doors to greater and better higher education opportunities while helping forge the next generation of Haitian leaders.',
		buttonContent: 'Success Stories',
		handleClickType: 3
	},
	mentors:
	{ label: 'Mentors', 
		tag: 'mentors',
		description: 'Education Haiti mentors are young, successful Haitian women and men who strive to help high potential Haitian high school students in the process of applying to education abroad. If you are interested in becoming a mentor, please click on this button',
		buttonContent: 'Become a mentor',
		handleClickType: 2
	}
}

 ReactDOM.render(<Visitor links={links} panels={panels}/>, document.getElementById('visitors'));
