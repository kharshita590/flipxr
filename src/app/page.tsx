// import Image from 'next/image';
// import { FC } from 'react';

// const Home: FC = () => {

//   return (
//     <div className="bg-white">
//       <header className="flex justify-between items-center px-8 py-2 bg-white shadow-md">
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/logo.png" 
//             alt=""
//             width={60}
//             height={100}
//           />
          
//           {/* <h1 className="text-xl font-bold">Filter You™</h1> */}
//         </div>
//         <nav className="space-x-12">
//           <a href="#home" className="text-black hover:text-pink-700" style={{fontFamily:'font12'}}>
//             Home
//           </a>
//           <a href="#services" className="text-black hover:text-pink-700" style={{fontFamily:"font12"}}>
//             Services
//           </a>
//           <a href="#about" className="text-black hover:text-pink-700" style={{fontFamily:"font12"}}>
//             About Us
//           </a>
//         </nav>
//       </header>
//      <div className=''>
//       <img src="/background.png" className='w-full relative h-[40rem] opacity-70'/>
//      </div>
//      <section className="relative py-10 px-48 mt-[-38rem]">
//   <div className="flex flex-col lg:flex-row items-start justify-between w-full">
  
//     <div className="w-full lg:w-1/2 space-y-6 mt-16">
//       <h2
//         className="text-4xl font-bold text-gray-900"
//         style={{ fontFamily: 'font12' }}
//       >
//         We’re Shaping the Future of Brand Engagement with{' '}
//         <span className="text-pink-600">AR VR & AI</span>.
//       </h2>
//       <p
//         className="text-lg text-gray-700"
//         style={{ fontFamily: 'font12' }}
//       >
//         Empower Your Marketing: Create Unforgettable Social AR, VR & AI Experiences.
//       </p>
//       <button
//         className="px-6 py-3 bg-pink-500 text-white rounded-lg font-bold shadow-lg hover:bg-pink-600"
//         style={{ fontFamily: 'font12' }}
//       >
//         Get a FREE Consultation
//       </button>
//     </div>

//     <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
//       <div className="relative">
//         <video
//           src="/demo.mp4"
//           controls
//           width="270"
//           height="260"
//           autoPlay
//           loop
//           muted
//         ></video>
//         <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
//           <span>🍰</span>
//         </div>
//       </div>
//     </div>
    
//   </div>
// </section>

// <section className='mt-[12rem] px-28  mb-24'>
//   <p className='text-5xl text-purple-800 mb-2' style={{fontFamily:"font12"}}>
//   Let us Craft Your Dream AR Experience:</p>
//   <p className='text-3xl text-pink-600 mb-10' style={{fontFamily:"font12"}}>We Hyper Personalise your AR brand strategy!</p>

//   <div className='flex space-x-12 text-purple-500 font-bold mb-20' style={{fontFamily:"font12"}}>
//   <button className='w-[200px] h-[50px] p-2 rounded-full border-1 border-purple-300 shadow-pink-glow '>Marketing</button>
//   <button className='w-[230px] h-[50px] p-2 rounded-full border-1 border-purple-300 shadow-pink-glow '>Wedding and Gifting</button>
//   <button className='w-[210px] h-[50px] p-2 rounded-full border-1 border-purple-300 shadow-pink-glow '>Snapchat filters</button>
// </div>

// <div className="flex space-x-8 ">
// <video src="/v3 (1).mp4" className="w-[15rem] h-[30rem] rounded-lg overflow-hidden" controls autoPlay
//           loop
//           muted />

// {/* <video className="rounded-lg" controls>
//   <source src="video.mp4" type="video/mp4">
//   Your browser does not support the video tag.
// </video> */}

     
//       <video src="/v2.mp4" className="w-[15rem] h-[30rem] rounded-lg" controls autoPlay
//           loop
//           muted  />
     
//       <video src="/v1.mp4" controls autoPlay
//           loop
//           muted  className="w-[15rem] h-[30rem] rounded-lg" />

// <video src="/v4.mp4" controls autoPlay
//           loop
//           muted  className="w-[15rem] h-[30rem] rounded-lg" />
          
     
// </div>


// </section>
//     </div>
//   );
// };

// export default Home;
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={80}
            className='mt-1'
          />
        </div>
        <nav className="space-x-4 lg:space-x-12">
          <a href="#home" className="text-black hover:text-pink-700 text-[12px] lg:text-base" style={{ fontFamily: 'font12' }}>
            Home
          </a>
          <a href="#services" className="text-black hover:text-pink-700 text-[12px] lg:text-base" style={{ fontFamily: 'font12' }}>
            Services
          </a>
          <a href="#about" className="text-black hover:text-pink-700 text-[12px] lg:text-base" style={{ fontFamily: 'font12' }}>
            About Us
          </a>
        </nav>
      </header>
      

      <div className="relative">
        <img src="/background.png" className="w-full h-[43rem] lg:h-[35rem] opacity-70 object-cover" />
      </div>

      <section className="relative px-6 py-8 lg:px-48 lg:py-10 mt-[-41rem]  lg:mt-[-30rem]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          <div className="w-full lg:w-1/2 space-y-3 lg:space-y-6">
            <h2 className="text-1xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: 'font12' }}>
              We’re Shaping the Future of Brand Engagement with{' '}
              <span className="text-pink-600">AR VR & AI</span>.
            </h2>
            <p className="text-sm lg:text-lg text-gray-700" style={{ fontFamily: 'font12' }}>
              Empower Your Marketing: Create Unforgettable Social AR, VR & AI Experiences.
            </p>
            <button
              className="px-4 py-2 lg:px-6 lg:py-3 bg-pink-500 text-white rounded-lg font-bold shadow-lg hover:bg-pink-600"
              style={{ fontFamily: 'font12' }}
            >
              Get a FREE Consultation
            </button>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              <video
                src="/demo.mp4"
                controls
                width="200"
                height="200"
                autoPlay
                loop
                muted
                className="rounded-lg shadow"
              ></video>
              <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
                <span>🍰</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-[10rem] px-6 lg:px-28 mb-12 lg:mb-24">
        <p className="text-2xl lg:text-5xl text-purple-800 mb-2" style={{ fontFamily: 'font12' }}>
          Let us Craft Your Dream AR Experience:
        </p>
        <p className="text-1xl lg:text-3xl text-pink-600 mb-8 lg:mb-10" style={{ fontFamily: 'font12' }}>
          We Hyper Personalise your AR brand strategy!
        </p>

        <div className=" justify-start gap-4 lg:gap-12 text-purple-500 font-bold mb-12 lg:mb-20 lg:flex hidden" style={{ fontFamily: 'font12' }}>
  <button className="w-[150px] lg:w-[200px] h-[40px] lg:h-[50px] p-2 rounded-full border border-purple-300 shadow-pink-glow">
    Marketing
  </button>
  <button className="w-[180px] lg:w-[230px] h-[40px] lg:h-[50px] p-2 rounded-full border border-purple-300 shadow-pink-glow">
    Wedding and Gifting
  </button>
  <button className="w-[160px] lg:w-[210px] h-[40px] lg:h-[50px] p-2 rounded-full border border-purple-300 shadow-pink-glow">
    Snapchat filters
  </button>
  <button className="w-[160px] lg:w-[210px] h-[40px] lg:h-[50px] p-2 rounded-full border border-purple-300 shadow-pink-glow">
    AR/VR Real Estate Tour
  </button>
</div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className='flex flex-col justify-center items-center space-y-6'>
          <video src="/AR Wedding Invitation (1).mp4" className="w-full h-[15rem] lg:h-[30rem] rounded-lg" controls autoPlay loop muted />
         {/* <button className='w-[130px] h-[30px]  bg-white rounded-full shadow-pink-glow  text-pink-700' style={{ fontFamily: 'font12' }}>know more</button> */}
          </div>

          <div className='flex flex-col justify-center items-center space-y-6'>
          <video src="/Add a heading (3).mp4" className="w-full h-[15rem] lg:h-[30rem] rounded-lg" controls autoPlay loop muted />
          {/* <button className='w-[130px] h-[30px] bg-white rounded-full shadow-pink-glow text-pink-700' style={{ fontFamily: 'font12' }}>know more</button> */}
          </div>

          <div className='flex flex-col justify-center items-center space-y-6'>
          <video src="/AR Wedding Invitation (1).mp4" className="w-full h-[15rem] lg:h-[30rem] rounded-lg" controls autoPlay loop muted />
          {/* <button className='w-[130px] h-[30px] bg-white rounded-full shadow-pink-glow text-pink-700' style={{ fontFamily: 'font12' }}>know more</button> */}
          </div>

          <div className='flex flex-col justify-center items-center space-y-6'>
          <video src="/Add a heading (4).mp4" className="w-full h-[15rem] lg:h-[30rem] rounded-lg" controls autoPlay loop muted />
          {/* <button className='w-[130px] h-[30px] bg-white rounded-full shadow-pink-glow text-pink-700' style={{ fontFamily: 'font12' }}>know more</button> */}
          </div>
       
        
        
         
        </div>
      </section>
    </div>
  );
};

export default Home;
