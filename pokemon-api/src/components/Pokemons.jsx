import React, { useState } from 'react'
import { useEffect } from 'react'


const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])



    const handleFetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    };


    // console.log(pokemons);

    return (
        <div>
            <button onClick={handleFetchPokemons}>Fetch</button>
            <ol>
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)
                ) : (
                    <p>Press Fetch to get Pokemons</p>
                )}
            </ol>
        </div>
    )
}

export default Pokemons