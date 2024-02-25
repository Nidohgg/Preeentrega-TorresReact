import { useContext } from "react";
import IconCart from "../assets/cart4.svg";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {CantidadTotalProductos} = useContext(CartContext);
  return (
    CantidadTotalProductos() > 0 ? 

    <Link to={"/cart"} type="button" className="btn btn-danger position-relative">
      <img src={IconCart} alt="Carrito-Compras" width={20} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{CantidadTotalProductos()}</span>

    </Link> : "" 
    
  )
};

export default CartWidget;
