import React from 'react';
import * as c from './styles';
function Card(props) {
	const week = [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	];

	const weekDay = new Date(props.details.dt * 1000).getDay();
	const date = new Date(props.details.dt * 1000).toLocaleDateString();
	return (
		<c.Card>
			<h1>{week[weekDay]}</h1>
			<small>{date}</small>
			<img
				src={`https://openweathermap.org/img/wn/${props.details.weather[0].icon}@2x.png`}
				alt=""
				width={80}
			/>
			<div>Max: {Math.round(props.details.temp.max)}ºC</div>
			<div>Min: {Math.round(props.details.temp.min)}ºC</div>
		</c.Card>
	);
}

export default Card;
