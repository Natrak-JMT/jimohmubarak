import React from 'react'
import '../heropage/Home.css'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'
import Image from '../img/port1.jpg'
import Plus from '../img/icons8-plus-128.png'


function Home() {
  const handleDone = () => {
    console.log('Typewriter loop completed!');
  };

  const handleType = (count) => {
    console.log(`Typing sequence: ${count}`);
  };


  
  return (
    <div className='' id='home'>


      <div className='md:w-[50vw] space-y-4'>
       
        <div  className=' space-y-1'>
          <h1 className='md:text-3xl text-center md:text-start text-2xl font-bold'>Hello, I'm</h1>
          <h1 className='md:text-4xl text-center md:text-start text-3xl md:font-bold font-extrabold'>Jimoh <span className='text-[#E91E63]'>Almubarak</span></h1>
          </div>
          <div className='flex justify-center md:items-start items-center flex-col gap-4'>
          <h1 className='m-auto font-normal w-[75vw] text-center md:text-start'>
          A{' '}
        <span className='text-white font-extrabold md:text-[20px] text-[16px]'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Front-end Developer', 'Digital Broadcast Engineer (NTA) ']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
           <button className="button-1 md:absolute md:right-[270px] " role="button">
        <span className="text"> <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500} 
                 > Hire Me</Link>
         </span>
        </button>
      </div>
    </div>
    <div className='flex flex-col gap-4 items-center'>
      {/* <div className=' me w-[45vw] p-2'>
        <div className='flex items-center gap-4'>
        <img src={Plus} alt="" className='h-9' />
        <h1 className='font-extrabold text-3xl'>Attention to Detail</h1>
        </div>
       <p className='px-14'>Every project I undertake is meticulously planned and
         executed with precision. I focus on the small things that make a big difference,
          from clean code to pixel-perfect design.</p>
      </div>
      <div className=' me w-[45vw] p-2'>
        <div className='flex items-center gap-4'>
        <img src={Plus} alt="" className='h-9' />
        <h1 className='font-extrabold text-3xl'>Team-Oriented</h1>
        </div>
       <p className='px-14'>Collaboration is key to success. I thrive in team environments where ideas are shared, 
        and solutions are crafted collectively. My role often involves bridging gaps and ensuring seamless 
        communication.</p>
      </div>
      <div className=' me w-[45vw] p-2'>
        <div className='flex items-center gap-4'>
        <img src={Plus} alt="" className='h-9' />
        <h1 className='font-extrabold text-3xl'>Problem Solver</h1>
        </div>
       <p className='px-14'>I approach challenges with an analytical mindset, 
        breaking down problems and finding innovative solutions. From debugging code to devising strategies,
         I’m always ready to tackle obstacles head-on.</p>
      </div> */}
      <button className="button-91" role="button" >
    
      <div className=' md:w-[30vw] w-[70vw]  p-2 flex flex-col gap-3'>
        <div className='flex items-center justify-center gap-4'>
        <img src={Plus} alt="" className='h-9' />
        <h1 className='font-extrabold md:text-3xl text-xl'>Attention to Detail</h1>
        </div>
        <p className='text-sm'>I meticulously plan and execute projects, ensuring clean code and pixel-perfect design.</p>
      </div>   
      </button>
      <button className="button-91" role="button" >
    
      <div className='md:w-[30vw] w-[70vw]  p-2'>
        <div className='flex items-center justify-center gap-4'>
        <img src={Plus} alt="" className='h-9' />
        <h1 className='font-extrabold md:text-3xl text-xl'>Team-Oriented</h1>
        </div>
        <p className='text-sm'>I thrive in collaborative environments, bridging gaps and ensuring seamless 
          communication to achieve collective success.</p>
      </div>   
      </button>
      <button className="button-91" role="button" >
    
      <div className=' md:w-[30vw] w-[70vw] p-2'>
        <div className='flex items-center justify-center gap-4'>
        <img src={Plus} alt="" className='h-9' />
        <h1 className='font-extrabold md:text-3xl text-xl'>Problem Solver</h1>
        </div>
       <p className='text-sm'>I tackle challenges with an analytical mindset, breaking down problems and
         finding innovative solutions, 
        whether it's debugging code or strategizing new approaches."</p>
      </div>   
      </button>
    </div>
      
       {/* <div className='menu'>
        <h1 className='possible text-center font-extrabold md:text-[36px] text-[25px]'> When imagination meets innovation{''} <br/><span className='flex justify-center md:mt-4'>and anything is possible</span></h1>
        <div className='flex justify-center items-center gap-10 flex-col'>
        <p className='md:font-bold font-medium md:text-xl text-center text-xl'>Building innovative digital solutions with a passion for enhancing user experiences.</p>
        <button className="button-92" role="button" >
        <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500} 
                 > Let's Connect </Link>
          </button></div>
       </div> */}
      
      </div>
  )
}

export default Home