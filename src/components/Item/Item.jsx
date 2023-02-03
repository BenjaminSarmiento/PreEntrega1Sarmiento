import { Link } from "react-router-dom";
const Item = ({item}) => {
    return (
<div className="card">
        <img src={`../img/${item.img}`} className="card-img-top imagenCard" alt={item.nombre} />
    <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.caracteristicas}</p>
          <p className="card-text"> ${new Intl.NumberFormat().format(item.precio)}</p>
          <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>VER PRODUCTOS</Link></button>
          
    </div>
</div>
    );
}

export default Item;
