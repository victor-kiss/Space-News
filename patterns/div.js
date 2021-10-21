import React from 'react'
import styled from 'styled-components'

//semantic component for website construction with props and styled-components


const Div = styled.div`
    position:${props => props.position || "relative"};
    background-color:${props => props.bgColor || "none"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};
    background:${props => props.background || "none"};

    
    @media(max-width:576px){
        width:100%;
        display:block;
        margin:0;
    }
`

export default function div(props) {
    return (
        <Div
         position={props.position}
         bgColor={props.bgColor}
         width={props.width}
         heigth={props.height}
         margin={props.margin}
         padding={props.padding}
         background={props.background}>
            {props.children}
        </Div>
    )
}
