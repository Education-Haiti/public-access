import React from 'react';
import Navigation from './Navigation.jsx';
import Carousel from './Carousel.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

class SuccessStories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			successfulMentees: [{
				photo: '',
				first_name: '',
				last_name: ''
			}],
			isDataReady: false,
		}
	}

	componentWillMount() {
		this.getSuccessFullMentees();
	}

	getSuccessFullMentees() {
		axios.get('/visitors/successful-mentees')
			.then((response) => {
				this.setState({ 
					isDataReady: true,
					successfulMentees: response.data });
				
			})
			.catch((error) => {
				console.log('Axios error in getting successful mentees : ', error);
			})

	}

	render() {
		let holder = null;
		let successStories = null; 
		if (this.state.isDataReady === false) {
			holder = 
				<div className="preload">
					<div className="preload-horizontal">
								<img className="preload-logo"  src="https://s3.amazonaws.com/educationhaiti/education_haiti_logo.png"/>
							</div>
					
							<div className="preload-horizontal">
								<div className="loading">
									Loading ...
								</div>
							</div>
				</div>
		} else {
			successStories = 

				<div>
					{
						this.state.successfulMentees.map((mentee, index) => {
							return (
								<div key={index} className="succ-mentee-container">
									<img className="succ-mentee-photo" src={ mentee.photo || 'https://s3.amazonaws.com/educationhaiti/pending.png' }
									onMouseOver={e => e.currentTarget.src=mentee.school_logo}
									onMouseOut={e => e.currentTarget.src=mentee.photo}/>
									<div className="succ-mentee-text-container"> 
										<div className="succ-mentee-name"> { mentee.first_name + ' ' + mentee.last_name } </div>
										<div className="succ-mentee-bio"> { mentee.bio } </div>
									</div>
								</div>
							)
						})
					}
				</div> 	
		}
		return (
			<div>
				<div className="successful-container">
					<div className="succ-title">
						SUCCESS STORIES
					</div>

					<div className="succ-title-description">
						Our programs strive to bring haitian students closer to the colleges of their dreams. Here are some of the great successes we have achieved over the last few years. 
					</div>

					{holder}
					{successStories}


					<div className="succ-bottom-section-container">
						<div className="succ-bottom-section-text"> Education Haiti is an organization that helps Haitian students make the most of their potential
						 </div>

						 <div className="succ-bottom-section-button" onClick={() => {this.props.onClick(1)}}>
						   START WRITING YOUR STORY TODAY
						 </div>
					</div>


				</div>
			</div>
		)
	}
}


export default SuccessStories;