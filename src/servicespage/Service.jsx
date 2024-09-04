import React from 'react'
import '../servicespage/Service.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Network from '../img/icons8-google-analytics-50.png'
import Per from '../img/icons8-nextjs-48.png'
import Icon from '../img/icons8-tool.gif'
import Digi from '../img/icons8-html-50.png'
import System from '../img/icons8-css-48.png'
import Config from '../img/icons8-tailwind-css-48.png'
import Design from '../img/icons8-js-48.png'
import RECi from '../img/icons8-react-native-50.png'
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
function Service() {
  const items =[
    {
    id:1,
    image: Digi,
    text:'HTML',
 
       },
    {
    id:2,
    image: System,
    text:'CSS',
    },
    {
    id:3,
    image: Design,
    text:'Javascript',
       },
    {
    id:4,
    image:RECi,
    text:'REACT',
       },
       {
    id:5,
    image: Config,
    text:'Taliwind',
   
       },
       {
    id:6,
    image: Network ,
    text:'Google Analytics',
       },
       {
    id:7,
    image: Per,
    text:'Nextjs',
 
       },
       {
    id:8,
    image:Icon,
    text:'Technical Support',
       }
      ]

      const carouselItems = items.map(item=>(
        <div key={item.id} className="item flex py- flex-col items-center gap-6 text-center md:px-24 mt-10 md:mt-0">
        <div className='text-white bg-white'>
          <img src={item.image} alt="web" className='h-20'  />
        </div>
        <div className='flex flex-col items-center gap-3'>
        <h1 className="md:text-3xl tracking-widest md:w-[30vw] w-[80vw] font-bold text-[#E91E63] ">{item.text}</h1>
        <p className='text-center text-white md:text-xs text-base w-[90vw]  md:w-[25vw]'>{item.texts}</p>
        </div>
      </div>
      )) 
  return (
    <div className='bg-black md:h-[100vh] flex flex-col items-center justify-center md:gap-28 ' id='services'>
        <AliceCarousel
         mouseTracking
         items={carouselItems}
         responsive={responsive}
         controlsStrategy="alternate"
         autoPlay
         autoPlayInterval={2000}
         infinite
         animationDuration={1000}       // Custom duration for slide transition
         animationType='slide'        // Fade-out effect during slide transition
         disableButtonsControls={true} // Show next/prev buttons
         disableDotsControls={true}    // Show dots
    />
      
      </div>
  )
}

export default Service