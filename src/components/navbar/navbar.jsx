
import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./secciones/secciones";
import Categorias from "./categorias/categorias";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">SYS SUPLEMENTOS</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Secciones/>
                  <Categorias/>
                </ul>
                <CartWidget cantCarrito={7}/>
              </div>
            </div>
          </nav>
    );
}

export default Navbar;
