import React from 'react';
import * as l from './styles';
function Loading() {
	return (
		<l.Container>
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</l.Container>
	);
}

export default Loading;
