import myPic from '../Resources/images/sanchit1.png'
function About()
{
    return <>
            <div id="info">
                <div className="about">
                    <div className="intro">
                        <h1>Hi,I'm Sanchit Jain.</h1>
                        <p>I am Front End Web Developer and I have knowledge in HTML, CSS, JS, REACT, Node.js and make user-friendly websites.</p>
                        <button className='cv'>Download CV</button>
                    </div>
                    <div className="mypic">
                            <img src={myPic}  alt="sasf" />
                    </div>
                </div>
                <div className="details">
                    <div className="personalinfo">
                        <h4>Personal Details</h4>
                        <span><p><b>Email:</b><a  style={{"textDecoration":"none" }} href="sanchitjain99@outlook.com" target="blank">sanchitjain99@outlook.com</a></p></span>
                        <span><p><b>Location:</b>Bina, M.P.</p></span>
                        <span><p><b>Langauge</b>English</p></span>
                        <span><p><b>Nationality:</b>India</p></span>
                    </div>
                    <div className="mydesc">
                        <h2>I'm a <span>Front End Web Developer</span></h2>
                        <p>My name is Sanchit Jain, I am from Bina, Madhya Pradesh. Passionate Front End Web Developer that loves to design elegant and vibrant web pages , I have learned Front End Web Development in Masai school. Skilled in problem- solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth..</p>
                        <p className='signature'>Sanchit</p>
                    </div>
                </div>                
            </div>
    </>
}
export default About