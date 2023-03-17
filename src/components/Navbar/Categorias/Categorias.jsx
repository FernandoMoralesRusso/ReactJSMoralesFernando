import React from 'react';
import { Link } from 'react-router-dom';
export const Categorias = React.memo (() => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-success">
          Categorias
          </button></Link>
        <ul className="dropdown-menu">
          <li> <Link className="dropdown-item" to={`category/Cactus`} >Cactus</Link></li>
          <li><Link className="dropdown-item" to={`category/Suculentas`} >Suculentas</Link> </li>
          <li><Link className="dropdown-item" to={`category/Interior`} >P.Interior</Link> </li>
               
        </ul>

      </li>
      
    </>


  );
})
