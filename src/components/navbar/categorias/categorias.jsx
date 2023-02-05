
import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle btnNavbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PRODUCTOS
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to={"/categorias/proteinas"}>proteinas</Link></li>
                      <li><Link className="dropdown-item" to={"/categorias/creatinas"}>creatinas</Link></li>
                      <li><Link className="dropdown-item" to={"/categorias/shakers"}>shakers</Link></li>
                    </ul>
                  </li>
        </>
    );
}

export default Categorias;
