import IconCart from "../assets/cart4.svg";

const CartWidget = () => {
  return (
    <button type="button" className="btn btn-danger position-relative">
        <img src={IconCart} alt="Carrito-Compras" width={20} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">5</span>
        
    </button>
  );
};

export default CartWidget;
