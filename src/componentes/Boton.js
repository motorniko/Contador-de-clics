import React from "react";
import '../hojas de estilo/boton.css';

function Boton({ texto, esBotonDeclic, menejarClic }){
    return (
      <button className={ esBotonDeclic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={menejarClic}>
        {texto} 
      </button>
    );
}

export default Boton;