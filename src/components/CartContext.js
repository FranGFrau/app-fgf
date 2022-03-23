import { createContext, useState } from "react";
export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const removerDelCart = (producto) => {
    const newCart = cart.filter((item) => item.producto.id !== producto.id);
    setCart(newCart);
    calcularTotal();
  };

  const agregarAlCarrito = (producto, contador) => {
    let cartProductos = { producto, contador };

    let cartAux = [];
    if (isInCart(producto)) {
      cartAux = cart.map((item) => {
        if (item.producto.id === producto.id) {
          item.contador += contador;
        }
        return item;
      });
    } else {
      cartAux = [...cart, cartProductos];
    }
    setCart(cartAux);
    calcularTotal();
  };

  const resetCarrito = () => {
    setCart([]);
    setTotal(0);
  };

  const calcularTotal = () => {
    let totalAux = 0;
    cart.forEach((item) => {
      totalAux += item.producto.precio * item.contador;
    });
    setTotal(totalAux);
  };

  const isInCart = (producto) => {
    return cart.find((item) => item.producto.id === producto.id);
  };

  const valor = {
    carrito: cart,
    total: total,
    agregarAlCarrito: agregarAlCarrito,
    removerDelCart: removerDelCart,
    resetCarrito: resetCarrito,
    calcularTotal: calcularTotal,
  };

  return <Provider value={valor}>{children}</Provider>;
};

export default CartContext;
