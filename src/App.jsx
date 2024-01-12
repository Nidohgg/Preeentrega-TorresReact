import { useState } from "react";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import Noticia from "./components/Noticia";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      {/* <Noticia/>*/}
      <ItemListContainer mensaje={"No has seleccionado ningún producto."}/>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
