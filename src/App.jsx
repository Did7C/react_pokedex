import { useState } from "react";
import pokemonList from "./components/pokemonList";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

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
      <NavBar
        clickPrev={() => swPokemon("prev")}
        clickNext={() => swPokemon("next")}
        pokemonList={pokemonList}
        setPokemonState={setPokemonState}
      />
    </div>
  );
}

export default App;
