 
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;
  }
  button {
    border: none;
  }
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
  html {
    font-size: 16px;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    line-height: 115%;
    color: #0F0F0F;
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    line-height: 125%;
    color: #1F1F1F;
  }
`;