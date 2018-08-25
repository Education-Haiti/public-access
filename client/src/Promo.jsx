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
			description: 'Hello matey, JP Haiti. Chicken gravy is sixty one eighty.'
		},
		{
			label: 'Scope',
			url: 'https://picsum.photos/200/200',
			description: 'Hello matey, JP Haiti. Chicken gravy is sixty one eighty.'
		},
		{
			label: 'Programs',
			url: 'https://picsum.photos/200/200',
			description: 'Hello matey, JP Haiti. Chicken gravy is sixty one eighty.'
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