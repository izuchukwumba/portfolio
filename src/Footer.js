export default function Footer(){
    
    return(
        <div className = "footer">
            <div className="contact twitter"><i className="fa-brands fa-twitter" style={{color: "gray", fontSize:"30px"}}></i></div>
            <div className="contact github">
                <a target = "_blank" href="https://github.com/izuchukwumba">
                    <i className="fa-brands fa-github" style={{color: "gray", fontSize:"30px"}}></i>
                </a>
            </div>
            <div className="contact email"><i className="fa-solid fa-envelope" style={{color: "gray", fontSize:"30px"}}></i></div>
        </div>
    )
}