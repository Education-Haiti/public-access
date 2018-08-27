import React from 'react';

const Navigation = (props) => {
	const {links, handleNavClick, handleNavButtonClicks} = props;

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
			<div className="logo">Education Haiti</div>
			<div className="navigation">
				{rows}
				<button className="apply-b button" onClick={() => {handleNavButtonClicks(1)}}> APPLY </button>
				<button className="login button"> LOG IN </button>
			</div>
		</div>
	)

}

export default Navigation;
