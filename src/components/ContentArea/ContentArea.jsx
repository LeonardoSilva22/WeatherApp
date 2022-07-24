import React from 'react';
import CardList from '../CardList/CardList';
import Clock from '../Clock/Clock';
import * as c from './styles';
function ContentArea(props) {
	return (
		<c.Global>
			<c.Container>
				<div className="leftSide">
					<Clock />
				</div>
				<div className="rightSide">
					<h1>{props.city.name}</h1>
					<h2>{Math.round(props.data.current.temp)}ºC</h2>
				</div>
			</c.Container>
			<CardList cards={props.data.daily} />
		</c.Global>
	);
}

export default ContentArea;
