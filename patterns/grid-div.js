import React from 'react'
import styled from 'styled-components'

//semantic component for website construction with props and styled-components

const GridDiv = styled.div`
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor || "none"};

    @media(max-width:576px){
        display:flex;
        flex-direction:${props => props.column || "column-reverse"};
        align-items:flex-start;
        justify-content:center;
    }
`


export default function gridDiv(props) {
    return (
        <GridDiv
        width={props.width}
        height={props.height}
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}
        column={props.column}>
            {props.children}
        </GridDiv>
    )
}
