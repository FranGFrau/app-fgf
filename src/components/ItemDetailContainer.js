import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../data/Data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [carga, setCarga] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 1000);
    });
    promesa
      .then((respuesta) => {
        const response =
          id && respuesta.filter((producto) => producto.id.toString() === id);
        setItem(response[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCarga(false);
      });
  }, [id]);
  return (
    <div className="itemDetailList">
      <ItemDetail obj={item} carga={carga} />
    </div>
  );
};

export default ItemDetailContainer;
