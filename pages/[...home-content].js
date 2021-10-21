import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


import Header from '../components/header/header'

import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'

import Astronaut from '../assets/images/astronaut.png'
import Astronaut1 from '../assets/images/astronaut1.png'

import Footer from '../components/footer/footer'


const Button = styled.button`
    font-size:1.2em;
    border:2px solid #2196f3;
    border-radius:10px;
    margin:40px 0;
    padding:10px 20px;
    background:transparent;
    a{
        color:#2196f3;
        font-weight:600;
        text-decoration:none;
    }
`

export default function homeContent() {
    return (
        <>
           <Header title="Space News"/>

           <GridDiv margin="50px 10px" padding="10px" >
                <Div>
                    <h2>A new experience awaits you!</h2>

                    <p>Get space data in a simple and practical way and offer a unique experience with verified and official data about space.</p>
                    <p> <b>Space News</b> is a project made in Next.js and styled-components by Victor Kiss. Thank you so much for visiting this site, i hope you like the site and enjoy the experience.</p>

                    <Button>
                        <Link href="/news-of-the-day">
                            <a>News of the day</a>
                        </Link>
                    </Button>
                </Div>
                <Div>
                <Img src={Astronaut} alt="astronaut" width="100%" height="100%"/>
                </Div>
            </GridDiv>

            <GridDiv margin="50px 10px" padding="10px" column="column">
                <Div>
                <Img src={Astronaut1} alt="astronaut" width="100%" height="auto" padding="10px"/>
                </Div>
                <Div>
                    <h2>Data direct from NASA</h2>

                    <p>The data on this site comes directly from NASA through APIs made available by NASA for programmers and developers to use them on their websites and this is one of the sites that consume this api.</p>
                    <p>NASA makes several APIs available for free use, to use them just login and then start using the API.</p>

                    

                    <Button>
                            <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">NASA APIs</a>
                    </Button>
                </Div>
            </GridDiv>
            <Footer/>
        </>
    )
}
