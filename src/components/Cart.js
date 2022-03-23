import React, { useContext } from "react";
import { context } from "./CartContext";

const Cart = () => {
  const resultado = useContext(context);
  console.log(resultado);
  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {resultado.carrito.map((item) => (
          <li key={item.producto.id}>
            {item.producto.nombre} x {item.contador}
          </li>
        ))}
      </ul>
      <p>Total: {resultado.total}</p>
      <button onClick={resultado.resetCarrito}>Reset</button>
    </div>
  );
};

export default Cart;
