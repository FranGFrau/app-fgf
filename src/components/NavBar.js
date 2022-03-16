import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">Lorem ipsum</h1>
      </Link>
      <div className="links">
        <Link to="/category/libros" className="item">
          Libros
        </Link>
        <Link to="/category/mangas" className="item">
          Mangas
        </Link>
        <Link to="/category/comics" className="item">
          Comics
        </Link>
        <CardWidget />
      </div>
    </header>
  );
};

export default NavBar;
