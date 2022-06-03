import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { CategoryProductRow2 } from './CategoryProductRow2'

import { sportsList, electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'


function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        response.json().then(response => setDataCharacters(response.results))

    }
    useEffect(() => {
        fetchCharacters()
    }, [])
    const [dataEpisode, setDataEpisode] = useState([])
    const fetchEpisode = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        response.json().then(response => setDataEpisode(response.results))

    }
    useEffect(() => {
        fetchEpisode()
    }, [])
    

    // console.log(dataCharacters)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>'Rick & Morty'</span>

            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Characters' list={dataCharacters} />
                <CategoryProductRow2 title='Episodes' list={dataEpisode} />
            </div>
        </div>
    )
}

export { ProductTable }