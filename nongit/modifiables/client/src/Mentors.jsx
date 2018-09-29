import React from 'react';
import Navigation from './Navigation.jsx';
import Carousel from './Carousel.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

class Mentors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mentors: [''],
			showGoogleForm : false,
			isDataReady: false,
		}
	}

	componentWillMount() {
		this.getMentors();
	}

	getMentors() {
		axios.get('/visitors/mentors')
			.then((response) => {
				this.setState({ 
					isDataReady: true,
					mentors: response.data });
			})
			.catch((error) => {
				console.log('Axios error in getting mentors');
			})

	}

	render() {
		let holder = null; 
		let mentors = null;

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
			mentors = 
					<div className="mentors-line-container">
						{
							this.state.mentors.map((mentor, index) => {
								return (
									<div className="mentor-container">
										<img className="mentor-photo" src={mentor.photo || 'https://s3.amazonaws.com/educationhaiti/pending.png'}/>
										<div className="mentor-name"> {mentor.first_name + ' ' + mentor.last_name} </div>
										<div className="mentor-description"> 
											<div> {mentor.highschool} </div>
											<div> {mentor.undergrad} </div>
											<div> {mentor.grad} </div>
											<div> {mentor.employer} </div>
										</div>

									</div>
								)
							})
						}

					</div> 	
		}
		return (
			<div>
				<div className="mentors-container">
					<div className="mentors-title">
						MENTORS
					</div>

					<div className="mentors-description">
						Education Haiti helps bright Haitian students make the most of their potential and transforms them into leaders
					</div>
					{holder}
					{mentors}

					<div className="mentors-bottom-section-container">
						<div className="mentors-bottom-section-text"> 
							We are helping forge the next generation of Haitian leaders. Our work is easy and impactful!
						 </div>

						 <div className="mentors-bottom-section-button" onClick={() => {this.props.onClick(2)}}>
						   BECOME A MENTOR TODAY
						 </div>
					</div>

				</div>
			</div>
		)
	}
}

	
export default Mentors;