import Logo from "./Logo";
import CartWidget from "./cartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-1 py-2">
          <Logo tamano={100} />
        </div>
        <div className="col-md-9 d-flex justify-content-center align-items-center ">
          <ul className="nav">
          <li className="nav-item">
              <NavLink className="nav-link text-dark fs-5" to={"/"}>
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fs-5" to={"/category/audio"}>
                Audio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fs-5" to={"/category/juegos"}>
                Juegos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fs-5" to={"/category/mercancia"}>
                Mercancia
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-start">
          <CartWidget/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
