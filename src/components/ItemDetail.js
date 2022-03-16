import React from "react";

const ItemDetail = (props) => {
  return (
    <>
      <p>{props.carga ? "Cargando." : ""}</p>
      <img src={props.obj.imagen} alt="" />
      <div className="itemDetail">
        <p className="detailTitulo">{props.obj.nombre}</p>
        <p>{props.obj.editorial}</p>
        <p>{props.obj.descripción}</p>
        <p>Páginas:{props.obj.páginas}</p>
        <p>${props.obj.precio}</p>
        <p>{props.obj.stock}u</p>
      </div>
    </>
  );
};

export default ItemDetail;
