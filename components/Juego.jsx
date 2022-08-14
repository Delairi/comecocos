import React,{useEffect,useState} from 'react'

const Juego = ({participantes}) => {

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let colores = ['rojo','verde','azul','morado']
      let colores_bg = ['red','green','blue','purple']
      let bg = ['#eb545447','#abe9fb4f','#abb4fb4f','#e7abfb4f']
      let preguntas = [
          {
              color:'rojo',
              pregunta:'¿Cuándo fue la última vez que mentiste?',
              numero:1,
              color_bg:'red',
              bg:'#eb545447'
          },
          {
              color:'rojo',
              pregunta:'¿Qué es lo peor que has hecho en el trabajo?',
              numero:2,
              color_bg:'red',
              bg:'#eb545447'
          },
          {
              color:'rojo',
              pregunta:'¿Cuándo fue la última vez que lloraste?',
              numero:3,
              color_bg:'red',
              bg:'#eb545447'
          },
          {
              color:'rojo',
              pregunta:'¿Cuál es tu mayor miedo?',
              numero:4,
              color_bg:'red',
              bg:'#eb545447'
          },
          {
              color:'verde',
              pregunta:'¿Cuál es tu mayor fantasía?',
              numero:5,
              color_bg:'green',
              bg:'#abe9fb4f'
          },
          {
              color:'verde',
              pregunta:'¿Tienes algún fetiche?',
              numero:6,
              color_bg:'green',
              bg:'#abe9fb4f'
          },
          {
              color:'verde',
              pregunta:'¿Quién es la última persona que has buscado en Instagram?',
              numero:7,
              color_bg:'green',
              bg:'#abe9fb4f'
          },
          {
              color:'verde',
              pregunta:'¿Qué es lo que te alegra que tu familia no sepa de ti?',
              numero:8,
              color_bg:'green',
              bg:'#abe9fb4f'
          },
          {
              color:'azul',
              pregunta:'¿Has engañado alguna vez a alguien?',
              numero:9,
              color_bg:'blue',
              bg:'#abb4fb4f'
          },
          {
              color:'azul',
              pregunta:'¿Cuál es el lugar más extraño en el que has orinado?',
              numero:10,
              color_bg:'blue',
              bg:'#abb4fb4f'
              
          },
          {
              color:'azul',
              pregunta:'¿Qué es lo peor que has hecho?',
              numero:11,
              color_bg:'blue',
              bg:'#abb4fb4f'
          },
          {
              color:'azul',
              pregunta:'¿Qué es lo más extraño que has comido?',
              numero:12,
              color_bg:'blue',
              bg:'#abb4fb4f'
          },
          {
              color:'morado',
              pregunta:'¿Cuál es tu problema en las relaciones?',
              numero:13,
              color_bg:'purple',
              bg:'#e7abfb4f'
          },
          {
              color:'morado',
              pregunta:'¿Cuál es el secreto que nunca le has contado a nadie?',
              numero:14,
              color_bg:'purple',
              bg:'#e7abfb4f'
          },
          {
              color:'morado',
              pregunta:'¿Tienes algún talento oculto?',
              numero:15,
              color_bg:'purple',
              bg:'#e7abfb4f'
          },
          {
              color:'morado',
              pregunta:'¿Quién fue tu primer amor celebrity?',
              numero:16,
              color_bg:'purple',
              bg:'#e7abfb4f'
          }
      ]
    const [InitGame, setInitGame] = useState(false)
    const [Color, setColor] = useState('')
    const [Preguntas, setPreguntas] = useState(preguntas)
    const [Pregunta, setPregunta] = useState(null)
    const [Participante, setParticipante] = useState('')
    const [Again, setAgain] = useState(false)
    useEffect(() => {
        document.getElementById('rombo').classList.add('rombito')
        setInitGame(false)
        setPregunta('')
        setTimeout(() => {
            document.getElementById('rombo').classList.remove('rombito')
            let n_r =getRandom(0,colores.length)
            let p_r = getRandom(0,participantes.length)
            let color_r = colores[n_r]
            console.log(color_r)
            setColor(color_r)
            document.getElementById('rombo').style.background = `${colores_bg[n_r]}`
            document.getElementById('title').style.color = `${colores_bg[n_r]}`
            document.body.style.background = `${bg[n_r]}`
            setParticipante(participantes[p_r])
            setInitGame(true)
        },4000)

    }, [Again])
    


  return (
    <div id='participantes'>

    <div className='rombo rombito' id='rombo' onClick={()=> setAgain(!Again)}>
    </div>

    <div className='botones' id='new'>
        {
            InitGame ?
            <>
             <div id='participantes'>
            <h2 className='text'>{Participante} has sido elegido elige una pregunta</h2>
            {
                Pregunta != null && <p className='text'>{Pregunta}</p>
            }
        </div>
            <div className='rows'>
            {
                Preguntas.map((pregunta,index)=>{
                    if(pregunta.color === Color){
                    return <div style={{background:pregunta.color_bg}} className='div_circle' onClick={()=>{
                        setPregunta(pregunta.pregunta)
                    }}><button className='text button_circle' >Numero {pregunta.numero}</button></div>
                    }
                })
            }
            </div>
           
            </>
            :
            <><span className='text'>Espera ...</span></>
        }
        
    </div>

      

    </div>
  )
}

export default Juego