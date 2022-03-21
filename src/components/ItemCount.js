import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [valor, setValor] = useState(props.initial);

  const clickAumentar = () => {
    if (valor < props.stock) {
      setValor(valor + 1);
    }
  };
  const clickDecrecer = () => {
    if (valor > 1) {
      setValor(valor - 1);
    }
  };

  const clickConfirmar = () => {
    props.onAdd(valor, true);
  };

  return (
    <div className="item">
      <img src="..." alt="" />
      <div className="box">
        <button onClick={clickDecrecer}>-</button>
        <p>{valor}</p>
        <button onClick={clickAumentar}>+</button>
      </div>
      <div className="under-box">
        <span>Stock:</span>
        <p id="stock">{props.stock}</p>
        <button id="boton" onClick={clickConfirmar}>
          {"Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
