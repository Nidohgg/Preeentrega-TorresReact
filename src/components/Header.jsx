
import NavBar from "./NavBar";



const Header = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-1 py-2">
            <Logo tamano={100}/>
        </div>
        <div className="col-md-9 d-flex justify-content-center align-items-center ">
            <NavBar/>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-start">
            <Carrito/>
        </div>
      </div>
    </div>
  );
};


export default Header;
