import React from 'react';
import Navigation from './Navigation.jsx';
import Carousel from './Carousel.jsx';
import Promo from './Promo.jsx';
import WidePanel from './WidePanel.jsx';
import Footer from './Footer.jsx';

class Visitor extends React.Component {
	constructor(props) {
		super(props);
		this.handleNavChange = this.handleNavChange.bind(this);
	}

	handleNavChange (label) {
		console.log(label);
	}

	render () {
		const { links, panels } = this.props;
		const { handleNavChange } = this;

		return (
			<div className="column">
				<Navigation 
					links={links}
					handleNavClick={handleNavChange}
				/>
				<Carousel />
				<Promo />
				<button className="apply button">APPLY NOW</button>
				<WidePanel panel={panels.about} />
				<WidePanel panel={panels.mentors} />
				<Footer links={links} />
			</div>
		)
	}
}

export default Visitor;
