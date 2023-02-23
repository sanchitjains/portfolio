function Contact({theme}) {


    return (
        <>

            <div id={"contact"+theme}>
                <h1>Contact me</h1>
                <div className={"conops"+theme}>
                    <div className={"reachbox"+theme}>
                        <span className="material-icons">social_distance</span>
                        <h4>LinkedIn</h4>
                        <p>You can contact me on LinkedIn</p>
                        <a href="https://www.linkedin.com/in/sanchit-jain-1279b0191/" target="blank">sanchit-jain</a>
                    </div>
                    <div className={"reachbox"+theme}>
                        <span className="material-icons">phone</span>
                        <h4>Phone</h4>
                        <p>Here is my Phone number</p>
                        <a href="tel:+919303831803" target="blank">+919303831803</a>
                    </div>
                    <div className={"reachbox"+theme}>
                        <span className="material-icons">email</span>
                        <h4>Email</h4>
                        <p>You can simply mail me just by clicking on my mail</p>
                        <a href="mailto:sanchitjain99@outlook.com" target="blank">sanchitjain99@outlook.com</a>
                    </div>
                    <div className={"reachbox"+theme}>
                        <span className="material-icons">room</span>
                        <h4>Location</h4>
                        <p>Bina,MP</p>
                        <a href="https://www.google.com/maps/place/Sarvodaya+Square+Bina/@24.1853621,78.1953873,15.86z/data=!4m15!1m8!3m7!1s0x39796eb07dbcf58d:0x606b920de7102bbc!2sBina,+Madhya+Pradesh+470113!3b1!8m2!3d24.1796159!4d78.1974447!16zL20vMGYwamZ3!3m5!1s0x39796d5af455332f:0x9fca3bf06b080679!8m2!3d24.1847071!4d78.2047703!16s%2Fg%2F11rrp9q0bq" target="blank">View on Map</a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact
