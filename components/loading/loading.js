/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import GridDiv from '../../patterns/grid-div'
import Div from '../../patterns/div'
import Img from '../../patterns/img'

import Planets from '../../assets/images/planets.png'

export default function loading() {
    return (
        <GridDiv margin="50px 10px" padding="10px" >
                <Div>
                    <h2>loading...</h2>

                    <p>Fetching data from the central.. Oh no, it looks like aliens want to prevent this data from being fetched, please wait while our team resolves this issue with our alien friends!</p>
                </Div>
                <Div>
                <Img src={Planets} alt="astronaut" width="100%" height="100%"/>
                </Div>
            </GridDiv>
    )
}
