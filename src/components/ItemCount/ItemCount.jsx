import { useState } from "react";
const ItemCount = ({valInicial, stock}) => {
    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)

    return (
        
        <>
            <button classname="btn btn-dark" onClick={() => sumar ()}> + </button>
            {contador}
            <button classname="btn btn-dark" onClick={() => restar ()}> - </button>
        </>
    );
}

export default ItemCount;
