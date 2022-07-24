import React, { useEffect, useState } from 'react';
import * as c from './styles';
function Clock() {
	const [clock, setClock] = useState('');

	useEffect(() => {
		const date = new Date();
		const hh = date.getHours();
		const mm = date.getMinutes();

		if (hh < 10) {
			hh = '0' + hh;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}

		setClock(hh + ':' + mm);
	}, []);

	return <c.Clock>{clock}</c.Clock>;
}

export default Clock;
