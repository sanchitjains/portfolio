
import Mariorun from "./Mariorun";
import Mariojump from "./Mariojump";
function Mario({theme,bulb,mario}) {
    
if(mario=="on" && theme=="night")
{
    return <>
            
    <div id={"mario"+bulb+theme}>
    
    </div>
    <Mariorun ></Mariorun>
    <Mariojump/>
</>
}
else
{
    return <>
            
    <div id={"mario"+bulb+theme}>
    
    </div>

</>
}
}
export default Mario