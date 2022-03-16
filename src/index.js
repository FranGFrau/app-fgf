import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(App(), document.getElementById("root"));
