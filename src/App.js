
import './App.css';
import osirislogo from './imagenes/osiris.png';

function App() {
  return (
    <div className="App">
      <div className='logo-cont'>
        <img
          className='logo' 
          src={osirislogo}
          alt='logo'
        />
      </div>
    </div>
  );
}

export default App;
