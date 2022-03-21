import React, { useState } from "react";
import IrAlCarrito from "./IrAlCarrito";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const [contador, setContador] = useState();
  const [estado, setEstado] = useState(false);

  const onAdd = (valorContador, valorEstado) => {
    setContador(valorContador);
    setEstado(valorEstado);
  };

  return (
    <>
      <p>{props.carga ? "Cargando." : ""}</p>
      <img src={props.obj.imagen} alt="" />
      {estado ? (
        <IrAlCarrito />
      ) : (
        <ItemCount stock={props.obj.stock} initial={1} onAdd={onAdd} />
      )}
      <div className="itemDetail">
        <p className="detailTitulo">{props.obj.nombre}</p>
        <p>{props.obj.editorial}</p>
        <p>{props.obj.descripción}</p>
        <p>Páginas:{props.obj.páginas}</p>
        <p>${props.obj.precio}</p>
      </div>
    </>
  );
};

export default ItemDetail;
