function NavBar({ clickPrev, clickNext, pokemonList, setPokemonState }) {
  return (
    <>
      <div className="NavBar">
        <button onClick={clickPrev}>Previous</button>
        <button onClick={clickNext}>Next</button>
      </div>
      <div className="pkmnArr">
        {pokemonList.map((pokemon, i) => (
          <button
            key={i}
            onClick={() =>
              setPokemonState({ currentIndex: i, setPokemonState })
            }
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default NavBar;
