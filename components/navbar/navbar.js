import React from 'react'

import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {NavbarStyle,BarStyle} from './style'
import Img from '../../patterns/img'
import Icon from '../../assets/images/satellite.png'

// react-bootstrap component with styled-components

export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg">
                <Img src={Icon} width="48px" height="48px" margin="5px"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button" onClick={changeNavbarIcon}>
              <BarStyle>
                <i className="icon bi bi-list"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="/"  rel="noreferrer">Home</Nav.Link>
                <Nav.Link href="/news-of-the-day" rel="noreferrer" >News of the day</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </NavbarStyle>
    </>
    )
}

function changeNavbarIcon() {
    let iconButton = document.querySelector(".icon")

   if(iconButton.classList.contains("bi-list")){
        iconButton.classList.remove("bi-list")
        iconButton.classList.add("bi-x")
   }else{
    iconButton.classList.add("bi-list")
    iconButton.classList.remove("bi-x")
   }
}