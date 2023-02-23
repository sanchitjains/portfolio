import { useState } from "react"

function Navbar({handletheme,theme})
{
    const [fill,setFill]=useState("empty")
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
    <div className={"navbar"+theme}>
        <a href="/#" className={"name"+theme}>Sanchit</a>
        <button id={"navmenu"+theme} className="material-icons" onClick={handlemenu}>{menu}</button>
        <div className={"nav"+menu+theme}>
        
        <a href={"/#info"+theme} onClick={handlemenu} className={"navbutton"+theme}>ABOUT</a>
        <a href={"/#skills"+theme} onClick={handlemenu} className={"navbutton"+theme}>SKILLS</a>
        <a href={"/#projects"+theme} onClick={handlemenu} className={"navbutton"+theme}>PROJECTS</a>
        <a href={"/#github"+theme} onClick={handlemenu} className={"navbutton"+theme}>GITHUB</a>
        <a href={"/#contact"+theme} onClick={handlemenu} className={"navbutton"+theme}>CONTACT</a>
        <a className={"resume"+theme} onClick={handlemenu} href="https://drive.google.com/file/d/1Kzp4O2wNmvNXKy5JdKm1GXHgsIMQcSb0/view?usp=sharing" target="blank" rel="noreferrer"> <span>RESUME</span><span className={"material-icons"}>  download</span></a>
        <button id={"theme"+theme} onMouseLeave={()=>{setFill("empty")}} onMouseEnter={()=>{setFill("filled")}} className={(fill=="empty")?"material-icons-outlined":"material-icons"} onClick={handletheme}>{(theme=="night") ? "light_mode" :"dark_mode"}</button>
        </div>

    </div>
    </>
}
export default Navbar
