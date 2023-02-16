import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Item = ({item}) => {
    const {darkMode} = useDarkModeContext ()
    return (
<div className={`${ darkMode? "cardDark": "card"}`}>
        <img src={item.img} className="card-img-top imagenCard" alt={item.nombre} />
    <div className={`card-body ${ darkMode? "card-body-dark": "card-body"}`}>
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.caracteristicas}</p>
          <p className="card-text"> ${new Intl.NumberFormat().format(item.precio)}</p>
          <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>VER PRODUCTOS</Link></button>
          
    </div>
</div>
    );
}

export default Item;
