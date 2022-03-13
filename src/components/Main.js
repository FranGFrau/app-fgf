import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
const miOnAdd = () => {};

const Main = () => {
  return (
    <>
      <main>
        <ItemListContainer onAdd={miOnAdd} />
        <ItemDetailContainer />
      </main>
    </>
  );
};

export default Main;
