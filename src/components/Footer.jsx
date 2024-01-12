
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">FB</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">IG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">X</a>
            </li>
          </ul>
        </div>
        <div className="col">

        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-secondary fs-6" href="#">Politica de Privacidad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fs-6" href="#">Defensa al consumidor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fs-6" href="#">Protección de datos personales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
            <p><Logo tamano={50}/> © Games Lovers 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;