
import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle btnNavbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PRODUCTOS
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to={"/category/proteinas"}>proteinas</Link></li>
                      <li><Link className="dropdown-item" to={"/category/creatinas"}>creatinas</Link></li>
                      <li><Link className="dropdown-item" to={"/category/shakers"}>shakers</Link></li>
                    </ul>
                  </li>
        </>
    );
}

export default Categorias;
