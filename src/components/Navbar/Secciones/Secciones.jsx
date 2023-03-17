import { Link } from "react-router-dom"
import React from "react"
export const Secciones = React.memo (() => {
  return (
    <>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}><button className="btn btn-success">Inicio</button></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><button className="btn btn-success">Contacto</button></a>
        </li>
        <li>
        <a className="nav-link" href="#"><button className="btn btn-success">Info</button></a>
        </li>
    </>
  )
})