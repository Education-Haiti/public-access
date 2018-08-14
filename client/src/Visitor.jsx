import React from 'react';
import Navigation from './Navigation.jsx';
import Carousel from './Carousel.jsx';
import Promo from './Promo.jsx';

class Visitor extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="column">
				<div className="top-banner">
					<div className="logo">LOGO HERE</div>
					<Navigation />
				</div>
				<button className="apply-button">Apply Today!</button>
				<Carousel />
				<Promo />
			</div>
		)
	}
}

export default Visitor;
