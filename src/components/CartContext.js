import { createContext, useState } from "react";
export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const disminuirCart = (id) => {
    const item = cart.find((item) => item.producto.id === id);
    const index = cart.indexOf(item);
    const newCart = [...cart];
    newCart[index].contador -= 1;
    if (newCart[index].contador === 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    setCantidad(cantidad - 1);
    setTotal(total - item.producto.precio);
  };

  const agregarAlCarrito = (producto, contador) => {
    let cartProductos = { producto, contador };

    let cartAux = [];
    setCantidad(cantidad + contador);

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
    setTotal(total + producto.precio * contador);
    console.log(cantidad);
  };

  const resetCarrito = () => {
    setCart([]);
    setTotal(0);
  };

  const isInCart = (producto) => {
    return cart.find((item) => item.producto.id === producto.id);
  };

  const displayCarrito = () => {
    let contador = 0;
    cart.forEach((item) => {
      contador += item.contador;
    });
    return contador;
  };

  const valor = {
    carrito: cart,
    total: total,
    agregarAlCarrito: agregarAlCarrito,
    disminuirCart: disminuirCart,
    resetCarrito: resetCarrito,
    displayCarrito: displayCarrito,
  };

  return <Provider value={valor}>{children}</Provider>;
};

export default CartContext;
