import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import {FaYoutube} from 'react-icons/fa'
//import { FaBeer } from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
height: 70px;
background-color: #eee;
${mobile({ height: "50px"})};`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "5px 0px"})};`

const Left = styled.div`
flex:1;
display: flex;`

const Language = styled.div`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none"})};`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`

const Input = styled.input`
border: none;
padding: 5px;
${mobile({display:"flex", width: "50px"})};`

const Center = styled.div`
flex:1;
text-align: center;`

const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "18px"})};`

const Right = styled.div`

flex:1;
display: flex;
align-items: center;
justify-content: space-between;
position:relative;
${mobile({ flex: 2, justifyContent: "center"})};
`


const MenuItem = styled.div`
font-size: 18px;
cursor: pointer;
margin-Right: 30px;

${mobile({ fontSize: "12px", marginLeft: "10px"})};`


const MenuCart = styled.div`
font-size: 28px;
cursor: pointer;
margin-Right: 10px;

${mobile({ fontSize: "12px", marginLeft: "10px"})};`

const Badge = styled.div`
height: 20px;
width: 20px;
background-color: red;
border-radius: 50%;
position: absolute;
top:0;
right:0;
display:flex;
font-size:12px;
color:#fff;
justify-content: center;
align-items: center;
transition: transform(25px, 25px)`

export default function Navbar() {
const quantity = useSelector(state => state.cart.quantity)




  return (
    <Container>
        <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
          <ion-icon name="search-outline"></ion-icon>
          <Input placeholder='Search'/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Atlantis Store</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <Link to="/cart">
          <MenuCart><ion-icon name="cart-outline"></ion-icon>
          {quantity > 0 && 
          <Badge>{quantity}</Badge>}</MenuCart>
          </Link>
          
          
        </Right>
          </Wrapper>
    </Container>
  )
}
