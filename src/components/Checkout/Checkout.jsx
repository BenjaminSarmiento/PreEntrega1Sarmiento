import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"

function Checkout() {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
  
    const consultarFormulario = (e) => {
      e.preventDefault()
      const datForm = new FormData(datosFormulario.current)
      const cliente = Object.fromEntries(datForm)
  
      if (cliente.nombre.trim() && cliente.email.trim() && cliente.repEmail.trim() && cliente.celular.trim() && cliente.direccion.trim() && cliente.email === cliente.repEmail) {
  
          const aux = [...carrito]
  
          aux.forEach(prodCarrito => {
              
              getProducto(prodCarrito.id).then(prodBDD => {
                  prodBDD.stock -= prodCarrito.cant
                  updateProducto(prodCarrito.id, prodBDD)
              })
          })
  
          createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
              toast.success(`¡FELICITACIONES POR TU COMPRA!, su orden de compra con el ID: ${ordenCompra.id
              } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
              emptyCart()
              e.target.reset()
              navigate("/")
          })
  
      } else {
          toast.error("Debe completar todos los campos correctamente")
      }
    }
  
    return (
      <>
        {carrito.length === 0
          ?
          <div className="sinProductos">
            <h2>No existen productos en el carrito</h2>
            <Link className="nav-link sinProductosLink" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
          </div>
          :  
          <div className="container" style={{marginTop:"20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" name="nombre"/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                <input type="email" className="form-control" name="repEmail" />
              </div>
              <div className="mb-3">
                <label htmlFor="celular" className="form-label">Numero de telefono</label>
                <input type="number" className="form-control" name="celular" />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control" name="direccion" />
              </div>
              <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>  
          </div>
        }
      </>
    );
  }
  
  export default Checkout;