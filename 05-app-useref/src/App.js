//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
import React, {useRef} from "react";
import video from "./assets/video.mp4";


//  **********  Componente App  *******
function App() {

  const videoRef = useRef(null);

  const videoPlay = ()=> {
    videoRef.current.play();
  };

  const videoPause = ()=> {
    videoRef.current.pause();
  };

    //  *****  Renderiza elementos. 
    return ( 
    
      <div>

        <video ref={videoRef}  width="400">

          <source src={video} type="video/mp4"/>
        </video>
        
        <div>
          <br/> 
          <button onClick={videoPlay}> Play </button>
          <button onClick={videoPause}> Pause </button>
        </div>
       
      </div>
    )
}


export default App;
