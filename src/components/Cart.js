import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";

const Cart = () => {
  const resultado = useContext(context);

  return (
    <div className="mainCart">
      <div className="cart">
        <h2>Carrito</h2>
        <div className="inCart">
          {resultado.carrito.length === 0 ? (
            <Link to="/" className="volverIndex">
              No hay productos en su carrito, pulse aqui para volver al inicio
            </Link>
          ) : (
            <div className="isInCart">
              {resultado.carrito.map((item) => (
                <div key={item.producto.id}>
                  <img src={item.producto.imagen} alt="" />
                  <p className="cantProducto">
                    {item.producto.nombre} x {item.contador} unidad/es
                  </p>
                  <button
                    className="btn-"
                    onClick={() => resultado.disminuirCart(item.producto.id)}
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="caja">
          <p className="total">Total: {resultado.total}</p>
          <button onClick={resultado.resetCarrito}>Reset</button>
          <Link className="btnForm" to="/form">
            Formulario
          </Link>
        </div>
      </div>
      <div className="sideCart">a</div>
    </div>
  );
};

export default Cart;
