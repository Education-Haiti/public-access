import React from 'react';

const Footer = (props) => {
	const { links } = props;

	let $links = links.map (({label, url}, index) => (
		<a key={index}href={url}>{label}</a>
	));

	return (
		<div className="footer row">
			<div className="column links">
				<div>
					Copyright © 2018 Education Haiti. All rights reserved.
				</div>
				<div className="row">
					<a href="https://www.facebook.com/educationhaiti/" target="_blank" rel="noopener noreferrer">
					  <img className="icon" src="https://s3.amazonaws.com/educationhaiti/facebook.png"/>
					</a>

					<a href="https://twitter.com/Education_Haiti" target="_blank" rel="noopener noreferrer">
					  <img className="icon" src="https://s3.amazonaws.com/educationhaiti/twitter.png"/>
					</a>
						
						
				</div>
			</div>
			<div className="column links" >
				<div className="heading">
					PAGES
				</div>
				{ $links }
			</div>
		</div>
	)
}

export default Footer;
