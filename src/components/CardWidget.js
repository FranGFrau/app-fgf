import React from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";
import { useContext } from "react";

const CardWidget = () => {
  const resultado = useContext(context);
  const contador = resultado.cantidad;

  return (
    <Link to="/cart" className="widget">
      <p>{contador === 0 ? null : contador}</p>
      <img
        src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png"
        alt="..."
      />
    </Link>
  );
};

export default CardWidget;
