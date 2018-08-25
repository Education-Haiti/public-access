import React from 'react';

const Navigation = (props) => {
	const {links, handleNavClick} = props;

	let rows = links.map (({label}) => (
		<button 
			className={"nav-button "} 
			onClick={() => handleNavClick(label)}
		>
			{label}
		</button>
	));

	return (
		<div className="header row">
			<div className="logo">EDUMACATION JP</div>
			<div className="navigation">
				{rows}
				<button className="login button">LOG IN</button>
			</div>
		</div>
	)

}

export default Navigation;
