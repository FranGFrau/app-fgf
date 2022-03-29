import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "./Firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [carga, setCarga] = useState(true);
  const { id } = useParams();

  const productosCollection = collection(db, "Productos");
  const documentos = getDoc(doc(productosCollection, id));

  useEffect(() => {
    documentos
      .then((respuesta) => {
        const producto = respuesta.data();
        setItem(producto);
      })
      .catch((error) => console.log(error))
      .finally(() => setCarga(false));
  }, []);
  return (
    <div className="itemDetailList">
      <ItemDetail obj={item} carga={carga} />
    </div>
  );
};

export default ItemDetailContainer;
