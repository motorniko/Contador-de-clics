
import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Boton from './componentes/Boton';
import osirislogo from './imagenes/osiris.png';

function App() {

  const menejarClic= () => {
    console.log("clic");
  }

  const reiniciar = () => {
    console.log("reiniciar");

  }



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
        <Boton 
          texto='clic'
          esBotonDeclic={true}
          menejarClic={}
        />
        
        <Boton 
          texto='reiniciar'
          esBotonDeclic={false}
          menejarClic={}
          />

      </div>
    </div>
  );
}

export default App;
