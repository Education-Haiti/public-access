import React from 'react';


const PromoCard = (props) => (
	<div className="promo-card column">
		<div className="circle">*</div>
		<div className="label">{props.card.label}</div>
		<div>{props.card.description}</div>
	</div>
)


const Promo = (props) => {

	const cards = [
		{
			label:'Mission', 
			url:'https://picsum.photos/200/200', 
			description: 'To forge the next generation of young leaders in Haiti.'
		},
		{
			label: 'Scope',
			url: 'https://picsum.photos/200/200',
			description: 'We currently accept mentees from haitian secondary schools located for the most part in the Port-au-Prince area.'
		},
		{
			label: 'Programs',
			url: 'https://picsum.photos/200/200',
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