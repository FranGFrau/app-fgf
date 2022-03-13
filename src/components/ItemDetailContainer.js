import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../data/Data";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(productos[0]);
      }, 2000);
    });
    promesa
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCarga(false);
      });
  });
  return (
    <div className="itemDetailList">
      <ItemDetail item={item} carga={carga} />
    </div>
  );
};

export default ItemDetailContainer;
