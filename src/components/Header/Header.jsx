import React from 'react';
import * as c from './styles';
import { BsSearch } from 'react-icons/bs';
function Header(prop) {
	return (
		<c.Header>
			<c.Container>
				<div>
					<img src="/img/logo.png" alt="" />
				</div>
			</c.Container>
		</c.Header>
	);
}

export default Header;
