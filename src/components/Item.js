import React from "react";

const Item = (props) => {
  return (
    <div className="itemCard">
      <div className="itemCard__id">{props.id}</div>
      <div className="itemCard__nombre">{props.nombre}</div>
      <div className="itemCard__img">{props.imagen}</div>
      <div className="itemCard__precio">{props.precio}</div>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
