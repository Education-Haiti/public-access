import React from 'react';


const PromoCard = (props) => (
	<div>
		<div className="promo-card">{props.label}</div>
	</div>
)


const Promo = (props) => {

	const cards = [
		['Mission', 'https://picsum.photos/200/200'], 
		['Scope', 'https://picsum.photos/200/200'], 
		['Programs', 'https://picsum.photos/200/200']
	];

	let rows = cards.map(card => {
		return <PromoCard label={card[0]} imgUrl={card[1]}/>
	});

	return (
		<div className="promo-container">
			{rows}
		</div>
	)
}

export default Promo;