import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    display: flex;
    min-width: 320px;
    min-height: 100vh;
    background: linear-gradient(var(--gray-700) 200px, var(--gray-600) 0%); 
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  #root {
    width: 100%;
  }

  * {
    padding: 0;
    margin: 0;
  }
`;
