import React from 'react'
import '../styles/ProductRow.css'
function ProductRow2(props) {
    const name = props.name
    const episode = props.episode
  return (
    <div className='product-row'>
           <span>{name} </span>
         <span>{`${episode}`} </span>
         

</div>
  )
}

export {ProductRow2}