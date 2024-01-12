import Logo from "./Logo";
import CartWidget from "./cartWidget";

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
              <a className="nav-link text-dark fs-5" href="#">
                Audio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">
                Juegos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">
                Mercancia
              </a>
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
