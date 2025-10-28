import React from 'react'
import Menu from '../assets/Menu.png'
import  Github from '../assets/Github.png'
import Profile from '../assets/Profile.png'
import Pull from '../assets/Pull.png'
import Overview from '../assets/Overview.png'
import Folder from '../assets/Folder.png' 
import Follower from '../assets/Follower.png'
import Location from '../assets/Location.png'
import Mail from '../assets/Mail.png'
import Linkedin from '../assets/Linkedin.png'
import Phone from '../assets/Phone.png'
import Insta from '../assets/Insta.png'


const Git = ( {theme ,textCol } ) => {
  return (
    < >

    {/* NavSection  */}
    <div className='h-14 w-full sticky top-0 backdrop-blur-sm bg-black flex justify-between items-center' style={{color:textCol}}>
         <div className='flex justify-center items-center gap-2 '>
            <img className='h-7 sm:h-9 w-7 sm:w-9 text-orange-400' src={Menu } alt="" />
            <img className='h-8 sm:h-10 w-8 sm:w-10' src={Github} alt="" />
            <h4 className='text-orange-400 font-semibold'>yashyachwad</h4>
         </div>
   

         <div className='flex justify-center items-center gap-2 sm:gap-3 'style={{color:textCol}}  >
          <input type="text" placeholder='Search ...' className='border border-orange-400 text-orange-300 pl-5 rounded-md h-7 w-24 sm:w-72   bg-transparent '/>
          <div className='h-7 w-7 border   rounded-md flex justify-center items-center'>
            <img src={Pull} alt="" className='h-5 w-5 rounded-full object-contain'/>
          </div>
          <div >
            <img src={Profile} alt="" className='h-9 w-9 pr-2 rounded-full object-cover'/>
          </div>
         </div>

    </div>


    <div className='h-5 pb-2 w-full pr-10 sm:pr-20 flex justify-end  items-center gap-4 sm:gap-8 backdrop-blur-sm sticky top-16 bg-black  '> 
        <div className='flex justify-center items-center gap-1 text-white text-[14px]'>
          <img src={Overview} alt="" className='h-5 w-5' />
           <h4>Overview</h4>
        </div>
        <div className='flex justify-center items-center gap-1  text-white  text-[14px]'>
          <img src={Folder} alt=""  className='h-5 w-5'/>
          <h4>Repo</h4>
        </div>
    </div>


    {/* Main Section  */}

    <div className='h-full grid  sm:grid-cols-[30%_70%] pl-3 sm:pl-0  gap-0 bg-black font-outfit' >

      <div className=' w-[45vw] sm:w-[350px]   flex  ml-[20%] flex-col  items-start sm:mt-10' >
        <img src={Profile} alt="" className='h-40 sm:h-80 w-40 sm:w-80   object-cover rounded-full' />

        <h1 className='font-bold text-[27px] sm:text-[30px] text-gray-300 sm:ml-4'>yashyachwad</h1> <span className=' ml-4 text-gray-600'> yashyachwad- he/him</span>
        <button className='h-15 w-56 rounded-md border sm:ml-4 mb-1 border-slate-400 sm:w-64 bg-zinc-800 font-semibold text-white p-1'>Edit Profile</button>
                  <div className='flex justify-center items-center text-gray-300   text-[11px] sm:text-sm '>
                    <img src={Follower} alt="" className='h-5 sm:h-6 w-5 sm:w-6 sm:ml-4 mr-2' />
                    <h1 >2 Follower.   </h1>
                    <h1> 1 Following.</h1>
                  </div>
  
              
                   <br />
        <div className='flex justify-center items-center text-gray-300 sm:ml-4  text-[11px] sm:text-sm mb-1 '>
          <img src={Location} alt="" className='h-5 sm:h-6 w-5 sm:w-6 mr-2'  />
          <h1>Gurugram , INDIA</h1>
        </div>
        <div className='flex justify-center items-center text-gray-300 sm:ml-4 text-[11px] sm:text-sm mb-1 '>
          <img src={Mail} alt=""  className='h-5 sm:h-6 w-5 sm:w-6 mr-2' />
          <h1>yashyechwad420@gamil.com</h1>
        </div>
        <div className='flex justify-center items-center text-gray-300 sm:ml-4 text-[11px] sm:text-sm '>
          <img src={Linkedin} alt=""  className='h-5 sm:h-6 w-5 sm:w-6 mr-2' />
          <h1>in/yashyachwad</h1>
        </div>
      </div>

      {/* GRID 2  */}
      <div className=' h-auto border border-orange-200 rounded-md w-[95vw] sm:w-[800px] sm:ml-10  text-white mt-5 mb-5'  >


              <p className='text-[10px] sm:text-[20px] ml-3 text-green-300' >yashyachwad / README.md</p>
              <h1 className='text-[35px] font-bold ml-3' >Hey Everyone, I'm Yash</h1>
              <hr />
              <h1 className='text-[20px] font-bold ml-3 mt-2 text-slate-400 ' >About Me</h1>
                      <p className='ml-5 mb-2 p-2 text-orange-200 text-justify'>Full-Stack Developer who loves building and shipping innovative products.
              I enjoy exploring new technologies, working with React.js, Next.js, and TypeScript,
              and actively participate in hackathons and open-source projects.
              Always excited to collaborate and create impactful solutions!</p>
              <hr />
              <h1 className='text-[22px] font-bold ml-3 mt-2 text-slate-400' >Tech Stack</h1>
              <h3 className='font-bold text-[15px] ml-5 '>Language</h3>
                  <div className='grid grid-cols-3 grid-rows-1 gap-2 ml-7 sm:flex sm:justify-around sm:w-[60%] '>
                      <button className='w-24 px-1 bg-red-200 text-black font-semibold rounded-sm'>C++</button>
                      <button className='w-24 px-1 bg-red-300 text-black font-semibold rounded-sm'>Python</button>                       
                      <button className='w-24 px-1 bg-red-400 text-black font-semibold rounded-sm'>JavaScript</button>
                  </div> 
            <h3 className='font-bold text-[15px] ml-5 mt-4'>Frameworks/Libraries</h3>
                  {/* <div className=' flex justify-around w-[95%] sm:w-[70%] sm:gap-3 ml-7'> */}
              <div className='grid grid-cols-3 grid-rows-2 gap-2 ml-7 sm:flex sm:justify-around sm:w-[80%] '>
                    <button className='w-24 px-2 rounded-sm text-black font-semibold bg-orange-100'>Express.Js</button>
                    <button className='w-24 px-2 rounded-sm text-black font-semibold bg-orange-200'>React.Js</button>
                    <button className='w-24 px-2 rounded-sm text-black font-semibold bg-orange-300'>Node.Js</button>
                    <button className='w-24 px-1 rounded-sm text-black font-semibold bg-orange-400'>TailwindCSS</button>
                  </div>
              <h3 className='font-bold text-[15px] ml-5  mt-4'>DB/Tools</h3>
                  <div className='grid grid-cols-3 grid-rows-2 gap-2 ml-7 sm:flex sm:justify-around sm:w-[80%] mb-3 '>
                  <button className='w-24 px-1 rounded-sm text-black font-semibold bg-amber-400'>MongoDB</button>
                  <button className='w-24 px-2 rounded-sm text-black font-semibold bg-amber-500'>Github</button> 
                  <button className='w-24 px-2 rounded-sm text-black font-semibold bg-amber-600'>Render</button>
                  <button className='w-24 px-2 rounded-sm text-black font-semibold bg-amber-700'>Vercel</button>
                  </div>
            <hr />
              <h1 className='text-[22px] font-bold ml-3 mt-2 text-slate-400' >Connect With Me</h1>
                  <div className='flex items-center ml-7 mt-2'>
                    <img src={Phone} alt=""  className='h-8  w-8'/>
                    <p>8010057938</p>
                  </div>
                  <div className='flex items-center ml-7 mt-2 mb-4'>
                    <img src={Insta} alt="" className='h-8 w-8' />
                     <p >yash_yachwad</p>
                  </div>
        </div>
    </div>
 
    </>
  )
}

export default Git ;
