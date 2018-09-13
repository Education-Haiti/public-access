import React from 'react';
import Navigation from './Navigation.jsx';
import Carousel from './Carousel.jsx';
import Promo from './Promo.jsx';
import WidePanel from './WidePanel.jsx';
import Footer from './Footer.jsx';
import SuccessStories from './SuccessStories.jsx';
import Mentors from './Mentors.jsx'

class Visitor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 'Home'
		}
		this.handleNavChange = this.handleNavChange.bind(this);
	}

	handleNavChange (label) {
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

	handleNavButtonClicks(identifier) {
		if (identifier === 1) {
			this.setState({currentView: 'Apply Mentee'});
		} else if (identifier === 2) {
			this.setState({currentView: 'Apply Mentor'});
		} else if (identifier === 3) {
			this.setState({currentView: 'Success Stories'}); // needed for clicks on success stories button (not in nav bar)
		}
		
	}

	render () {
	    const { links, panels } = this.props;
		const { handleNavChange } = this;
		const { handleNavButtonClicks } = this;

		let carousel = (<Carousel/>);
		let footer = (<Footer links={links} />);

		let promo = null;
		let apply = null;
		let widepanelAbout = null;
		let widepanelMentors = null;

		let successStories = null;
		let applyGoogleForm = null;

		let mentors = null;

		if (this.state.currentView === 'Home') {
			promo = (<Promo/>);
			apply = (<button className="apply button" onClick={() => this.handleNavButtonClicks(1)}>APPLY NOW</button>);
			widepanelAbout = (<WidePanel panel={panels.about} onClick={this.handleNavButtonClicks.bind(this)}/>);
			widepanelMentors = (<WidePanel panel={panels.mentors} />);
		} else if (this.state.currentView === 'Success Stories') {
			successStories = (<SuccessStories onClick={this.handleNavButtonClicks.bind(this)}/>)
		} else if (this.state.currentView === 'Apply Mentee'){
			applyGoogleForm = (<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdq_WTycS1uO4jqt5umlnLm5wCHf4vQeKb87Dx2VeITCVQDcQ/viewform?embedded=true" width="700" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>);
			carousel = null;
			footer = null;
		} else if (this.state.currentView ==='Apply Mentor') {
			applyGoogleForm = (<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSceuyATJy7ST9bEHgpJZvG1HuKXhQorYTxd4tNeM8ZZmOGFkQ/viewform?embedded=true" width="700" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>);
			carousel = null;
			footer = null;
		} else if (this.state.currentView === 'Mentors') {
			mentors = (<Mentors onClick={this.handleNavButtonClicks.bind(this)}/>);
		}


		return (
			<div className="column">
				<Navigation 
					links={links}
					handleNavClick={handleNavChange}
					handleNavButtonClicks={this.handleNavButtonClicks.bind(this)}
				/>
				{carousel}
				{promo}
				{apply}
				{widepanelAbout}
				{widepanelMentors}
				{successStories}
				{mentors}
				{applyGoogleForm}
				{footer}
			</div>
		)
	}
}

export default Visitor;
