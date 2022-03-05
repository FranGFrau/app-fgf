import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [valor, setValor] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);
  const [boton, setBoton] = useState(true);
  const aux = props.stock;
  const button = document.querySelector("boton");

  const ValidarBoton = () => {
    if (aux === valor) {
      setBoton(false);
    } else {
      setBoton(true);
    }
  };

  const clickAumentar = () => {
    if (valor <= aux) {
      setValor(valor + 1);
      setStock(stock - 1);
    }
    ValidarBoton();
  };
  const clickDecrecer = () => {
    if (valor > 1) {
      setValor(valor - 1);
      setStock(stock + 1);
    }
    ValidarBoton();
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
        <p id="stock">
          <p>{stock}</p>
        </p>
        <button id="boton">
          {boton ? "Agregar al carrito" : "Fuera de stock"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
