import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import productos from "../data/Data";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    promesa
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCarga(false);
      });
  });

  return (
    <div className="itemList">
      <ItemList array={data} carga={carga} />
    </div>
  );
};

export default ItemListContainer;
