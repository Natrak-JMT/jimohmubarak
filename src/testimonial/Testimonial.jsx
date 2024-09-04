import React from 'react'
import '../testimonial/Testimonial.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Photo from '../img/toshimg2.jpg'
const responsive = {
  0: { items: 1 },
  // 568: { items: 2 },
  // 1024: { items: 3 },
};
function Testimonial() {
  const people=[
    {
    image:Photo,
    text:'My Experience working with Almubarak has been very positive. I always receive quality service from him. I highly recommend this guy to everyone because I think he is one a of kind.',
    name:'Ismaheel Abdulmaleeq Omotosho',
    postion:"CEO Toshconsult "
},
    {
    image:Photo,
    text:'My Experience working with Almubarak has been very positive. I always receive quality service from him. I highly recommend this guy to everyone because I think he is one a of kind.',
    name:'Ismaheel Abdulmaleeq Omotosho',
    postion:"CEO Toshconsult "
},
    {
    image:Photo,
    text:'My Experience working with Almubarak has been very positive. I always receive quality service from him. I highly recommend this guy to everyone because I think he is one a of kind.',
    name:'Ismaheel Abdulmaleeq Omotosho',
    postion:"CEO Toshconsult "
}
]
const carouselItems = people.map(item=>(
<div key={item.id} className="item flex flex-col items-center justify-center md:py-8 gap-3 text-center md:px-24 mt-5 md:mt-0">
          <img src={item.image} alt=""  className='rounded-full w-28'/>
        <p  className='text-white md:text-2xl px-4'>{item.text}</p>
        <h1 className='text-[#E91E63] font-extrabold md:text-3xl'>{item.name}</h1>
        <p className=' font-bold text-white '>{item.postion}</p>
</div> ))
  return (
    <div className='bg-indigo-600 h-[100vh]' id='testimonial'>
        <div className='Testimonial  '>
        <div className='md:py-14 py-14 flex flex-col items-center'>
            {/* <h1 className='text-white font-extrabold md:text-[40px] text-[25px] text-center border-y-4 border-[#E91E63] '>What Clients Say</h1> */}
        </div>
        <div className='flex flex-col items-center mt-1'>
        <div className='md:w-[70vw] w-[100%] md:h-[70vh] h-[50vh] rounded-lg people'>
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
        </div>
    </div>


    </div>
  )
}

export default Testimonial