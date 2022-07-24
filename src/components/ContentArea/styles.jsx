import styled from 'styled-components';

export const Global = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: calc(100vh - 120px);
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1360px;
	padding: 3% 20px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	.leftSide {
		flex: 1;
	}

	.rightSide {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		h1 {
			font-size: 70px;
			word-wrap: break-word;
		}
		h2 {
			font-size: 50px;
		}
		div {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}

	@media (max-width: 558px) {
		flex-direction: column;
		text-align: center;
		align-items: center;

		h1,
		h2 {
			font-size: 50px;
		}
		.leftSide {
			flex: 0;
		}
		div {
			width: 100%;
			justify-content: center;
		}
		h2 {
			text-align: center;
		}
	}
`;
