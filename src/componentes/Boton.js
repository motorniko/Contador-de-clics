import React from "react";

function Boton({ texto, esBotonDeclic, menejarClic }){
    return (
      <button className={ esBotonDeclic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={menejarClic}>
        {texto} 
      </button>
    );
}

export default Boton;