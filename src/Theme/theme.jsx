import { useState, useEffect } from "react";
import Sun from '../assets/sun.png'
import Moon from '../assets/moon.png'

export default function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    
    <div className=" h-10 w-full flex justify-end ">
      

     <button
      onClick={toggleTheme}
      className="  rounded bg-white dark:bg-black text-black dark:text-white hover:scale-120 transition-transform">
      {theme === "dark" ? (<img className=" h-8  text-white w-8 object-fill " src={Sun} alt="" />) : (<img className=" h-8 bg- w-8 object-cover" src={Moon} /> )  }  </button>
 
    </div>


);
}
