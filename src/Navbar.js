import "./styles/NavBar.css"
import {useState} from "react"
import cuteDog from "./images/cute-dog.gif"

export default function Navbar(){


let [isShown, setIsShown] = useState(false)

let modalStyle = {
    opacity: isShown ? 1 : 0,
    zIndex: isShown ? 100 : -1,
    // display: isShown ? "block" : "none",
    transition: "opacity 0.7s ease",
    backgroundColor: "#27AE60",
    color:" #171717",
    width: "15.625rem",
    height: "4.0625rem",
    textAlign: "center",
    padding: "0.625rem",
    borderRadius:" 0.625rem",
    position: "absolute",
    right: "20%",
    top: "7%",
    cursor: "pointer",
}



    return (
        <div className = "nav-container">
            <div className = "nav">
                <div className = "nav-pic">
                <img src = {cuteDog} alt = "cute dog" width = "40px"/>
                </div>
                
                <div className="nav-texts">
                    <div className = "resume nav-item" onClick = {()=>window.alert("Resume is downloading...")}><a href = "/src/data/Resume_Izuchukwu_Mba.pdf">Resume</a></div>
                    <div className = "projects nav-item" onClick = {() => setIsShown(prevState => !prevState)}>Projects</div>
                    <div className = "contact nav-item"><a href = "#footer">Contact</a></div>
                </div>
            </div>
        
            <div className = "modal-projects modal" style = {modalStyle} onClick = {() => setIsShown(false)}>
                <span className = "modal-text">Coming soon...</span>
                <span className = "x">x</span>
                
            </div>
                



            
        </div>
    )
}