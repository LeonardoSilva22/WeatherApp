import styled from 'styled-components';

export const CardList = styled.div`
	display: flex;
	justify-content: center;
	background-color: #121212eb;
	width: 100%;

`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	max-width: 1360px;
	padding: 20px;
	justify-items: center;
	align-content: center;

	@media(max-width:375px){
		padding: 10px;
	}
`;

export const Cards = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-content: center;
	gap: 10px;

	@media (max-width: 1360px) {
		overflow: auto;
	}
`;
