
import maria from '../Resources/images/mario.gif'
export default function Mariorun() {


    return (
        <>
            <marquee id="marioContainer" 
                width="99%"
                scrollamount="25"
                direction="right"
                bgcolor="black"
                behavior="slide"

            >
                <img src={maria} id='maria' width="160px" alt="mario" />
            </marquee>
        </>
    )
}
