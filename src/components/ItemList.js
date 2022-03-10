import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <p>{props.carga ? "Cargando." : "seccion de productos:"}</p>
      {props.array.map((producto) => {
        return (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            precio={producto.precio}
          />
        );
      })}
    </>
  );
};

export default ItemList;
