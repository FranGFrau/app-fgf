import React, { useContext, useState } from "react";
import { context } from "./CartContext";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";

const Form = () => {
  const { carrito, total } = useContext(context);
  const [carga, setCarga] = useState(false);
  const [idPedido, setIdPedido] = useState("");
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const terminarCompra = async (e) => {
    e.preventDefault();
    const orden = {
      buyer: {
        name: cliente.nombre,
        lastName: cliente.apellido,
        email: cliente.email,
        phone: cliente.telefono,
      },
      items: carrito,
      total: total,
      date: serverTimestamp(),
    };

    if (
      carrito.length > 0 &&
      cliente.nombre.length > 0 &&
      cliente.apellido.length > 0 &&
      cliente.email.length > 0 &&
      cliente.telefono.length > 0
    ) {
      const pedido = await addDoc(collection(db, "Ordenes"), orden);
      setCarga(true);
      setIdPedido(pedido.id);
    } else {
      alert("Ocurrio un error, revise sus datos ingresados");
    }
  };

  return (
    <>
      {carga ? (
        <div>
          <h2>Gracias por su compra</h2>
          <p>
            Su numero de orden es {idPedido}, en breve nos comunicaremos con
            usted para confirmar su pedido
          </p>
        </div>
      ) : (
        <div>
          <h1>Formulario de compra</h1>
          <form>
            <label>
              Nombre:
              <input
                required
                type="text"
                name="nombre"
                onChange={(e) =>
                  setCliente({ ...cliente, nombre: e.target.value })
                }
              />
            </label>
            <label>
              Apellido:
              <input
                required
                type="text"
                name="apellido"
                onChange={(e) =>
                  setCliente({ ...cliente, apellido: e.target.value })
                }
              />
            </label>
            <label>
              Email:
              <input
                required
                type="email"
                name="email"
                onChange={(e) =>
                  setCliente({ ...cliente, email: e.target.value })
                }
              />
            </label>
            <label>
              Teléfono:
              <input
                required
                type="tel"
                name="telefono"
                onChange={(e) =>
                  setCliente({ ...cliente, telefono: e.target.value })
                }
              />
            </label>
            <button onClick={(e) => terminarCompra(e)}>Finalizar</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
