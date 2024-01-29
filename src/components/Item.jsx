import { Link } from "react-router-dom";


const Item = ({producto}) => {
    return(
        <>
        <div className="card">
            <Link to={"/item/" + producto.id} className="">
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <p className="card-tex">{producto.nombre}</p>
                    <p className="card-tex">{producto.precio}</p>
                </div>
            </Link>
            
        </div>
        </>
    )
}

export default Item;