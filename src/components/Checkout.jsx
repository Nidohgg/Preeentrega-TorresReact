import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import { collection, getFirestore, addDoc} from "firebase/firestore"
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [ordenId, setOrdenId] = useState();
    const {cart, clear, CantidadTotalProductos, SumaTotalProductos} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0){
            return false;
        }

        if (email.length === 0){
            return false;
        }

        if (telefono.length === 0){
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idp, nombre:item.nombre, precio:item.precio}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes}}`;
        const total = SumaTotalProductos();
        const orden = {buyer: buyer, items:items, date:date, total:total};

        //se inserta documento en firestore
        const db = getFirestore();
        const ordenCollection = collection(db, "ordenes");
        addDoc(ordenCollection, orden).then(resultado => {
            clear();
            setOrdenId(resultado.id);
        });
    }

    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Checkout</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e) =>{setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" onInput={(e) =>{setEmail(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefono</label>
                                <input type="text" className="form-control" onInput={(e) =>{setTelefono(e.target.value)}}/>
                            </div>

                            <button type="button" className="btn btn-danger" onClick={generarOrden}>Generar Orden</button>   
                        </form>
                    </div>
                    <div className="col-md-6 text-center">
                        <table className="table">
                            <tbody>
                                {cart.map(producto =>
                                    <tr key={producto.id}>
                                        <td><img src={producto.img} alt={producto.nombre} width={80} /></td>
                                        <td className="text-start align-middle">{producto.nombre}</td>
                                        <td className="text-start align-middle">${producto.precio}</td>
                                        <td className="text-start align-middle">{producto.quantity}</td>
                                        <td className="text-start align-middle">${producto.quantity * producto.precio}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center align-middle" colSpan={4}>Total</td>
                                    <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        {ordenId ? <div className="alert alert-success p-5 text-center" role="alert">
                            <p className="display-1">🎮</p>
                            <h1>Gracias por tu compra!</h1>
                            <p>Tu numero de compra es: <b>{ordenId}</b></p>
                        </div>: ""}
                    </div>
                </div>
            </div>
    )
}

export default Checkout;