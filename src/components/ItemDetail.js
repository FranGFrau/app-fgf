import React from "react";

const ItemDetail = (props) => {
  return (
    <>
      <p>{props.carga ? "Cargando." : ""}</p>
      <img src={props.obj.imagen} alt="" />
      <div className="itemDetail">
        <div className="itemDetail__name">{props.obj.nombre}</div>
        <div className="itemDetail__editorial">{props.obj.editorial}</div>
        <div className="itemDetail__decription">{props.obj.descripción}</div>
        <div className="itemDetail__pages">{props.obj.páginas}</div>
        <div className="itemDetail__price">{props.obj.precio}</div>
        <div className="itemDetail__stock">{props.obj.stock}</div>
      </div>
    </>
  );
};

export default ItemDetail;
