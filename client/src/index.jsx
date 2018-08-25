import React from 'react';
import ReactDOM from 'react-dom';
import Visitor from './Visitor.jsx';

const links = [
	{ label: 'Home', url: 'www.google.com'},
	{ label: 'Success Stories', url: 'www.google.com'},
	{ label: 'Mentors', url: 'www.google.com'},
	{ label: 'Resources', url: 'www.google.com'},
	{ label: 'Apply', url: 'www.google.com'},
]

const panels = {
	about: 
	{
		label: 'About Us', 
		tag: 'about',
		description: 'We raise, slaughter, and sell the best chiknz' + 
				' in an effort to save innocent cows and give them better lives. ' +
				' We believe all cows are created equal. They deserve better. ' +
				' But not chiknz. Chiknz are just fake dinosaurs. They gross.',
		buttonContent: 'Success Stories'
	},
	mentors:
	{ label: 'Mentors', 
		tag: 'mentors',
		description: 'We all have a moral obligation to reach out to cows in need. ' +
				' You can and should help us save the cows and their families. ' +
				' We are politely asking and strongly demand that you comply with our directive. ' +
				' Or else.',
		buttonContent: 'Become a mentor'
	}
}

ReactDOM.render(<Visitor links={links} panels={panels}/>, document.getElementById('app'));