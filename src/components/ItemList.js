import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <p>{props.carga ? "Cargando." : `Seccion de productos`}</p>
      <div className="itemList">
        {props.array.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
