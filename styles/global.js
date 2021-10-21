import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        width:100%;
        height:100%;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:600;
        color:#202124;
    }

    p{
        line-height:32px;
        font-size:1.2em;
    }
    svg{
        font-size:1.3em;
    }
    b{
        color:#333;
    }
`
export default GlobalStyle