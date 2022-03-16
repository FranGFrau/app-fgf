import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="itemCard">
      <div className="itemCard__nombre">{props.nombre}</div>
      <img src={props.imagen} alt="" />
      <div className="itemCard__precio">{props.precio}</div>
      <Link to={`/item/${props.id}`}>Detalles</Link>
    </div>
  );
};

export default Item;
