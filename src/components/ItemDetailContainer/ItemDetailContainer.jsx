import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducto } from "../../firebase/firebase";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getProducto(id)
       .then(item => {
        setProducto(item)
    })
    }, [])

    return (
        <div >
            <ItemDetail item={producto}/>
        </div>
    );
    
}

export default ItemDetailContainer;