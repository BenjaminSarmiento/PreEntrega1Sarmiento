import { useState } from "react";
import { toast } from "react-toastify";
const ItemCount = ({valInicial, stock, onAdd}) => {
    const [contador, setContador] = useState(valInicial)


    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast(`Agregaste ${contador} productos al carrito`)
}

    return (
        
        <>
            <button className="btn btn-dark botonCardDetalle" onClick={() => sumar ()}> + </button>
            {contador}
            <button className="btn btn-dark botonCardDetalle " onClick={() => restar ()}> - </button>
            <button className="btn btn-dark botonAgregar" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
