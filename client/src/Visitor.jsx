import React from 'react';
import Navigation from './Navigation.jsx';
import Carousel from './Carousel.jsx';
import Promo from './Promo.jsx';
import WidePanel from './WidePanel.jsx';
import Footer from './Footer.jsx';
import SuccessStories from './SuccessStories.jsx';

class Visitor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'Home'
		}
		this.handleNavChange = this.handleNavChange.bind(this);
	}

	handleNavChange (label) {
		console.log(label);
		if (label === 'Home') {
			this.setState({currentView: 'Home'})
		} else if (label === 'Success Stories') {
			this.setState({currentView: 'Success Stories'});
		} else if (label === 'Mentors') {
			this.setState({currentView: 'Mentors'});
		} else if (label === Resources) {
			this.setState({currentView: 'Resources'});
		} 
	}

	render () {
	    const { links, panels } = this.props;
		const { handleNavChange } = this;

		let promo = null;
		let applyButton = null;
		let widepanelAbout = null;
		let widepanelMentors = null;

		let successStories = null;

		if (this.state.currentView === 'Home') {
			promo = (<Promo/>);
			applyButton = (<button className="apply button">APPLY NOW</button>);
			widepanelAbout = (<WidePanel panel={panels.about} />);
			widepanelMentors = (<WidePanel panel={panels.mentors} />);
		} else if (this.state.currentView === 'Success Stories') {
			successStories = (<SuccessStories/>)
		}


		return (
			<div className="column">
				<Navigation 
					links={links}
					handleNavClick={handleNavChange}
				/>
				<Carousel/>
				{promo}
				{applyButton}
				{widepanelAbout}
				{widepanelMentors}
				{successStories}
				<Footer links={links} />
			</div>
		)
	}
}

export default Visitor;
