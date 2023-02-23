import htmllogo from '../Resources/images/html.png'
import csslogo from '../Resources/images/css.png'
import jslogo from '../Resources/images/js.png'
import reactlogo from '../Resources/images/react.png'
import reduxlogo from '../Resources/images/redux.png'
import nodelogo from '../Resources/images/node.png'
import gitlogo from '../Resources/images/github.png'
function Skills({theme})
{
    return<>
    <div id={"skills"+theme}>
        <h1>Technical Skills</h1>
        <div className={"tskills"+theme}>
            <div className={"tskill"+theme}>
                <img src={htmllogo} alt="" />
                <p>HTML</p>
            </div>
            <div className={"tskill"+theme}>
                <img src={csslogo} alt="" />
                <p>CSS</p>
            </div>
            <div className={"tskill"+theme}>
                <img src={jslogo} alt="" />
                <p>JavaScript</p>
            </div>
            <div className={"tskill"+theme}>
                <img src={gitlogo} alt="" />
                <p>GitHub</p>
            </div>
            <div className={"tskill"+theme}>
                <img src={reactlogo} alt="" />
                <p>REACT</p>
            </div>
            <div className={"tskill"+theme}>
                <img src={reduxlogo} alt="" />
                <p>REDUX</p>
            </div>
            <div className={"tskill"+theme}>
                <img src={nodelogo} alt="" />
                <p>Node.js</p>
            </div>
        </div>

    </div>
    </>
}
export default Skills