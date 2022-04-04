import React, { useContext, useState } from "react";
import { context } from "./CartContext";

const Form = () => {
  const resultado = useContext(context);
  const terminarCompra = resultado.terminarCompra;
  const clienteAux = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  };
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  return (
    <div>
      <h1>Formulario de compra</h1>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            onChange={(e) => {
              clienteAux.nombre = e.target.value;
            }}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            onChange={(e) => {
              clienteAux.apellido = e.target.value;
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => {
              clienteAux.email = e.target.value;
            }}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            onChange={(e) => {
              clienteAux.telefono = e.target.value;
            }}
          />
        </label>
        <button
          onClick={() => {
            setCliente(clienteAux);
            terminarCompra(cliente);
          }}
        >
          Finalizar
        </button>
      </form>
    </div>
  );
};

export default Form;
