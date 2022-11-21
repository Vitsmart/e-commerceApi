import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { CategoryItem } from './CategoryItem'
import { categories } from './data'

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column"})};`

export const Categories = () => {
  return (
    <Container>
{categories.map(item => (
    <CategoryItem item={item} key={item.id}/>
))}
    </Container>
  )
}
