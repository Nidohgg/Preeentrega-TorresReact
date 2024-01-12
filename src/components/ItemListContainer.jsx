const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <div className ="alert alert-danger p-5" role="alert">
            {mensaje}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
