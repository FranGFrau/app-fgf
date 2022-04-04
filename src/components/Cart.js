import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";

const Cart = () => {
  const resultado = useContext(context);

  return (
    <div>
      <h1>Carrito</h1>
      <div>
        {resultado.carrito.length === 0 ? (
          <>
            <p>No hay productos en su carrito </p>
            <Link to="/">Volver al inicio</Link>
          </>
        ) : (
          <div>
            {resultado.carrito.map((item) => (
              <div key={item.producto.id}>
                {item.producto.nombre} x {item.contador}
                <button
                  onClick={() => resultado.disminuirCart(item.producto.id)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <p>Total: {resultado.total}</p>
      <button onClick={resultado.resetCarrito}>Reset</button>
      <Link to="/form">Formulario</Link>
    </div>
  );
};

export default Cart;
