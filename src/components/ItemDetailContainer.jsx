import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./Productos.json"
import { useParams } from "react-router-dom";
import { doc, getDoc,getFirestore } from "firebase/firestore";
import Loading from "./Loanding";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /*useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id ===parseInt(id))
                //se obtien el producto con Id capturado por parametro
                resolve(producto);
            }, 2000)
        })
        promesa.then(data => {
            setItem(data);
            console.log(data);
        })
    }, [id])*/

     //Llamada del producto desde el firestore
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });

    }, [id]);

    return(
        <>
        {loading ? <Loading/> : <ItemDetail item={item}/> }
            
        </>
    )
}

export default ItemDetailContainer;