import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
height: 30px;
background-color: purple;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: 500;
${mobile({ height: "18px"})};`

export const Announcement = () => {
  return (
    <Container>
Super deal !  Free shipping on orders over $250.
    </Container>
  )
}
