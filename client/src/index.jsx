import React from 'react';
import ReactDOM from 'react-dom';
import Visitor from './Visitor.jsx';

const links = [
	{ label: 'Home', url: 'www.google.com'},
	{ label: 'Success Stories', url: 'www.google.com'},
	{ label: 'Mentors', url: 'www.google.com'},
	{ label: 'Resources', url: 'www.google.com'},
]

const panels = {
	about: 
	{
		label: 'About Us', 
		tag: 'about',
		description: 'We strive to provide talented haitian students with mentorship in an effort to open doors to greater and better higher education opportunities.',
		buttonContent: 'Success Stories'
	},
	mentors:
	{ label: 'Mentors', 
		tag: 'mentors',
		description: 'Education Haiti mentors are young, successful haitien women and men who strive to help their mentees in the process of applying for education abroad. If you are interested in becoming a mentor, please click on this button',
		buttonContent: 'Become a mentor'
	}
}

 ReactDOM.render(<Visitor links={links} panels={panels}/>, document.getElementById('visitors'));
