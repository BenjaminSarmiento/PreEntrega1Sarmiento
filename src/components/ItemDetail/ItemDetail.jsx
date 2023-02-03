import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div>
            <div className="cardDetalle">
                <img src={`../img/${item.img}`} className = "img-fluid rounded-start img-card-detalle" alt= {item.nombre}/>
                <div>
                    <div className="card-body-detalle">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.caracteristicas}</p>
                        <p className="card-text"> stock: {item.stock}</p>
                        <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <ItemCount valInicial={1} stock={item.stock}/>
                        <button className="btn btn-secondary btn-final">FINALIZAR COMPRA</button>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default ItemDetail;
