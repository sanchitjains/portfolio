import GitHubCalendar from 'react-github-calendar';
export default function Github({theme}) {
    
    const src1="https://github-readme-streak-stats.herokuapp.com/?user=agramom&theme="+(theme=="day"?"buefy":"dracula");
    const src2="https://github-readme-stats.vercel.app/api?username=agramom&show_icons=true&locale=en&theme="+(theme=="day"?"buefy":"dracula");
    return (
        <>
            <div id={'github'+theme}>
            <h1>Days I Worked</h1>
                <div className={'gitcal'+theme}>
                    
                    <GitHubCalendar  style={clastyle} fontSize={10} theme={  {"level0" : "#C4EDDE" , "level1" : "#7AC7C4" ,"level2" : "#123C69"  , "level3" : "#384259", "level4" : "#F73859"  }    } blockMargin={5} blockRadius={10}   username="Agramom" />
                </div>
                <h1>Statistics</h1>
                <div className={'gitstats'+theme}>
                <img  src={src1} alt="agramom" />
                <img  src={src2} alt="agramom" />

                </div>
           
            </div>
           
        </>
    )
}
const clastyle={
    color:"navy",
    
}