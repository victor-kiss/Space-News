import React from 'react'

import Head from '../head/head'
import Navbar from '../navbar/navbar'

import Div from '../../patterns/div'
import FlexDiv from '../../patterns/flex-div'
import styled, { keyframes } from 'styled-components'

// header component content head, navbar, and the div of site name

const LetterAnimation = keyframes`
    0%{
        opacity:0.7;
    }
    50%{
        opacity:0.80;
    }
    80%{
        opacity:1;
    }
    100%{
        opacity:0.7;
    }
`

const Letter = styled.h1`
    font-size:4.6em;
    text-transform: uppercase;
    color:#FFF;
    opacity: 0.7;
    animation:${LetterAnimation} 3s infinite linear;
    @media(max-width:567px){
        font-size:2.8em;
    }
`


export default function header({title}) {
    return (
        <header>
            <Div background="linear-gradient(45deg, #21D4FD 0%, #B721FF 100%)">
                <Head title={title}/>
                <Navbar/>
                    <FlexDiv width="100%" height="300px" align="center" justify="center" >
                        <Letter>Space News</Letter>
                    </FlexDiv>
            </Div> 
        </header>
    )
}
