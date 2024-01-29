import ItemCount from "./ItemCOunt";

const ItemDetail = ({item}) => {

    if (!item) {
        return <p>El artículo no fue encontrado</p>;
      }
    return(//el ? al lado de Item garatiza que no haya erorres si el item da undefined
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 offset-md-2 text-center">
                        <img src={item?.img} alt={item?.nombre} className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <h1>{item?.nombre}</h1>
                        <p>{item?.descripcion}</p>
                        <p>$ <b>{item?.precio}</b></p>
                        <ItemCount stock = {item?.stock}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;