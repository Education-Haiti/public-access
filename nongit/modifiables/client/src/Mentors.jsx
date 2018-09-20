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
		}
	}

	componentWillMount() {
		this.getMentors();
	}

	getMentors() {
		axios.get('/visitors/mentors')
			.then((response) => {
				this.setState({ mentors: response.data });
			})
			.catch((error) => {
				console.log('Axios error in getting mentors');
			})

	}

	render() {
		return (
			<div>
				<div className="mentors-container">
					<div className="mentors-title">
						MENTORS
					</div>

					<div className="mentors-description">
						Education Haiti helps bright Haitian students make the most of their potential and transforms them into leaders
					</div>

					<div className="mentors-line-container">
						{
							this.state.mentors.map((mentor, index) => {
								return (
									<div className="mentor-container">
										<img className="mentor-photo" src={mentor.photo}/>
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