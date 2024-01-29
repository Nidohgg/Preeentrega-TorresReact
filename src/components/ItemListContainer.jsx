import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ catalogo }) => {
  const [productos, setProductos] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    const promesa = new Promise(resolve =>{
      resolve(id ? catalogo.filter(item => item.category === id) : catalogo)
    })
    promesa.then(data=>{
      setProductos(data);
    })
  }, [id]);


  return (
    <div className="container my-5">
      <div className="row">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
