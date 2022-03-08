import React from "react";
import ItemList from "./ItemList";

const productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    imagen: "../test.jpg",
    precio: 300,
  },
  {
    id: 2,
    nombre: "Producto 2",
    imagen: "../test.jpg",
    precio: 310,
  },
  {
    id: 3,
    nombre: "Producto 3",
    imagen: "../test.jpg",
    precio: 320,
  },
];

const ItemListContainer = () => {
  return (
    <div className="itemList">
      <ItemList array={productosIniciales} />
    </div>
  );
};

export default ItemListContainer;
