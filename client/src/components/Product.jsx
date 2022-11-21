
  import { Link } from "react-router-dom";
import styled from "styled-components";
  
  import { mobile } from "../responsive";
    
    
    const Info = styled.div`
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      cursor: pointer;
    `;
    
    const Container = styled.div`
      
      margin: 5px;
      
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f5fbfd;
      position: relative;
      &:hover ${Info}{
        opacity: 1;
      }
    `;
    
  //   const Circle = styled.div`
  //     width: 200px;
  //     height: 200px;
  //     border-radius: 50%;
  //     background-color: white;
  //     position: absolute;
  //   `;
    const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;`
    const Image = styled.img`
    margin: 100px 20px;  
    height: 90vh;
      width: 50%;
      flex:1;
      z-index: 2;
      display: flex;
      
    `;
    
    const Icon = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      transition: all 0.5s ease;
      &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
    `;
    
  
  const Productt = styled.div`
  flex:1;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column"})}
  `
  const ProductDetail = styled.div`
  
  // display: flex;`
  // const Image = styled.img`
  // width: 200px;
  // height:200px;
  // object-fit: cover;`
  
  const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;`
  
  const ProductName = styled.span`
  margin-bottom: 10px;`
  const ProductId = styled.span`
  margin-bottom: 10px;`
  const ProductColor = styled.div`
  width:20px;
  height: 20px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: ${props => props.color};`
  const ProductSize = styled.span``
  
  const PriceDetail = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`
  
  const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;`
  
  const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px"})}`
  
  const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
  ${mobile({ marginBottom: "20px"})}`
  
  const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;`
    
    export const Product = ({ item }) => {
     
  
      return (
          <>
        
        <Container>
          <Wrapper>
          <Image src={item.img} />
          <Info>
            <Icon>
            
            <ion-icon name="cart-outline"></ion-icon>
        
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
            <ion-icon name="search-outline"></ion-icon>
              </Link>
            </Icon>
            <Icon>
            <ion-icon name="heart-outline"></ion-icon>
            </Icon>
          </Info>
          </Wrapper>
          <Details>
      <ProductName><b>Product:</b> NEXUS DESIGN SHOE</ProductName>
      <ProductId><b>ID:</b> S00487</ProductId>
      <ProductColor color='lightblue'/>
      <ProductSize><b>Size:</b> M</ProductSize>
  </Details>
  <Productt>
                          <ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <span>+</span>
                                  <ProductAmount>2</ProductAmount>
                                  <span>-</span>
                              </ProductAmountContainer>
                              <ProductPrice>$30</ProductPrice>
                          </PriceDetail>
                          </ProductDetail> 
                      </Productt>
                      <Hr/>
        </Container>
        </>
      );
    };
    
    