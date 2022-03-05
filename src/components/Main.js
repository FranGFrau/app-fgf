import React from "react";
import ItemListContainer from "./ItemListContainer";
const miOnAdd = () => {};

const Main = () => {
  return (
    <>
      <main>
        <ItemListContainer onAdd={miOnAdd} dato="Informacion provisoria" />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magni
        nostrum corrupti ratione eveniet? Quia eos ab exercitationem nisi
        officiis?
      </main>
    </>
  );
};

export default Main;
