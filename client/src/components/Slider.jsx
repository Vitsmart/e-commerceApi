import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from './data'
import { mobile } from '../responsive'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none"})};`

const Arrow = styled.div`
width:50px;
height:50px;
background-color: #999;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;`

const Wrapper = styled.div`
height: 100vh;
display: flex;
transition: all in 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw)`

const Slide = styled.div`
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
background-color: ${props => props.bg};`
const ImgCont = styled.div`
flex:1;
height: 100%;`;
const Image = styled.img`
height: 80%;`
const InfoCont = styled.div`
flex:1;`;

const Title = styled.h1`
font-size: 70px;`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;`

export const Slider = () => {
const [slideIndex, setSlideIndex] = useState()
    const handleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
        <ion-icon name="chevron-back-outline"></ion-icon>

        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (  
<Slide bg={item.bg} key={item.id}>
    <ImgCont>
    <Image src={item.img}>
        </Image></ImgCont>
    <InfoCont>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>Shop now</Button>
    </InfoCont>
</Slide>
 ))}

        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
        <ion-icon name="chevron-forward-outline"></ion-icon>

        </Arrow>
    </Container>
  )
}
