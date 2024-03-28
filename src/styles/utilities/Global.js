// using styled-components to create a global style for the app
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
  body {
    min-height: 100vh;
    background-image: url('/images/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }
`

export default GlobalStyle
