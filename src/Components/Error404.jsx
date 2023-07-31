import React from 'react';
import { Link } from 'react-router-dom';
import "./error404.css"

export default function Error404() {
  return (
   <div className="errPageMain">
   <h1 className='errH glitch' data-glitch="Error 404">Error 4<b>0</b>4</h1>
   <h4 className='errMsg'>You can't escape The Matrix</h4>
   <h3>⌐■_■</h3>
   <Link className='btn' to="/">Go Home</Link>
   </div>
  )
}
