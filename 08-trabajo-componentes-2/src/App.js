//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
//import Contador from './components/Contador';
import PropTypes from "prop-types"

//  *****************************
//  **********  Props  **********
//  *****************************


function App() {


  const usuario = {
    nombre: "Antonio",
    apellido: "Cutillas",
    edad: 48,
    genero: "masculino"
  }


  return (

    <div>

      {/* <Saludo destinatario="Alumnos"> </Saludo> */}
      <Saludo usuario={usuario} > </Saludo>

    </div>
  )
}


//  **********  Componente 'Saludo()'  **********
function Saludo( props ) {
  return (

    <div>
      <h1> Hola {props.usuario.nombre} { props.usuario.apellido} !!! </h1> 
      <p> Tienes { props.usuario.edad} años </p>
      <p> y de genero <strong> { props.usuario.genero} </strong> </p>
    </div>

  )
  
}

//  *****  Validacion de 'props'  *****
Saludo.propTypes = {
  
  usuario:PropTypes.shape({
    nombre:PropTypes.string.isRequired,
    edad:PropTypes.number.isRequired

  }).isRequired

}


export default App
