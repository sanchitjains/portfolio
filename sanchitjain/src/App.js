
import { useState } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Github from './Components/Github';
import Contact from './Components/Contact';
import  Projects  from './Components/Projects';
import './App.css';


function App() {

  const [theme,setTheme]=useState("night");


  const handleTheme=()=>
    {
        
        if(theme=="day")
        {
            setTheme("night")
        }
        else
        {
            setTheme("day")
        }
    }




  return <div style={{backgroundColor: (theme=='day') ? "#EEE2DC":"#222629" }}>
        <Navbar handletheme={handleTheme}  theme={theme} />
        <About  theme={theme}/>
        <Skills  theme={theme}/>
        <Projects  theme={theme} />
        <Github  theme={theme}/>
        <Contact  theme={theme}/>
        <p className='credit'>© 2023 Sanchit. Designed by me with <span style={{color:"#AC3B61"}}>&#x2764;</span> </p>
        
  </div>;
}

export default App;
