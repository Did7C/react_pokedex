function NavBar({ clickPrev, clickNext }) {
  return (
    <div className="NavBar">
      <button onClick={clickPrev}>Previous</button>
      <button onClick={clickNext}>Next</button>
    </div>
  );
}

export default NavBar;
