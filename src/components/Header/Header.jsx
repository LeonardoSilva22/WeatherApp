import React from 'react';
import * as c from './styles';
import Clock from '../Clock/Clock'
function Header() {

	const date = new Date().toLocaleDateString()


	return (
		<c.Header>
			<c.Container>
				<c.LogoArea>
					<img src="/img/logo.png" alt="" />
				</c.LogoArea>
				<c.DateArea>
					<small>{date}</small>
					<Clock className="clock" />
				</c.DateArea>
			</c.Container>
		</c.Header>
	);
}

export default Header;
