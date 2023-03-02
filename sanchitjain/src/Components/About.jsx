import myPic from '../Resources/images/sanchithd2.png'
import mypic2 from '../Resources/images/sanchithd2.png'
function About({theme})
{
    return <>
            <div id={"info"+theme}>
                <div className={"about"+theme}>
                    <div className={"intro"+theme}>
                        <h1>Hi,I'm Sanchit Jain.</h1>
                        <p>I am Front End Web Developer and I have knowledge in HTML, CSS, JS, REACT, Node.js and make user-friendly websites.</p>
                       <a href="https://drive.google.com/uc?export=download&id=1i1Jy0zFz7yJUVq2ezXENW9Lmu-bYFcvH"><button className={'cv'+theme}>Download CV</button></a> 
                    </div>
                    <div className={"mypic"+theme}>
                            <img width="192" height="256" src={(theme=='day')?myPic:mypic2}  alt="sasf" />
                    </div>
                </div>
                <div className={"details"+theme}>
                    <div className={"personalinfo"+theme}>
                        <h4>Personal Details</h4>
                        <span><p><b>Email:</b><a className={"infoemail"+theme} href="emailto:sanchitjain99@outlook.com" target="blank">sanchitjain99@outlook.com</a></p></span>
                        <span><p><b>Location:</b>Bina, M.P.</p></span>
                        <span><p><b>Langauge</b>English</p></span>
                        <span><p><b>Nationality:</b>India</p></span>
                    </div>
                    <div className={"mydesc"+theme}>
                        <h2>I'm a <span>Front End Web Developer</span></h2>
                        <p>My name is Sanchit Jain, I am from Bina, Madhya Pradesh. Passionate Front End Web Developer that loves to design elegant and vibrant web pages , I have learned Front End Web Development in Masai school. Skilled in problem- solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth..</p>
                        <p className={'signature'+theme}>Sanchit</p>
                    </div>
                </div>                
            </div>
    </>
}
export default About