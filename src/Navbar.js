import "./styles/NavBar.css"
import {useState} from "react"
import cuteDog from "./images/cute-dog.gif"

export default function Navbar(){

let [isShown, setIsShown] = useState(false)

    return (
        <div className = "nav-container">
            <div className = "nav">
                <div className = "nav-pic">
                <img src = {cuteDog} alt = "cute dog" width = "40px"/>
                </div>
                
                <div className="nav-texts">
                    <div className = "resume nav-item">Resume</div>
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