import React from 'react';
import * as f from './styles';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
function Footer() {
	return (
		<f.Footer>
			<f.Container>
				<p>Site criado por Leonardo Silva</p>
				<div>
					<a
						href="https://github.com/LeonardoSilva22"
						target="_blank"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/leoscruz/"
						target="_blank"
					>
						<FaLinkedinIn />
					</a>
				</div>
			</f.Container>
		</f.Footer>
	);
}

export default Footer;
