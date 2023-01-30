

const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle btnNavbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Ver todos los Productos</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Proteinas</a></li>
                      <li><a className="dropdown-item" href="#">Creatinas</a></li>
                      <li><a className="dropdown-item" href="#">Shakers</a></li>
                      <li><a className="dropdown-item" href="#">Colagenos</a></li>
                    </ul>
                  </li>
        </>
    );
}

export default Categorias;
