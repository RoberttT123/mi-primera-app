import React from 'react'
import CategoryProductRow from './CategoryProductRow'
import { sportsList,electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'
conts.log (sportsList)
console.log(electronicsList)

function ProductTable() {
  return (
    <div className='product-table'>
        <div className='product-table_header'>
            <span>Name</span><span>Price</span>
        </div>
        <div className='product-table_categories'>
        <CategoryProductRow title='Sportings Goods' list={sportsList}/>
        <CategoryProductRow title='Electronics' list={electronicsList}/>
        </div>
    </div>
  )
}

export default ProductTable