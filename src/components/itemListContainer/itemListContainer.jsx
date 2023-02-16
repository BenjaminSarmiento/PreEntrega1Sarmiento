
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import { useDarkModeContext } from "../../context/DarkModeContext";

import { getProductos } from "../../firebase/firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {nombreCategoria}= useParams() 
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)

    useEffect(() => {
        if (nombreCategoria) {    
            getProductos()
       .then(items => {
          const products = items.filter(prod => prod.nombreCategoria === nombreCategoria)  
          const productsList = <ItemList products={products} plantilla={'item'}/> 
          console.log(productsList)
          setProductos(productsList)
         })
    } else {
        getProductos()
       .then(products => {
        const productsList = <ItemList products={products} plantilla={'item'}/> 
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
