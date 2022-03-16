import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
