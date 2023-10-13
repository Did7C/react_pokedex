import React from 'react';

function PokemonCard() {
    
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  return (
    <figure>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasaur" />
    <figcaption>Bulbasaur</figcaption>
    </figure>
);

    
}

export default PokemonCard;

