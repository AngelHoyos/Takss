import React from 'react'
import './Tasks.css'


export const Tasks = ({children}) => {
  return (
 <section className="Nav">
  <div className="GeneralTitle">
    <p>Titulo</p>
    <p>Descripcion</p>
  </div>
    <ul>
          {children}
    </ul>
 </section>
  )
}
