import React from 'react'
import '../styles/ProductRow.css'
function ProductRow(props) {
  const producto=props.name
  const Precio=props.price
  const theme='product-row '+props.theme
  
  return (
    <div className='product-row'>
      <span> {producto }</span><span>{ ` $${Precio} ` }</span>
    </div>
  )
}

export  { ProductRow }