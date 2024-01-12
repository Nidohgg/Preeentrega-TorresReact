import Logo from "./Logo";

const PreFooter = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <Logo tamano={90}/>
              </div>
              <div className="col-md-9 d-flex align-items-center justify-content-end">
                <div className="row">
                    <h2 className="text-light text-center ">Registrate!</h2>
                    <a href="#" className="btn btn-light"> Registro</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
