import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import  Products  from '../components/Products'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'



export const ProductList = () => {

const location = useLocation();
const cat = location.pathname.split("/")[2];
const [filters, setFilters] = useState({});
const [sort, setSort] = useState("newest");

const handleFilters = (e) =>{
const value = e.target.value;
setFilters({
    ...filters,
    [e.target.name]: value,
});
};






const Container = styled.div`
`
const Title = styled.h1`
margin: 20px;`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;`

const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
margin: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px"})}`


const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}`

const Option = styled.option`
`
  return (
    <Container>
<Navbar/>
<Announcement/>
<Title>{cat}</Title>
<FilterContainer>
    <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select name="color" onChange={handleFilters}>
            <Option  disabled>Color</Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>red</Option>
        </Select>
        <Select name="size" onChange={handleFilters}>
            <Option  disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            
        </Select>
    </Filter>
    <Filter>
        <FilterText>Sort products:</FilterText>
        <Select onChange={(e) => setSort(e.target.value)}>
          
            <Option value="newest">Selected Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
        </Select>
    </Filter>
</FilterContainer>
<Products cat={cat} filters={filters} sort={sort}/>
<Newsletter/>
<Footer/>
    </Container>
  )
}
