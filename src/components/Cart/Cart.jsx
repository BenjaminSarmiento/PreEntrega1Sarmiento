import { Link } from "react-router-dom"
import  ItemList  from "../ItemList/ItemList"
export const Cart = () => {
    const carrito = [
        {id: 1, nombre: "creatina", modelo: "1", img: "creatina-gold.png", precio: 400, cantidad: 5 },
        {id: 2,nombre: "proteina", modelo: "2", img: "creatina-gold.png", precio: 300, cantidad: 2 },
        {id: 3,nombre: "shaker", modelo: "3", img: "creatina-gold.png", precio: 500, cantidad: 3 },
    ]
    return(
        <>
            { carrito.length === 0 
              ? //Si carrito esta vacio
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              : //Si carrito tiene productos
                <div className="container cartContainer">
                    {
                        <ItemList products={carrito} plantilla={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-danger">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )

}