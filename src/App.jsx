import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Noticia from "./components/Noticia";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import CartContextProvider from "./components/Context/CartContext";
import Checkout from "./components/Checkout";



function App() {
 
  
  return (
    <CartContextProvider>
      <BrowserRouter>

        <NavBar/>
        
        <Routes>
          <Route  path={"/"} element={<ItemListContainer/>}/>
          <Route  path={"/category/:id"} element={<ItemListContainer />}/>
          <Route  path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route  path={"/cart"} element={< Cart/>}/>
          <Route  path={"/checkout"} element={< Checkout/>}/>
          <Route path={'/*'} element={<Error404/>}/>
        </Routes>

        <PreFooter />
        <Footer />
      </BrowserRouter>
      
    </CartContextProvider>
  );
}

export default App;
