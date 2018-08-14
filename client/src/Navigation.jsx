import React from 'react';

const Navigation = (props) => {
	const buttonLabels = ['Home', 'Success Stories', 'Mentors', 'Resources', 'Apply', 'Login'];
	let rows = buttonLabels.map ((label) => (
		<button className="nav-button" onClick={() => props.handleNavClick(label)}>{label}</button>
	));

	return (
		<div className="nav-bar">
			{rows}
		</div>
	)

}

export default Navigation;
