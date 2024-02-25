import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { collection, getDocs, getFirestore, addDoc, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";
import Loading from "./Loanding";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  //llamada a productos desde el archivo JSON
  /*useEffect(() => {
    const promesa = new Promise(resolve =>{
      resolve(id ? catalogo.filter(item => item.category === id) : catalogo)
    })
    promesa.then(data=>{
      setProductos(data);
    })
  }, [id]);*/

  //subida de productos a la collection items en firestore
  /*useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    catalogo.forEach(producto => {
      addDoc(itemsCollection, producto);
    });
    console.log("Los elementos de subieron sin problemas!");
  },[])*/

  //Llamada de productos desde el firestore
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    
    getDocs(q).then(resultado => {
      setLoading(false);
      setProductos(resultado.docs.map(prod => ({id:prod.id, ...prod.data()})));
    });

  }, [id]);


  return (
    <div className="container my-5">
      <div className="row">
        {loading ? <Loading/> : <ItemList productos={productos} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
