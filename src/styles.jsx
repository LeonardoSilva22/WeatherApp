import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box ;
        font-family: 'Dosis', sans-serif;
    }
    
    body{   
        font-size: 1.5rem;
        font-weight: 300;
        height: 100vh;
        background-color:#242424 ;
        color: #f5f5f5;
        overflow-x: hidden;
    }
`;
