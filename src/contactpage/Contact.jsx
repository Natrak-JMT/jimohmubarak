
import '../contactpage/Contact.css'
import React,{useEffect,useState} from 'react'
import { FaPhone } from "react-icons/fa";
import { MdHouse } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiSocialAtCircular } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { ImWhatsapp } from "react-icons/im";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify'
import {Button} from 'antd'

function Contact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [Message, setMessage]=useState('')
  const [loading, setLoading]=useState(false)
   const Contactapi = async(e)=>{
    e.preventDefault();
    setLoading(true)
    const formapi='https://forms-io.onrender.com/submit-form/bc7dbf7b-493b-4f21-ad62-7c9c6c1bd7e6'
    try {
      const response = await fetch(formapi,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name,email,subject,Message
        })
      })
      if (response) {
        const newdata = await response.json() 
        console.log(newdata);
        toast.success('Message sent successfully!') 
        setEmail('')
        setMessage('')
        setName('')
        setSubject('')  
      } 
      else{
        toast.error('Failed to send message. Please try again.');
        setEmail('')
        setMessage('')
        setName('')
        setSubject('')  }
       }
     catch (error) {
      console.log('error');
      toast.error('An error occurred. Check your Network and Please try again.');
      setEmail('')
      setMessage('')
      setName('')
      setSubject('')  
    }
    setLoading(false)
}
 
  return (
    <div className='flex flex-col gap-20  py-32 text-black 'id='contact'>
    {/* <div className=' flex flex-col items-center py-10'>
    <h1 className=' font-extrabold md:text-[40px] text-[25px] text-center border-y-4 border-[#E91E63] '>Contact</h1>
    </div> */}
    {/* <div className='flex md:flex-row flex-col justify-center items-center gap-24 mb-10  '>
       <div className='bg-black text-white flex flex-col items-center gap-4 p-10 box'>
         <MdHouse  className='text-[#E91E63] text-3xl'/>
        <h2>Location</h2>
        <h1>Lagos, Nigeria</h1>
      </div>
     <div className='bg-black text-white flex flex-col items-center gap-4 p-10 box '  >
          <FaPhone className='text-[#E91E63] text-3xl' />
        <h2>Phone:</h2>
        <h1>+2348035134775</h1>
      </div>
     <div className='bg-black text-white flex flex-col items-center gap-4 p-10 box' >
     <MdOutlineMailOutline  className='text-[#E91E63] text-3xl' />
        <h2>Email</h2>
        <h1>Natrakdev@gmail.com</h1>
      </div>
     <div className='bg-black text-white flex flex-col items-center gap-4 p-10 box'>
     <TiSocialAtCircular className='text-[#E91E63] text-3xl'  />
        <h2>Social Media:</h2>
       <div className='flex items-center gap-5 font-bold  cursor-pointer'>
      <a href="#"><TiSocialFacebook className='text-2xl' /></a> 
       <a href="#"><TiSocialLinkedin className='text-2xl' /></a>
       <a href="#"><TiSocialTwitter   className='text-2xl' /></a>
       <a href="#"> <ImWhatsapp  className='text-xl'   /></a>
       </div>
      </div>
    </div> */}
   
    <div className='md:px-28 mb-10'>
    <div className='bg-gray-950  flex flex-col space-y-3 rounded-xl py-5  px-10'>
    <h1 className='text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Contact Me</h1>
   
     <form className='space-y-10 flex flex-col items-center' onSubmit={Contactapi}>
      <input type="text" 
      placeholder='Name'
      value={name}
      onChange={((e)=>{setName(e.target.value)})}
      required
      className='w-full bg-gray-950  outline-none py-1 border-b-2'/>
      <input type="email"
      placeholder='Email'
      value={email}
      onChange={((e)=>{setEmail(e.target.value)})}
      required
      className='w-full bg-gray-950  outline-none py-1 border-b-2' />
      <input type="text"
      placeholder='Subject'
      value={subject}
      onChange={((e)=>{setSubject(e.target.value)})}
      required
      className='w-full bg-gray-950  outline-none py-1 border-b-2' />
      <textarea rows='5' placeholder='Message' value={Message}
       onChange={((e)=>{setMessage(e.target.value)})} required 
       className='w-full bg-gray-950  outline-none py- border-b-2'></textarea>
       <Button type='primary' 
       loading={loading}
       className=' font-bold bg-transparent text-xl px-2 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500'
        htmlType='submit'>{loading?'Submitting...':'Send Message'}</Button>
      {/* <button className=' font-bold bg-transparent px-2 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500'>Send Message</button> */}
     </form>
     <ToastContainer />
      </div>

    </div>

    </div>
  )
}

export default Contact