import Image from 'next/image';
import { FC } from 'react';
import '../about-us.css'
const About: FC = () => {
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center px-8 py-2 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" 
            alt=""
            width={60}
            height={100}
          />
          
          
        </div>
        <nav className="space-x-12">
          <a href="#home" className="text-black hover:text-pink-700" style={{fontFamily:'font12'}}>
            Home
          </a>
          <a href="#services" className="text-black hover:text-pink-700" style={{fontFamily:"font12"}}>
            Services
          </a>
          <a href="#about" className="text-black hover:text-pink-700" style={{fontFamily:"font12"}}>
            About Us
          </a>
        </nav>
      </header>
     <div className=''>
      <img src="/waves.png" className='w-full relative h-[45rem] opacity-70'/>
     </div>
     <div className="relative py-10 px-48 mt-[-45rem]">
        <h1 style={{ fontFamily: 'font12' }} className='text-[3.5rem] text-black'>About Us </h1>
     </div>
     <div className='mt-[5rem]'>
     <div className='relative py-10 px-48'>
        <p style={{ fontFamily: 'font12' }} className='text-[1.5rem] text-pink-600'>From snapchat brand engagement filter to eye catching Augmented Reality newspaper advertisement all in one place.</p>
     </div>

     <div className='relative  px-48'>
        <p style={{ fontFamily: 'font12' }} className='text-[1.3rem] text-pink-600'>FlipXR is a forward-thinking creative company driving innovation in Augmented Reality (AR) and Virtual Reality (VR), paving the way towards the Metaverse. We are a dynamic agency with a passionate Gen Z team dedicated to crafting customized AR and VR solutions for brands.  FlipXR has successfully delivered numerous AR and VR experiences that redefine engagement and interaction.From snapchat brand engagement filter to eye catching Augmented Reality newspaper advertisement all in one place.</p>
     </div>
  
     </div>
   

    </div>
  );
};

export default About;