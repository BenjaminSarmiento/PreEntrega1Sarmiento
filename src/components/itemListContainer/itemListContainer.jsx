
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {nombreCategoria}= useParams()  

    useEffect(() => {
        if (nombreCategoria) {    
            fetch('/json/productos.json')
       .then(Response => Response.json())
       .then(items => {
          const products = items.filter(prod => prod.nombreCategoria === nombreCategoria)  
          const productsList = ItemList({products})
          console.log(productsList)
          setProductos(productsList)
         })
    } else {
        fetch('/json/productos.json')
       .then(Response => Response.json())
       .then(products => {
        console.log(products)
          const productsList = ItemList({products})
          console.log(productsList)
          setProductos(productsList)
         })
    }
    }, [nombreCategoria])     

    return (
        <div className="row cards">
            {productos}
        </div>
    );
}

export default ItemListContainer;
