import { useState } from 'react'
import Juego from '../components/Juego'

function App() {
  
  const [Participantes, setParticipantes] = useState([])
  const [Init, setInit] = useState(false)
  return (
    <div>
    <h1 className='text' id='title'>Comecocos</h1>
    {
      Init ? 
      <Juego participantes={Participantes}></Juego>
      :
      <>
    <div id='participantes'>
      <input className='text' id='input_participantes' placeholder='Añadir participante'></input>
      <br></br>
      <div id='botones'>
      <button className='button text' id='button_ok' onClick={()=>{
        
        setParticipantes([...Participantes, document.getElementById('input_participantes').value])
        document.getElementById('input_participantes').value = ''
      }}>Añadir</button>
      <button className='button text' id='button_ok' onClick={()=> setInit(true)}>Confirmar</button>
      <button className='button text' id='button_ok' onClick={()=> setParticipantes([])}>Limpiar</button>
      </div>
    </div>
    <div className='text' id='participantes_activos'>
    {
      Participantes.map((participante, index) => {
      return <span className='participante'>{participante}</span>
      })
    }
    
    <iframe id='video' width={800} height={400} src='https://www.youtube.com/embed/ZvC-LJ0zSUo'></iframe>
      </div>
    </>
    }
    
    </div>
  )
}

export default App
