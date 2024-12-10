//  **************************************************
//  **********  /srcComponents/Contador.js  **********
//  **************************************************

import React, {useState} from "react"

//  **********  Componente 'Contador'  **********
const Contador = () => {

    const [cuenta, setContador] = useState(1)
  
    const incrementar = () => {
      setContador(cuenta + 1)
    }
  
    const decrementar = () => {
      setContador(cuenta - 1)
    }
  
    return(
      <div>
        <button onClick={decrementar}> - </button>
        <input type="text" value={cuenta} size="2" style={{textAlign: "center"}}/>
        <button onClick={incrementar}> + </button>
      </div>
    )
  
  }

  export default Contador