import styled from 'styled-components';

export const Card = styled.div`
	min-width: 200px;
	min-height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content:center ;
	border: 1px solid #f1f1f12f;
	padding: 15px;
	h1 {
		font-size: 34px;
	}
	
	@media(max-width:700px){
		min-width: 150px;
		min-height: 180px;
		padding:5px ;

		div{
			font-size: 20px;	
		}
		h1{
			font-size: 24px;
		}
		img{
			width: 60px;
		}
	}
	@media(max-width:375px){
		min-width: 150px;
		min-height: 180px;
		padding:5px ;

		div{
			font-size: 20px;	
		}
		h1{
			font-size: 24px;
		}
		img{
			width: 60px;
		}
	}
`;
