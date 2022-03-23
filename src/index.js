import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import CartContext from "./components/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

ReactDOM.render(App(), document.getElementById("root"));
