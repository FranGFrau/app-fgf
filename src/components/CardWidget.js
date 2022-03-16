import React from "react";
import { Link } from "react-router-dom";

const CardWidget = () => {
  return (
    <Link to="/cart">
      <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" />
    </Link>
  );
};

export default CardWidget;
