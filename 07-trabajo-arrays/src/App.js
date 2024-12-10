//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************

import logo from './logo.svg';
import './App.css';

function App() {
  
  const miArray1 = () => {

    const numerosArray = [15, 37, 26, 95, 81]

    return(
       
        <p> {
          
          numerosArray.map((numero, index) => {
            return <span key={index}> &nbsp; &nbsp; {index} - {numero} </span>
          }) 

        } </p>

    )

  }


  const miArray2 = () => {
    
    const numerosArray = [
      {id: 1, numero: 15},
      {id: 2, numero: 37},
      {id: 3, numero: 26},
      {id: 4, numero: 95},
      {id: 5, numero: 81}
    ]

    return(
       
        <p> {
          
          numerosArray.map((elemento) => {
            return <span key={elemento.id}> &nbsp; &nbsp; {elemento.id} - {elemento.numero} </span>
          }) 
        } </p>
    )
  }
    
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1> Numeros del Array </h1>  
        <h5> con array... {miArray1()} </h5>
        <h5> con objetos... {miArray2()} </h5>
        
      </header>
    </div>
  );

}

export default App
