import styled from 'styled-components'

// styled with boostrap's classes and styled-components

const NavbarStyle = styled.nav`

  nav.navbar{
    padding:5px;
    background-color:rgba(255,255,255,.12);
    backdrop-filter:blur(2px);
}

nav.navbar a.nav-link, a.nav-link.active{
    background:transparent;
    color:#FFF;
    font-weight:bold;
    letter-spacing:1px;
    font-size:1.0em;
    margin:5px;
    cursor:pointer;

    &:hover, &:active, &:focus{
        color:#FFF;
        font-weight:bold;
        font-size:1.2em;
        transition:.2s linear;
    }
}

.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color:#FFF;
}

div.dropdown-menu{
    background: transparent;
    backdrop-filter:blur(2px);
    border:none;
    text-align:center;
}

a.dropdown-item{
    background:transparent;
    backdrop-filter:blur(2px);
    color:#FFF;
    letter-spacing:1px;
    font-weight:bold;

    &:focus, &:hover, &:active{
        color:#FFF;
        font-weight:bold;
        font-size:1.2em;
        transition:.2s linear;
    }
}


// toggle button style

.navbar-light .navbar-toggler {
    color:transparent;
    border-color:transparent;
}

// mobile version

div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
    }
}
`
// toggle icon
const BarStyle = styled.i`
    color:#FFF;
    font-size:1.85em;
`
export {NavbarStyle,BarStyle}