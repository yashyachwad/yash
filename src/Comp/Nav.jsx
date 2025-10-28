import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Nav = ( {theme, setTheme, textCol, setTextCol } ) => {
// const [theme , setTheme ]= useState("black");
const [ text , setText ]= useState(<> <FaMoon  /> </>);
const navigate = useNavigate();
 
function changeTheme() {

  
    if(theme == "black"){
         setTheme("white");
        setText(
        <>
            <FaMoon />
        </>);
        setTextCol("black");
        }
    else { 
        setTheme("black");
        setText(
        <>
            <FaSun className='text-white' />
        </>);        setTextCol("white ");

    }
}

function navGit() {
  navigate("/git");
}
function navHome() {
  navigate("/");

   const section = document.getElementById("home");
    section?.scrollIntoView({ behavior: "smooth" });
}

function navProject () {
  const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
}

  return (

    <div className='h-16 w-full   font-outfit border' style={{ backgroundColor:theme}}  >
            
        <div  className='h-16 w-screen flex pr-5 sm:gap-[10%] justify-end  items-center backdrop-blur-md fixed top-0 bg-black/5 z-50'>

            <div className='flex gap-5 sm:gap-20 pr-24'>

            <button data-aos="fade-down" onClick={navHome}  className=' h-7 w-16 hover:cursor-pointer  hover:scale-110   transition-all duration-100 ease-in-out flex justify-center items-center ' style={{ color:textCol }} >Home</button>
            <button data-aos="fade-down" onClick={navProject}  className=' h-7 w-16 hover:cursor-pointer  hover:scale-110   transition-all duration-100 ease-in-out flex justify-center items-center ' style={{ color:textCol }} >Project</button>
            <button data-aos="fade-down" onClick={navGit}  className=' h-7 w-16 hover:cursor-pointer  hover:scale-110  transition-all duration-100 ease-in-out flex justify-center items-center 'style={{ color:textCol}}  >Github</button>
           
            </div>
            <button data-aos="fade-down"
                    onClick={changeTheme}
                    className='h-7 w-7  '
                    > {text} 
                    </button>

            </div>

    </div>


  )
}

export default Nav
