import pokemonList from "./components/pokemonList";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonState, setPokemonState] = useState({
    currentIndex: 0,
  });

  function swPokemon(direction) {
    setPokemonState((prevState) => {
      const currentIndex = prevState.currentIndex;
      let newIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % pokemonList.length;
      } else if (direction === "prev") {
        newIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length;
      }
      return {
        ...prevState,
        currentIndex: newIndex,
      };
    });
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonState.currentIndex]} />
      <button onClick={() => swPokemon("prev")}>Previous</button>
      <button onClick={() => swPokemon("next")}>Next</button>
    </div>
  );
}

export default App;
