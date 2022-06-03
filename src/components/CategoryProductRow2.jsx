import React from 'react'
import { ProductRow2 } from './ProductRow2'

function CategoryProductRow2(props) {
    const title = props.title
    const list = props.list
    return (
        <div className='category-container'>
            <div className='category-title'>
                {title}
            </div>
            <div className='category-body'>
                {list.map((character) =>
                    <ProductRow2
                        name={character.name}
                        episode={character.episode}
                     
                    />)}
                    
            </div>
            
            
        </div>
    )
}

export { CategoryProductRow2 }