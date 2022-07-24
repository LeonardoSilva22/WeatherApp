import React, { useEffect, useState } from 'react';
import { api } from './api';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContentArea from './components/ContentArea/ContentArea';
import Loading from './components/Loading/loading';
export default function App() {
	const [data, setData] = useState();
	const [search, setSearch] = useState('');
	const [city, setCity] = useState();

	async function getWeatherByCoords(lat, lon) {
		const response = await api.getWeatherByCoords(lat, lon);
		setData(response);
	}

	async function getCurrentLocation(lat, lon) {
		const response = await api.getCurrentLocation(lat, lon);
		setCity(response);
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			getWeatherByCoords(
				position.coords.latitude,
				position.coords.longitude
			);

			getCurrentLocation(
				position.coords.latitude,
				position.coords.longitude
			);
		});
	}, []);

	return (
		<div>
			<Header search={search} setSearch={setSearch} />
			{data && city ? (
				<ContentArea data={data} city={city} />
			) : (
				<Loading />
			)}
			<Footer />
		</div>
	);
}
