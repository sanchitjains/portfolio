import amazon from '../Resources/images/amazon.png'
import pl from '../Resources/images/ps.png'
import zoomcar from '../Resources/images/zoomcar.png'
import zostel from '../Resources/images/zostel.png'

 function Projects({theme}) {
    const projects = [

        {
            id: 4,
            title: 'Zostel Clone',
            img: zostel,
            desc: 'The best online Hostel Booking in India. Zostel is an online Booking platform for over 50+ Lodging in India.',
            worked: 'A collaborative project, built in 4 days by a team of 5 developers.',
            githubLink: 'https://github.com/rachnarajaka040/Zostel.com_clone',
            deployedLink: 'https://sastazostel.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux','JSON']
        },
        // {
        //     id: 5,
        //     title: 'Weather App',
        //     img: Weather,
        //     desc: 'Weather App has local and international weather forecasts from the most accurate weather forecasting technology featuring up to the weekly weather reports.',
        //     worked: 'This is a individual project which is only created by me in 1 day.',
        //     githubLink: 'https://github.com/MoHitksS/weather-app',
        //     deployedLink: 'https://weather-app-ind.netlify.app/',
        //     tags: ['HTML', 'CSS', 'Javascript', 'React', 'Chakra UI']
        // },
        {
            id: 3,
            title: 'Amazon Clone',
            img: amazon,
            desc: 'Amazon.com is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
            worked: 'A collaborative project, built in 4 days by a team of 5 developers.',
            githubLink: 'https://github.com/Agramom/Amazon_constweek2',
            deployedLink: 'https://grand-marzipan-0bdba6.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript', 'JSON']
        },
        
        {
            id: 2,
            title: 'Pluralsight Clone',
            img: pl,
            desc: 'This is a clone of Pluralsight Website, a online education company and creative professionals through its website.',
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
            githubLink: 'https://github.com/Akshaypareek01/pluralsight',
            deployedLink: 'https://pluralsightclonee.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 1,
            title: 'ZoomCar',
            img: zoomcar,
            desc: "India's largest self-drive car-sharing marketplace of car sharing platform Zoomcar, which has the functionality of booking a car in a city of your choice.",
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
            githubLink: 'https://github.com/abhiraj68/Zoomcar',
            deployedLink: 'https://stately-sorbet-a949a7.netlify.app/index.html',
            tags: ['HTML', 'CSS', 'Javascript']
        }
    ]

    return (
        <>
            <div id={'projects'+theme} >
            <h1 className={'phead'+theme}>Projects</h1>
            <div className={'projectsContainer'+theme}>
                {projects.map((ele, index) => (
                    <div key={index} className={"box"+theme}>
                        <div className={'imgBox'+theme}>
                            <img src={ele.img} alt={ele.title} width='100%' />
                        </div>
                        <div className={'ContentBox'+theme}>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className={'tagsBox'+theme}>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className={'linkSection'+theme}>
                                {ele.githubLink && <a href={ele.githubLink} target='_blank' rel='noreferrer'><button>Github</button></a>}
                                <a href={ele.deployedLink} target='_blank' rel='noreferrer'><button>Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
        </>
    )
}
export default Projects;