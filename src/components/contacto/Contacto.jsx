import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Contacto = () => {
    const datosFormulario = React.useRef() 
    let navigate = useNavigate() 
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current) 
        const datForm = new FormData(datosFormulario.current) 
        const contacto = Object.fromEntries(datForm) 
        console.log(contacto)
        e.target.reset() 
        toast.success("Enviado correctamente")
        navigate("/")
    }
  return (
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
            <label htmlFor="celular" className="form-label">Numero de telefono</label>
            <input type="number" className="form-control" name="celular" />
        </div>
        <div className="mb-3">
            <label htmlFor="consulta" className="form-label">Dejanos tu comentario!</label>
            <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>

  )
}
export default Contacto;