/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/flex-div'
import Div from '../../patterns/div'


//footer component

export default function footer() {
    return (
        <Footer>
            <FlexDiv direction="row" justify="baseline" align="baseline">
            <Div 
              margin="10px" padding="10px" width="50%">
                  <h3>About</h3>
                  <p>A simple project using one of my favorite APIs and one of my favorite themes which is about space, the project is focused on <br/>ui / ux and improving my skills in those areas and programming.</p>
              </Div>
              <Div 
              margin="10px" padding="10px" width="50%">
                  <h3>Creator</h3>
                  <p>Hi, my name is Victor Kiss, I'm a web development student, at the moment I'm focused on the frontend and I'm always trying to improve, I hope you like the site and the idea.</p>
                  <a href="https://links-victor-kiss.vercel.app"  target="_blank" rel="noreferrer">Click here to go to my social networks!</a>
              </Div>
            </FlexDiv>
                <FlexDiv padding="10px" aling="center" justify="center" background="#1976d2">
                    <span>Developed with <i className="bi bi-heart-fill"></i> by Victor Kiss 
                    </span>
                </FlexDiv>
        </Footer>
    )
}
