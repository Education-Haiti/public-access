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
			description: 'We currently accept mentees from haitian secondary schools located for the most part in the Port-au-Prince area.'
		},
		{
			label: 'Programs',
			url: 'https://s3.amazonaws.com/educationhaiti/programs.png',
			description: 'Our various programs help students expand their horizons and prepare for the different college application processes.'
		} 
	];

	let rows = cards.map(card => {
		return <PromoCard card={card}/>
	});

	return (
		<div className="promo-container">
			{rows}
		</div>

	)
}

export default Promo;