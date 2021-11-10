import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --primary-color: #d1d1d1;
    --secondary-color:#32ff7e;
    --red-color: #F84B4B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Poppins, sans-serif;
    outline:0;

  }

  html, #root, body {
    height: 100%;
    background: #292929;
  }

  input, button, textarea {
    font-family: Poppins, sans-serif;
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }


`;
