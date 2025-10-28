

import { useEffect, useState } from 'react';
import Body from './Comp/Body'
import Nav from './Comp/Nav'
// animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";
// router
import { Routes, Route } from "react-router-dom"
import Git from './Comp/Git';



function App() {
    const [theme, setTheme] = useState("white");
    const [ textCol , setTextCol ] =useState("black");

    useEffect(() => {
    AOS.init({
      offset: 50,   // how far before the element enters view
      duration: 1300, // animation speed
      easing: "ease-in-out", 
      once: false, // animation will trigger every time you scroll up/down
    });
  }, []);




 
  return (
<>
      <Nav theme={theme} setTheme={setTheme} textCol={textCol} setTextCol={setTextCol} />

      <Routes>
        <Route path="/" element={<Body theme={theme} textCol={textCol}  /> } />
        <Route path="/git" element={<Git theme={theme} textCol={textCol} /> } />
      </Routes>
</>
 
  )
}

export default App
