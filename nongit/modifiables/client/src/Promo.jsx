import React from 'react';


const PromoCard = (props) => (
	<div className="promo-card column">
		<img className="circle" src={props.card.url}/>
		<div className="label">{props.card.label}</div>
		<div>{props.card.description}</div>
	</div>
)


const Promo = (props) => {

	const cards = [
		{
			label:'Mission', 
			url:'https://s3.amazonaws.com/educationhaiti/mission.png', 
			description: 'To forge the next generation of young leaders in Haiti.'
		},
		{
			label: 'Scope',
			url: 'https://s3.amazonaws.com/educationhaiti/scope.png',
			description: 'We mentor students between grades 10 and 13 all over Haiti.'
		},
		{
			label: 'Programs',
			url: 'https://s3.amazonaws.com/educationhaiti/programs.png',
			description: 'We assist bright Haitian high schools students in their applications to top colleges.'
		} 
	];

	let rows = cards.map((card, index) => {
		return <PromoCard key={index} card={card}/>
	});

	return (
		<div className="promo-container">
			{rows}
		</div>

	)
}

export default Promo;