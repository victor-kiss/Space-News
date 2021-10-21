import styled from 'styled-components'


const Footer = styled.footer`
    height:auto;
    width:100%;
    display:block;
    background-color:#1e88e5;
    color:#fff;

    //footer titles
    h3{
        font-weight:600;
        color:#FFF;
    }

    // footer for different devices
    @media(max-width:576px){
        position:relative;
        bottom:0;
        left:0;
    }
    @media(width:768px){
        position:fixed;
        bottom:0;
        left:0;
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
    }

   //style of spam
    span{
        font-size:1.08em;
    }

    //footer link
    a{
        text-decoration:none;
        font-size:1.2em;
        color:#FFF;
        padding:5px 0;
        font-weight: 600;
    }

    // heart icon

    i.bi-heart-fill{
        color:#e53935;
        vertical-align:middle;
    }
`



export {Footer}