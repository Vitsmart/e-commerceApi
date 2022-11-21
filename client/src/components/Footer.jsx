import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column"})};`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none"})};`

const Title = styled.h3`
margin-bottom: 30px;`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "lightgray"})};`

const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;`
const SocialContainer = styled.div`
display: flex;`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
color: white;
background-color: ${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;`

const Payment = styled.img`
width:50%;`

export const Footer = () => {
  return (
    <Container>
<Left>
    <Logo>Atlantis</Logo>
    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, nostrum nisi exercitationem commodi alias 
         Iure veritatis iusto eius sequi.</Desc>
         <SocialContainer>
            <SocialIcon color='red'>
            <ion-icon name="logo-facebook"></ion-icon> 
            </SocialIcon>
            <SocialIcon color='yellowgreen'>
            <ion-icon name="logo-instagram"></ion-icon>
            </SocialIcon>
            <SocialIcon color='blue'>
            <ion-icon name="logo-twitter"></ion-icon> 
            </SocialIcon>
            <SocialIcon color='green'>
            <ion-icon name="logo-pinterest"></ion-icon>
            </SocialIcon>
         </SocialContainer>
</Left>
<Center>
    <Title>Useful Links</Title>
    <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Men fashion</ListItem>
        <ListItem>Women fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms </ListItem>
        <ListItem>Order tracking</ListItem>
    </List>
</Center>
<Right>
    <Title>Contact</Title>
    <ContactItem><ion-icon style={{marginRight:"10px"}} name="location-outline"></ion-icon> 822 green drive, Manchester</ContactItem>
    <ContactItem><ion-icon  style={{marginRight:"10px"}} name="call-outline"></ion-icon> +22280</ContactItem>
    <ContactItem><ion-icon style={{marginRight:"10px"}} name="mail-outline"></ion-icon> Vitsmart2@gmail.com</ContactItem>
    <Payment src="https://p.kindpng.com/picc/s/35-351793_credit-or-debit-card-mastercard-logo-visa-card.png"/>
</Right>
    </Container>
  )
}
