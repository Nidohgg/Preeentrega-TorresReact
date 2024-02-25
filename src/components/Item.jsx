import { Link } from "react-router-dom";


const Item = ({producto}) => {
    return(
        <>
        <div className="card">
            <Link to={"/item/" + producto.id} className="text-decoration-none text-dark">
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <p className="card-text">{producto.nombre}</p>
                    <p className="card-text">$ {producto.precio}</p>
                </div>
            </Link>
            
        </div>
        </>
    )
}

export default Item;