import React from "react";

const ItemDetail = (props) => {
  return (
    <>
      <p>{props.carga ? "Cargando." : "Detalles del producto"}</p>
      <div className="itemDetail">
        <div className="itemDetail__name">{props.item.nombre}</div>
        <img src={props.item.imagen} alt="" />
        <div className="itemDetail__editorial">{props.item.editorial}</div>
        <div className="itemDetail__decription">{props.item.descripción}</div>
        <div className="itemDetail__pages">{props.item.páginas}</div>
        <div className="itemDetail__price">{props.item.precio}</div>
        <div className="itemDetail__stock">{props.item.stock}</div>
      </div>
    </>
  );
};

export default ItemDetail;
