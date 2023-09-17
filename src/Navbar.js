import "./styles/NavBar.css"
import {useState} from "react"

export default function Navbar(){

let [isShown, setIsShown] = useState(false)

    return (
        <div className = "nav-container">
            <div className = "nav">
                <div className = "nav-pic">
                <img src = "./images/cute-dog.gif" alt = "cute dog"/>
                </div>
                
                <div className="nav-texts">
                    <div className = "works nav-item"><a target = "_blank" href="https://github.com/izuchukwumba">Github</a></div>
                    <div className = "projects nav-item" onClick = {() => setIsShown(prevState => !prevState)}>Projects</div>
                    <div className = "contact nav-item">Contact</div>
                </div>
            </div>
            {isShown && (
            <div className = "modal-projects modal" onClick = {() => setIsShown(false)}>
                <span className = "modal-text">Coming soon...</span>
                <span className = "x">x</span>
                
            </div>
                )}



            
        </div>
    )
}