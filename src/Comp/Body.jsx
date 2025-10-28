import React from 'react'
import yash  from '../assets/yash.jpg'
import Flag from '../assets/flag.png'
import Github from '../Bodyass/Github.svg'
import Linkedin from '../Bodyass/Linkedin.svg'
import X from '../Bodyass/X.svg'
import Insta from '../Bodyass/Insta.svg'
import Resume from '../Bodyass/Resume.png'
import Link from '../Bodyass/Link.svg'
import HTML from '../Bodyass/HTML.png'
import CSS from '../Bodyass/CSS.png'
import JS from '../Bodyass/JS.png'
import Re from '../Bodyass/React.png'
import Mongo from '../Bodyass/Mongo.png'
import Express from '../Bodyass/Express.png'
import Node from '../Bodyass/Node.png'
import Mysq from '../Bodyass/Mysq.png'
import Tailwind from '../Bodyass/Tailwind.png'

import C from '../Bodyass/C.png'
import Cpp from '../Bodyass/Cpp.png'
import Py from '../Bodyass/Py.png'
import Aws from '../Bodyass/Aws.png'
import Vercel from '../Bodyass/Vercel.png'
import Vs from '../Bodyass/Vs.png'
import Vite from '../Bodyass/Vite.png'

import Up from '../Bodyass/Up.png'


import { FaCheckCircle,FaCrosshairs  } from "react-icons/fa";

const Body = ( {theme , textCol} ) => {
function navUp () {
  const section = document.getElementById("home");
  section?.scrollIntoView({ behavior: 'smooth'});
}


  // return (
  //   <div className='h-screen w-full text-[40px] flex flex-col items-center' style={ {backgroundColor: theme , color: textCol } }  >
      
  //     <h1 data-aos="fade-down" className='mt-10 font-lobster ' >Hellow, I am <span className='text-yellow-200 font-bold '>Yash !</span> </h1>
      
  //     <img className='h-40 w-40 mt-10 ' data-aos="fade-down" src={yash} alt="" />
      
  //     {/* <div data-aos="fade-right" className='border-2 border-violet-200 px-5 bg-violet-500 rounded-sm text-[20px] mt-10  sm:text-[35px]  font-coda  text-yellow-200'>Full-Stack Developer</div> */}

  //       <div data-aos="fade-right" className="relative border-2 border-violet-200 px-5 bg-violet-500 rounded-sm text-[20px] mt-10 sm:text-[35px] font-coda text-yellow-200 inline-block">
  //       {/* Ping Dot */}
  //       <span className="absolute -left-1 top-0 transform -translate-y-1/2">
  //           <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
  //       </span>

  //       Full-Stack Developer
  //       </div>


  //               <div data-aos="fade-left" className='h-72 sm:h-48 w-[95%] sm:w-[75%] rounded-md px-2 border border-orange-400 mt-5' >
  //                   <h3 className='text-zinc-600'>About</h3>
  //                   <p className='text-[20px] px-5 font-outfit' >I am a B.Tech CSE'28 Student. Building career by practical knowledge .
  //                   Currently working with "MERN Stack" <br />  <span className='font-protest text-green-300' > ~ Your upcoming Intern</span>  </p>
  //                </div>
  //   </div>  
  // )





  return(

<div id='home' className='h-auto w-full font-outfit '  style={{backgroundColor:theme , color:textCol }}>   
       <div  className="min-h-[100vh] w-full relative bg-[linear-gradient(to_right,rgba(71,85,105,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.15)_1px,transparent_1px),radial-gradient(circle_at_50%_60%,rgba(236,72,153,0.15)_0%,rgba(168,85,247,0.05)_40%,transparent_70%)] bg-[length:40px_40px,40px_40px,100%_100%]">
        
           
        
        
        <div className='ml-[10%] sm:ml-[20%] mr-[10%] sm:mr-[20%] pt-5'>
                  <span className='text-[15px]  sm:text-[25px] font-lobster hover:cursor-pointer hover:text-green-500 hover:animate-bounce duration-500 ease-in-out'  >yashyachwad</span>


                  <div className='mt-10 flex justify-between items-center'>
                            
                            <div className='flex justify-start items-center sm:w-[80%] h-24 '>
                                  <div className='flex flex-row w-16 sm:w-28'>
                                  <img className='absolute h-5 w-5  sm:h-7 sm:w-7 z-2' src={Flag} alt="" />
                                  <img className='h-16 sm:h-24 w-16 sm:w-24 rounded-full' src={yash} alt="" />
                                  </div>

                                  <div className='w-32 sm:w-56 flex flex-col justify-center items-center '>
                                  <h1 className=' font-bold gap-2 text-[15px] sm:text-[25px] flex justify-center '>Yash Yachwad <FaCheckCircle className='mt-1 animate-pulse text-blue-500' /> </h1>
                                  <p className='text-[11px] mr-2 sm:mr-14 sm:text-[15px]'>Full Stack Developer</p>
                                  </div>
                            </div>


                            <div className='font-coda flex gap-3  items-end sm:w-[20%] text-[10px] sm:text-[14px]'>
                              < FaCrosshairs className=' h-5 w-5  mt-2 sm:mb-1 transition-all animate-pulse  text-red-500 duration-700'/>
                                Gurugram , IND
                            </div>

                  </div>









                  <div className='  mb-10  rounded-md' style={{ color:textCol}} >
                            <p className=' text-justify sm:leading-loose mt-5'>
                              Hey there! 👋 I'm Yash, Aspiring full-stack developer & second-year CSE student having expertise in MERN Stack. Currently working on  Next.Js and TypeScript .
                              </p>
                            <p className='text-justify sm:leading-loose mt-5 '>  I've built projects like reX, a  resume builder and YaPra, a platform inspired by Gemini. I love converting complex problems into elegant solutions using React.js, Node.Js  and modern web technologies.  </p>

                            <p  className='text-justify sm:leading-loose mt-5 ' > When I'm not shipping features or debugging production issues, you'll find me contributing to open-source, grinding LeetCode problems, or experimenting with the latest tech. I believe in learning by building and sharing what I learn with the community.</p>


                              <div id="projects" className='flex flex-wrap justify-center gap-10 sm:gap-16  mt-16'>
                                    <img className='rounded-md h-8 w-8 hover:scale-105 hover:cursor-pointer  bg-white border-2 border-black'   src={Github} alt="" />
                                    <img className='rounded-md h-8 w-8 hover:scale-105 hover:cursor-pointer  bg-white '  src={X} alt="" />
                                    <img className='rounded-md h-8 w-8 hover:scale-105 hover:cursor-pointer  bg-white'  src={Insta} alt="" />
                                    <img className='rounded-md h-8 w-8 hover:scale-105 hover:cursor-pointer  bg-white' src={Resume} alt="" /> 
                                   <img className='rounded-md h-8 w-9  hover:scale-105 hover:cursor-pointer bg-white'  src={Linkedin} alt="" />
                              </div>
                 </div>







                    <h1  className='font-bold text-[20px] mb-3'>Featured Project</h1>
        <div className='border-l-2 mb-10 border-slate-500 ' >
                  <div className='flex justify-between pl-3  pb-3'>                   
                          <div>
                            <h2  className='text-[18px]  font-bold hover:cursor-pointer hover:text-green-500  '>reX </h2>
                            <p className='text-[10px]'>Click to view details</p>
                          </div>
                          <div className='flex gap-3'> 
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500 rounded-md' src={Github} alt="" />
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500  rounded-md' src={Link} alt="" />
                          </div>                  
                  </div>

                  <p className=' pl-3 text-justify ' > I created Rex Resume Builder to make that possible. Simply enter your details once, and let Rex design a clean, professional resume for you in seconds. Pick from multiple modern templates, edit anytime, and see live updates as you make changes. You can instantly download your resume in PDF format and even get suggestions to make it more impressive and job-ready.</p>

                  <div className='flex flex-wrap gap-2 pb-2 pt-4  pl-3' >
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >React.Js</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >TailwindCSS</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >Express.JS</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >MongoDB</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >Node.Js</span>
                  </div>
          </div>


{/* 2nd project  */}

          <div className='border-l-2 mb-10 border-slate-500 ' >
                  <div className='flex justify-between pl-3  pb-3'>                   
                          <div>
                            <h2 className='text-[18px]  font-bold hover:cursor-pointer hover:text-green-500  '>YaPra </h2>
                            <p className='text-[10px]'>Click to view details</p>
                          </div>
                          <div className='flex gap-3'> 
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500 rounded-md' src={Github} alt="" />
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500  rounded-md' src={Link} alt="" />
                          </div>                  
                  </div>

                  <p className=' pl-3 text-justify ' >Yapra is a Gemini inspired project built to replicate Google’s Gemini UI experience. It focuses on clean design, responsive layout, and interactive cards using React and Tailwind CSS. The project showcases modern frontend practices while helping me sharpen my UI/UX development skills.</p>

                  <div className='flex flex-wrap gap-2 pb-2 pt-4  pl-3' >
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >React.Js</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >TailwindCSS</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >Express.JS</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >Fetch API</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >Node.Js</span>
                  </div>
          </div>


{/* 3rd project  */}

          <div className='border-l-2 mb-10 border-slate-500 ' >
                  <div className='flex justify-between pl-3  pb-3'>                   
                          <div>
                            <h2 className='text-[18px]  font-bold hover:cursor-pointer hover:text-green-500 '>YanDi</h2>
                            <p className='text-[10px]'>Click to view details</p>
                          </div>
                          <div className='flex gap-3'> 
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500 rounded-md' src={Github} alt="" />
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500  rounded-md' src={Link} alt="" />
                          </div>                  
                  </div>

                  <p className=' pl-3 text-justify ' >Yandi is an AI assistant project designed to mimic modern conversational AI tools. It provides a clean chat interface, smooth interactions, and a responsive design . The project reflects my skills in creating intuitive, user-friendly AI-driven interfaces.</p>

                  <div className='flex flex-wrap gap-2 pb-2 pt-4  pl-3' >
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >JavaScript</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >CSS</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >Fetch API</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >HTML</span>
                  </div>
          </div>





{/* 4th project  */}

          <div className='border-l-2 mb-10 border-slate-500 ' >
                  <div className='flex justify-between pl-3  pb-3'>                   
                          <div>
                            <h2 className='text-[18px]  font-bold hover:cursor-pointer hover:text-green-500 '>DevPad</h2>
                            <p className='text-[10px]'>Click to view details</p>
                          </div>
                          <div className='flex gap-3'> 
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500 rounded-md' src={Github} alt="" />
                            <img className= ' h-6 w-6  bg-white border-2 border-black hover:cursor-pointer hover:text-green-500  rounded-md' src={Link} alt="" />
                          </div>                  
                  </div>

                  <p className=' pl-3 text-justify ' >DevPad is a developer-focused platform project designed to provide a clean and minimal interface for writing, organizing and experimenting on code snippets, it emphasizes productivity, responsive design, and a smooth user experience. This project reflects my interest in building practical tools for frontend developers.</p>

                  <div className='flex flex-wrap gap-2 pb-2 pt-4  pl-3' >
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >React.Js</span>
                        <span className='h-auto w-auto px-2 border rounded-md border-slate-800 hover:border-green-500' style={{ color:textCol}} >TailwindCSS</span>

                  </div>
          </div>



          <h1 className='font-bold text-[20px] mb-3 '>Technical Skills</h1>
                  <div className='grid grid-cols-9 grid-row-2 gap-2 pb-10'>
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-orange-400 ' src={HTML} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-blue-400 ' src={CSS} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-yellow-400 ' src={JS} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Re} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Tailwind} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-zinc-500 ' src={Express} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Node} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Mongo} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Mysq} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={C} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Cpp} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Py} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Aws} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin border-2 border-black bg-white' src={Vercel} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin border-2 border-black bg-white' src={Github} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Vite} alt="" />
                      <img className='h-8 w-8 p-1 rounded-md hover:animate-spin bg-black ' src={Vs} alt="" />
                  </div>








        </div>
        
        
        
        
    <div onClick={navUp} className='h-8 w-8 border-2 border-gray-600 rounded-full fixed bottom-6 right-2  sm:right-6 bg-blue-200 hover:bg-blue-300 object-fit '>
      <img  src={Up} alt="" />
    </div>
        
        
        
        
        
        
               
      
      
      
      
      
      
      
      
      
       </div>
</div>


  )


}

export default Body
