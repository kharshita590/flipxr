import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {

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
          
          {/* <h1 className="text-xl font-bold">Filter You™</h1> */}
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
      <img src="/background.png" className='w-full relative h-[40rem] opacity-70'/>
     </div>
     <section className="relative py-10 px-48 mt-[-38rem]">
  <div className="flex flex-col lg:flex-row items-start justify-between w-full">
  
    <div className="w-full lg:w-1/2 space-y-6 mt-16">
      <h2
        className="text-4xl font-bold text-gray-900"
        style={{ fontFamily: 'font12' }}
      >
        We’re Shaping the Future of Brand Engagement with{' '}
        <span className="text-pink-600">AR VR & AI</span>.
      </h2>
      <p
        className="text-lg text-gray-700"
        style={{ fontFamily: 'font12' }}
      >
        Empower Your Marketing: Create Unforgettable Social AR, VR & AI Experiences.
      </p>
      <button
        className="px-6 py-3 bg-pink-500 text-white rounded-lg font-bold shadow-lg hover:bg-pink-600"
        style={{ fontFamily: 'font12' }}
      >
        Get a FREE Consultation
      </button>
    </div>

    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
      <div className="relative">
        <video
          src="/demo.mp4"
          controls
          width="270"
          height="260"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
          <span>🍰</span>
        </div>
      </div>
    </div>
    
  </div>
</section>

<section className='mt-[12rem] px-28  mb-24'>
  <p className='text-5xl text-purple-800 mb-2' style={{fontFamily:"font12"}}>
  Let us Craft Your Dream AR Experience:</p>
  <p className='text-3xl text-pink-600 mb-10' style={{fontFamily:"font12"}}>We Hyper Personalise your AR brand strategy!</p>

  <div className='flex space-x-12 text-purple-500 font-bold mb-20' style={{fontFamily:"font12"}}>
  <button className='w-[200px] h-[50px] p-2 rounded-full border-1 border-purple-300 shadow-pink-glow '>Marketing</button>
  <button className='w-[230px] h-[50px] p-2 rounded-full border-1 border-purple-300 shadow-pink-glow '>Wedding and Gifting</button>
  <button className='w-[210px] h-[50px] p-2 rounded-full border-1 border-purple-300 shadow-pink-glow '>Snapchat filters</button>
</div>

<div className="flex space-x-8 ">
<video src="/thank-you (3).mp4" className="w-[15rem] h-[25rem] rounded-lg overflow-hidden" controls autoPlay
          loop
          muted />

{/* <video className="rounded-lg" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> */}

     
      <video src="/thank-you (2).mp4" className="w-[15rem] h-[25rem] rounded-lg" controls autoPlay
          loop
          muted  />
     
      <video src="/thank-you (1).mp4" controls autoPlay
          loop
          muted  className="w-[15rem] h-[25rem] rounded-lg" />
           <img src="/ar-filter.jpg" alt="item" className="w-[14rem] h-[25rem] rounded-lg" />
     
</div>


</section>
    </div>
  );
};

export default Home;
// import Image from 'next/image';
// import { FC } from 'react';

// const Home: FC = () => {
//   const data = [
//     { img: '/dummy.jpeg' },
//     { img: '/dummy.jpeg' },
//     { img: '/dummy.jpeg' },
//     { img: '/dummy.jpeg' },
//   ];

//   return (
//     <div className="bg-white">
//       <header className="flex justify-between items-center px-4 sm:px-8 py-2 bg-white shadow-md">
//         <div className="flex items-center space-x-2">
//           <Image src="/logo.png" alt="Logo" width={60} height={100} />
//         </div>
//         <nav className="space-x-4 sm:space-x-8">
//           <a href="#home" className="text-black hover:text-pink-700">
//             Home
//           </a>
//           <a href="#services" className="text-black hover:text-pink-700">
//             Services
//           </a>
//         </nav>
//       </header>

//       <div>
//         <img src="/background.png" className="w-full h-[20rem] sm:h-[40rem] object-cover opacity-70" />
//       </div>

//       <section className="relative py-8 px-4 sm:px-12 lg:px-24">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
//           {/* Text Section */}
//           <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
//             <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
//               We’re Shaping the Future of Brand Engagement with{' '}
//               <span className="text-pink-600">AR VR & AI</span>.
//             </h2>
//             <p className="text-lg text-gray-700">
//               Empower Your Marketing: Create Unforgettable Social AR, VR & AI Experiences.
//             </p>
//             <button className="px-6 py-3 bg-pink-500 text-white rounded-lg font-bold shadow-lg hover:bg-pink-600">
//               Get a FREE Consultation
//             </button>
//           </div>

//           {/* Video Section */}
//           <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
//             <div className="relative">
//               <video src="/demo.mp4" controls width="270" height="260" autoPlay loop muted></video>
//               <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
//                 <span>🍰</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mt-12 px-4 sm:px-8 lg:px-28">
//         <p className="text-3xl sm:text-5xl text-purple-800 mb-2">
//           Let us Craft Your Dream AR Experience:
//         </p>
//         <p className="text-xl sm:text-3xl text-pink-600 mb-8">
//           We Hyper Personalise your AR brand strategy!
//         </p>

//         {/* Buttons Section */}
//         <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
//           <button className="w-full sm:w-auto px-4 py-2 rounded-md bg-gradient-to-tl from-pink-200 to-purple-200 shadow-sm border-2 border-purple-200">
//             Marketing
//           </button>
//           <button className="w-full sm:w-auto px-4 py-2 rounded-md bg-gradient-to-tl from-pink-200 to-purple-200 shadow-sm border-2 border-purple-200">
//             Wedding and Gifting
//           </button>
//           <button className="w-full sm:w-auto px-4 py-2 rounded-md bg-gradient-to-tl from-pink-200 to-purple-200 shadow-sm border-2 border-purple-200">
//             Snapchat filters
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
//           {data.map((item, index) => (
//             <div key={index}>
//               <img src={item.img} alt="item" className="w-40 h-52 object-cover rounded-lg" />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
