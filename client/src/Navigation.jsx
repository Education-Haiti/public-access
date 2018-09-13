import React from 'react';

const Navigation = (props) => {
	const {links, handleNavClick, handleNavButtonClicks} = props;

	let rows = links.map (({label}, index) => (
		<button 
			key={index}
			className={"nav-button "} 
			onClick={() => handleNavClick(label)}
		>
			{label}
		</button>
	));

	return (
		<div className="header row">
			<img class="nav-logo"  src="https://s3.amazonaws.com/educationhaiti/education_haiti_logo.png"/>
			<div className="navigation">
				{rows}
				<button className="apply-b button" onClick={() => {handleNavButtonClicks(1)}}> APPLY </button>
				<button className="login button" onClick={() => window.open('https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=18715587520.415941101539')}> 
				SIGN IN </button>
				{/*<a className="login button" href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=18715587520.415941101539"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>*/}
			</div>
		</div>
	)

}

export default Navigation;
