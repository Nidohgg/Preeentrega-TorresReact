import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import catag from "./components/Productos.json";
import NavBar from "./components/NavBar";
import Noticia from "./components/Noticia";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  path={"/"} element={<ItemListContainer catalogo={catag} />}/>
          <Route  path={"/category/:id"} element={<ItemListContainer catalogo={catag} />}/>
          <Route  path={"/item/:id"} element={<ItemDetailContainer arrayProductos={catag} />}/>
          <Route path={'/*'} element={<Error404/>}/>
        </Routes>
        <PreFooter />
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
