import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";

const ItemList = (props) => {
  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    const promise = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    promise
      .then(() => {
        setProductos(props.array);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCarga(false);
      });
  });

  return (
    <>
      <p>{carga ? "Cargando" : "Seccion de productos:"}</p>
      {productos.map((producto) => {
        return (
          <Item
            id={producto.id}
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
