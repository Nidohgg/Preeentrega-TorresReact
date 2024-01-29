import { useEffect } from "react";
import { useState } from "react"

const ItemCount = ({stock}) => {//stock representaria la cantidad de productos que quedan
    const [contador, setContador] = useState(1);//Estado para manejar el contador de productos
    const [ItemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if(contador < ItemStock){
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        if (contador <= ItemStock){
            setItemStock(ItemStock - contador);
            setContador(1); //Reinicia el contador en uno
            console.log("Agregaste " + contador + " productos al carrito. Quedan " + (ItemStock - contador) + "productos disponibles.");
        }
    }

    useEffect(() => {
        setItemStock(stock)
    },[stock])

    return(
        <>
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-danger">{contador}</button>
                        <button type="button" className="btn btn-danger" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-m-3">
                    <button type="button" className="btn btn-danger" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
            
        </>
    )

}

export default ItemCount;