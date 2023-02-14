import ItemCount from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../../context/DarkModeContext";

const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const onAdd = (cantidad) =>{
       console.log(cantidad)
       console.log(item)
    }
    return (
        <div>
            <div className={`cardDetalle ${darkMode && "bodyItemDetailDark" }`}>
                <img src={`../img/${item.img}`} className = "img-fluid rounded-start img-card-detalle" alt= {item.nombre}/>
                <div>
                    <div className="card-body-detalle">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.caracteristicas}</p>
                        <p className="card-text"> stock: {item.stock}</p>
                        <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <div className="contenedorFinalCardDetalle">
                        <ItemCount valInicial={1} stock={item.stock} onAdd= {onAdd}/>
                        <button className="btn btn-secondary btn-final">FINALIZAR COMPRA</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default ItemDetail;
