import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import productos from "../data/Data";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [carga, setCarga] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    promesa
      .then((respuesta) => {
        setData(respuesta);
        if (id === "libros") {
          let libros = productos.filter(
            (productos) => productos.tipo === "libros"
          );
          setData(libros);
        } else if (id === "comics") {
          let comics = productos.filter(
            (productos) => productos.tipo === "comics"
          );
          setData(comics);
        } else if (id === "mangas") {
          let mangas = productos.filter(
            (productos) => productos.tipo === "mangas"
          );
          setData(mangas);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCarga(false);
      });
  }, [id]);

  return (
    <div className="itemListCont">
      <ItemList array={data} carga={carga} />
    </div>
  );
};

export default ItemListContainer;
