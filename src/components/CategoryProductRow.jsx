import React from 'react'
import { ProductRow } from './ProductRow'
import '../styles/CategoryProductRow.css'
function CategoryProductRow(props) {
  
    const title=props.title
    const list=props.list 
    return (
    <div className='category-container'>
        <div className='category-title'>
        {title}
        </div>
        <div className='category-body'>
        {list.map((product)=><ProductRow name={product.name} price={product.price}key ={product.id} theme/>)} //vamos hace  q se gener automaticamente
        </div>
    </div>
  )
}

export default CategoryProductRow