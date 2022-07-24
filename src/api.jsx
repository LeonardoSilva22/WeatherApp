import axios from 'axios';
export const api = {
	getWeatherByCoords: async (lat, lon) => {
		const response = await axios({
			method: 'GET',
			url: 'https://api.openweathermap.org/data/2.5/onecall?',
			params: {
				lat: lat,
				lon: lon,
				units: 'metric',
				exclude: 'minutely,hourly',
				appid: '5b3b1a081040d69a09d8fbfdcfdaeeb4',
			},
		});
		return response.data;
	},
	getCurrentLocation: async (lat, lon) => {
		const city = await axios({
			method: 'GET',
			url: `https://api.openweathermap.org/geo/1.0/reverse?`,
			params: {
				lat: lat,
				lon: lon,
				limit: 1,
				appid: '5b3b1a081040d69a09d8fbfdcfdaeeb4',
			},
		});
		return city.data[0];
	},
};
