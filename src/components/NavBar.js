import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <header>
      <h1 className="logo">Lorem ipsum</h1>
      <div className="links">
        <a href="../index.js" className="item">
          Cosa 1
        </a>
        <a href="../index.js" className="item">
          Cosa 2
        </a>
        <a href="../index.js" className="item">
          Cosa 3
        </a>
        <CardWidget />
      </div>
    </header>
  );
};

export default NavBar;
