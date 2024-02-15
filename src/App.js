
import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Boton from './componentes/Boton';
import osirislogo from './imagenes/osiris.png';
import Contador from './componentes/contador';
import { useState } from 'react';




function App() {

  const [numClics, setNunClics,] = useState(0);

  const menejarClic= () => {
    setNunClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNunClics(0);

  };



  return (
    <div className="App">
      <div className='logo-cont'>
        <img
          className='logo' 
          src={osirislogo}
          alt='logo'
        />
      </div>
      <div className='cont-principal'>

        <Contador numClics={numClics} />
        <Boton 
          texto='clic'
          esBotonDeclic={true}
          menejarClic={menejarClic}
        />
        
        <Boton 
          texto='reiniciar'
          esBotonDeclic={false}
          menejarClic={reiniciarContador}
          />

      </div>
    </div>
  );
}

export default App;
