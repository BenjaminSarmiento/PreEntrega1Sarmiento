
import { Link } from "react-router-dom";
import React from "react";
const Secciones = React.memo(() => {
    return (
        <>
            <li className="nav-item">
                    <Link className="nav-link btnNavbar" to={"/"}>INICIO</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btnNavbar" to={"/contacto"}>CONTACTO</Link>
                  </li>
        </>
    );
})

export default Secciones;
