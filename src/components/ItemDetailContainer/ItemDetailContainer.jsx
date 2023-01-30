import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        fetch('./json/productos.json')
       .then(Response => Response.json())
       .then(products => {
       const item = products.find(prod => prod.id === 2)
        setProducto(item)
    })
    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto}/>
        </div>
    );
    
}

export default ItemDetailContainer;