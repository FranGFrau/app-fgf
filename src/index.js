import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(App(), document.getElementById("root"));
