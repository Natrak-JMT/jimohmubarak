import React from 'react'
import Photo from '../img/backgroundbg.jpg'
import '../Aboutpage/About.css'

import { TypeAnimation } from 'react-type-animation';
function About() {
  return (
    <div className='md:h-[100vh] h-auto bg-white' id='about'>
      
      <div className='about-page'>
        <div className=' '>
          <img src={Photo} alt="tt"  className='md:h-[60vh] md:w-[40vw] md:rounded-sm  '/>

        </div>
        <div className='flex flex-col md:gap-2  '>
          <div className='flex flex-col md:gap-3'>
          <h1 className='font-bold uppercase md:text-5xl text-[28px] text-black text-center
           md:text-left text-shadow-lg'>About ME</h1>
          {/* <h3 className='font-bold md:text-sm text-lg  text-center md:text-right tracking-widest
           text-[#e91e63]'>Digital Broadcast Engineer (NTA) | Front-end Developer</h3> */}
            </div>
            <div className='flex flex-col'>
            <div className='text-left md:text-left'>
        <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
        sequence={[
          " I am a dynamic developer passionate about creating stunning websites. My blend of creativity and technical expertise transforms designs into seamless, functional experiences. Committed to exceeding expectations, I craft visually striking and responsive sites using tools like React, Next.js, and Node.js. With a background in Computer Science and broadcast media, I leverage my skills to tell compelling stories and make a meaningful impact. Always learning and experimenting, I deliver innovative digital solutions and enjoy collaborating on projects that drive results. Let’s connect and create something extraordinary together! ",
          10000,
          '',
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
        omitDeletionAnimation={true}
        style={{ display: 'block', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
        className='font-normal bg-black text-white h-auto md:w-[50vw] w-screen md:h-[55vh] px-4 py-10 rounded text-base md:text-lg'
        repeat={Infinity}
      />
      
        </div>
        <div className='flex justify-start items-start px-3 md:gap-40 mt-5 mb-3 flex-col md:flex-row'>
          <div className='flex gap-3 flex-col'>
      <div className='flex flex-col'>
        <h1 className='font-extrabold  tracking-widest'>NAME</h1>
        <p className='font-bold text-gray-600 tracking-widest'>Jimoh Al-mubarak</p>
      </div>
      <div className='flex flex-col'>
        <h1   className='font-extrabold  tracking-widest'>Email</h1>
        <p className='font-bold text-gray-600 tracking-widest'>Natrakdev@gmail.com</p>
      </div>
      </div>
      <div className='flex gap-3 flex-col' >
        <div><h1  className='font-extrabold  tracking-widest'>Education</h1>
        <p className='font-bold text-gray-600 tracking-widest'>Computer Science</p></div>
        <div><h1   className='font-extrabold  tracking-widest'>Employment</h1>
        <p className='font-bold text-gray-600 tracking-widest'>Open</p></div>
      </div>
      </div>
        </div>
        </div>

      </div>
    
    
    
    </div>
  )
}

export default About