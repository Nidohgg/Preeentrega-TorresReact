import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    const [productosItem, setProductosItem] = useState([]);


    useEffect(() =>{
        setProductosItem(productos);
    }, [productos])

    return(
        <>
        {productosItem.map(produ => (
            <div key={produ.id} className="col-md-3 text-center">
                <Item producto = {produ}/>
            </div>
        ))}
        </>
    )
}

export default ItemList;