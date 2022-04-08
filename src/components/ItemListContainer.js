import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "./Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [carga, setCarga] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "Productos");
    const documentos = getDocs(productosCollection);

    if (id) {
      const filtro = query(productosCollection, where("tipo", "==", id));

      getDocs(filtro).then((respuesta) => {
        const aux = [];
        respuesta.forEach((doc) => {
          const producto = { id: doc.id, ...doc.data() };
          aux.push(producto);
          console.log(producto);
        });
        setData(aux);
      });
    } else {
      documentos
        .then((respuesta) => {
          setData(
            respuesta.docs.map((productos) => ({
              ...productos.data(),
              id: productos.id,
            }))
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setCarga(false));
    }
  }, [id]);

  return (
    <div className="itemListCont">
      <ItemList array={data} carga={carga} />
    </div>
  );
};

export default ItemListContainer;
