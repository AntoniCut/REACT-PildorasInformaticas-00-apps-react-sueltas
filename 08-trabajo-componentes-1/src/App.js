//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************

import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>  **********  Trabajando con Componentes  **********  </h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <Contador> </Contador>
               
      </header>
    </div>
  )
}

export default App
