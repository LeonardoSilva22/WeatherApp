import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 60px;
	background-color: #303030;
	top: 0px;
	left: 0px;
`;

export const Container = styled.div`
	width: 1360px;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		align-items: center;

		img {
			height: 52px;
		}
	}
`;
