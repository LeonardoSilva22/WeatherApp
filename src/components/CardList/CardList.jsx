import React from 'react';
import Card from './Card/Card';
import * as c from './styles';
function CardList(props) {
	const list = props.cards;
	list.shift();
	list.pop();
	return (
		<c.CardList>
			<c.Container>
				<c.Cards>
					{list.map((details, i) => (
						<Card key={i} details={details} />
					))}
				</c.Cards>
			</c.Container>
		</c.CardList>
	);
}

export default CardList;
