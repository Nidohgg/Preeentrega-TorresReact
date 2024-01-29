import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({arrayProductos}) => {
    
    const [item, setItem] = useState(arrayProductos);
    const {id} = useParams();

    useEffect(() => {
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
    }, [id])

    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer;