import { Link } from "react-router-dom"
import  ItemList  from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    return(
        <>
            { carrito.length === 0 
              ? //Si carrito esta vacio
                <div className="carritoVacio">
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </div>
              : //Si carrito tiene productos
                <div className="container cartContainer">
                    {
                        <ItemList products={carrito} plantilla={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p className="resumenDeCompra">Resumen de la compra:  $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )

}