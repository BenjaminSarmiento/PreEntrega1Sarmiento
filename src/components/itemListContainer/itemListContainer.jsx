
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('./json/productos.json')
       .then(Response => Response.json())
       .then(products => {
       const productsList = ItemList({products})
        console.log(productsList)
        setProductos(productsList)
    })
    }, [])

    return (
        <div className="row cards">
            {productos}
        </div>
    );
}

export default ItemListContainer;
