import styled from 'styled-components';

export const Global = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: calc(100vh - 120px);
`;

export const Container = styled.div`
	flex: 1;
	width: 100%;
	max-width: 1360px;
	padding: 3% 20px;
	display: flex;
	

	.tempArea {
		display: flex;
		flex-direction: column;
		

		h1 {
			font-size: 70px;
			word-wrap: break-word;
			text-shadow: 0px 0px 5px #818181;
		}
		.box {
			width: 100%;
			display: flex;
			

			h2 {
				font-size: 40px;
				text-shadow: 0px 0px 5px #818181;
			}
			img{
				width: 70px;
			}
		}
	}

	@media (max-width: 558px) {
		flex-direction: column;
		text-align: center;
		

		h1,
		h2 {
			font-size: 10px;
		}
		.tempArea {
			flex:1;
			h1 {
				display: flex;
				justify-content:center ;
				align-items:center ;
				height: 150px;
				font-size: 60px;
			}
			.box {
				align-items: center;
				justify-content: center;
				flex-direction: column-reverse;
				flex: 1;

				h2 {
					font-size: 48px;
					
				}
				img {
					width: 100px;
					height: 100px;
				}
			}
		}
	}
	@media (max-width: 558px){
		.tempArea{
			h1{
				font-size:50px ;
			}

			.box{
				h2{
					font-size: 40px;
				}
			}
		}
	}
`;
