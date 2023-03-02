import mario1 from '../Resources/images/mario1.gif'
import { useEffect } from 'react'
export default function Mariojump() {
    
    let timeer=null;
    useEffect(()=>{
             timeer=setTimeout(()=>{
            return<>
            <marquee behavior="scroll" direction="up">
                 <img src={mario1} alt="jump" /></marquee>
            </>
        },3000)
    })
    return (
        <>
            {timeer}
        </>
    )
}
