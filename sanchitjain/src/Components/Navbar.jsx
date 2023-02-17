import { useState } from "react"

function Navbar()
{
    const [menu,setMenu]=useState("menu");

    const handlemenu=()=>
    {
        if(menu=="menu")
        {
            setMenu("close")
        }
        else
        {
            setMenu("menu")
        }
    }
    return <>
    <div className="navbar">
        <span className="name">Sanchit</span>
        <button id="navmenu" className="material-icons" onClick={handlemenu}>{menu}</button>
        <div className={"nav"+menu}>
        
        <a href="/#info" className="navbutton">ABOUT</a>
        <a href="/#skills" className="navbutton">SKILLS</a>
        <a href="/about" className="navbutton">PROJECTS</a>
        <a href="/about" className="navbutton">GITHUB</a>
        <a href="/about" className="navbutton">CONTACT</a>
        <a className="resume" href="https://drive.google.com/file/d/1Kzp4O2wNmvNXKy5JdKm1GXHgsIMQcSb0/view?usp=sharing" target="blank" rel="noreferrer"> <span>RESUME</span><span className="material-icons">  download</span></a>
        </div>

    </div>
    </>
}
export default Navbar
