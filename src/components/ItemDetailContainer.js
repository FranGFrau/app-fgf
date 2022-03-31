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

  useEffect(() => {
    const productosCollection = doc(db, "Productos", id);
    getDoc(productosCollection)
      .then((res) => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
          setCarga(false);
        }
        return null;
      })
      .catch(console.error);
  }, [id]);
  return (
    <div className="itemDetailList">
      <ItemDetail obj={item} carga={carga} />
    </div>
  );
};

export default ItemDetailContainer;
