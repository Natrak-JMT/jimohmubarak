import React,{useState} from 'react'
import '../portfoilopage/Portfolio.css'
import Port1 from '../img/port1.jpg'
import Port2 from '../img/port2.jpg'
import Port3 from '../img/port3.jpg'
import Port4 from '../img/port4.jpg'
import Port5 from '../img/port5.jpg'
import Port6 from '../img/port6.jpg'
function Portfolio() {
  const [pop, setPop]=useState(false)
    function handlepro(){
      setPop(!pop)
    }
      const showimage=[
        {
        image:Port1,
        projectNumber:'Project One',
        projectText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, numquam!'
      },
       { image:Port2,
        projectNumber:'Project two',
        projectText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, numquam!'
      },
       { image:Port3,
        projectNumber:'Project three',
        projectText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, numquam!'
      },
       { image:Port4,
        projectNumber:'Project four',
        projectText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, numquam!'
      },
       { image:Port5,
        projectNumber:'Project five',
        projectText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, numquam!'
      },
       { image:Port6,
        projectNumber:'Project six',
        projectText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, numquam!'
      }
    ]
  return (
    
    
    <div  className=' py-10 md:px-10 flex flex-col gap-10 items-center bg-'id='portfolio'>
    <h1 className='text-red-600 font-extrabold text-3xl'>PAGE CURRENTLY UNDER MAINTAINCE!!</h1>

<h1 className='text-black text-center text-4xl md:text-6xl capitalize font-bold p-3 '>Portfolio</h1>
    <div  className='grid md:grid-cols-3'>
      { showimage.map(show=>(
      <div className='lets ' key={show.id} onClick={handlepro} >
      <img src={show.image} alt="tk" className='h-[50vh] block w-[100%]' />
      <div className='overplay flex flex-col justify-center px-5'>
        <div className='mub flex flex-col gap-8 '>
        <h2 className='h2 font-bold'>{show.projectNumber}</h2>
        <p className='p font-bold'>{show.projectText}</p>
        </div>
      </div>
    
   </div>
   ))
    }
    
    {/* {
      pop && 
      <div className='h-[300px] w-[300px] bg-red-500'>
      hello world
    </div>
    } */}
    </div>
    


    </div>
    
  
  )
}

export default Portfolio