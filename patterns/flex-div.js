import React from 'react'
import styled from 'styled-components'

//semantic component for website construction with props and styled-components

const FlexDiv = styled.div`
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    display:flex;
    flex-wrap:${props => props.wrap || "no-wrap"};
    flex-direction:${props => props.direction || "row"};
    justify-content:${props => props.justify || "baseline"};
    align-items:${props => props.align || "baseline"};
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background:${props => props.background || "none"};
    
    @media(max-width:576px){
        flex-direction:${props => props.mobileDisplay || "column"};
        align-items:center;
    }

`
export default function flexDiv(props) {
    return (
        <FlexDiv
        width={props.width}
        height={props.height}
        direction={props.direction} 
        justify={props.justify}  
        align={props.align}  
        margin={props.margin}
        padding={props.padding}
        background={props.background}
        mobileDisplay={props.mobileDisplay}
        wrap={props.wrap}
        onClick={props.click}>
            {props.children}
        </FlexDiv>
    )
}
