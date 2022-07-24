import styled from 'styled-components';

export const Footer = styled.footer`
	bottom: 0px;
	left: 0px;
	width: 100%;
	background-color: #151515;
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 1360px;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	height: 60px;
	p {
		display: flex;
		align-items: center;
	}
	div {
		display: flex;
		align-items: center;
		font-size: 35px;
		gap: 10px;

		a {
			color: #f5f5f5;
		}
	}

	@media (max-width: 558px) {
		font-size: 20px;
	}
`;
