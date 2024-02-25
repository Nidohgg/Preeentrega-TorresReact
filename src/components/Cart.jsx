import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import {Link} from "react-router-dom";
import trash from "../assets/trash.svg"


const Cart = () => {
    const {cart, removeItem, clear, CantidadTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantidadTotalProductos() == 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">🎮</p>
                        <div className="alert alert-danger" role="alert">No se encontraron productos almacenados en el carrito!</div>
                        <Link to={"/"} className= "btn btn-danger my-5">Pagina Principal</Link>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                <tr>
                                <td className="text-end align-middle" colSpan={6}>
                                            <a href="#" onClick={clear} className="btn btn-danger">Vaciar Carrito
                                                <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" />
                                            </a>
                                        </td>
                                </tr>
                                {cart.map(producto =>
                                    <tr key={producto.id}>
                                        <td><img src={producto.img} alt={producto.nombre} width={80} /></td>
                                        <td className="text-start align-middle">{producto.nombre}</td>
                                        <td className="text-start align-middle">${producto.precio}</td>
                                        <td className="text-start align-middle">{producto.quantity}</td>
                                        <td className="text-start align-middle">${producto.quantity * producto.precio}</td>
                                        <td className="text-end align-middle">
                                            <a href="#" onClick={()=>{removeItem(producto.id)}}>
                                                <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" />
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center align-middle" colSpan={4}>Total</td>
                                    <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-danger">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}


export default Cart;