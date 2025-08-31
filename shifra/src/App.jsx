import React, { useContext } from 'react';
import "./App.css"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';

function App() {
 let {recogition,speaking,setSpeaking,text,response,setText,setResponse} = useContext(datacontext)
 
  return (
    <div className='main'>
      <img src='/bot.png' id='shifra' alt='Bot'/>
      <span>I'm Rosy, Your Advanced Virtual Assistant</span>
      {!speaking?<button onClick={()=>{
        setText("listening...")
        setSpeaking(true)
        setResponse(false)
        recogition.start()
      }}>Click here <CiMicrophoneOn/></button>:<div className='response'>
        {!response?<img src='/mic.gif' alt='Mic here' id='mic'/>:<img src='/aiVoice.gif' alt='Mic here' id='aigif'/>}
        <p>{text}</p>
      </div>}
    </div>
  )
}

export default App