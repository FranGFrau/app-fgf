import React from "react";

const Item = (props) => {
  return (
    <div className="itemCard">
      <div className="itemCard__nombre">{props.nombre}</div>
      <img src={props.imagen} alt="" />
      <div className="itemCard__precio">{props.precio}</div>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
