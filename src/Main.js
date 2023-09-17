import "./styles/Main.css";
import js0 from "./images/java-script-logo.png"
import jsImage from "./images/js_logo.png";
import jsImage2 from "./images/js-logo2.png";
import MongoDB from "./images/MongoDB_logo.png";
import NodeJS from "./images/nodejs_logo.png"
import NodeJS2 from "./images/nodejs.png"
import ReactLogo from "./images/react-logo.png"
import Typescript from "./images/typescript.png"

export default function Main(){

    return( 
        <div className="main">
            <div className="text-container">
                <div className="text hi">Hi, I'm</div>
                <div className = "text izu">Izuchukwu</div>
            </div>


            <div class = "regular-text">I build highly functional web application using:</div>
            <div className = "tech-logo-container">
                <img className = "tech-logo" src = {js0} alt = "js"/>
                <img className = "tech-logo" src = {jsImage} alt = "js"/>
                <img className = "tech-logo" src = {jsImage2} alt = "js"/>
                <img className = "tech-logo" src = {MongoDB} alt = "mongo"/>
                <img className = "tech-logo" src = {NodeJS} alt = "node"/>
                <img className = "tech-logo" src = {NodeJS2} alt = "node"/>
                <img className = "tech-logo" src = {ReactLogo} alt = "react"/>
                <img className = "tech-logo" src = {Typescript} alt = "type"/>
            </div>
            
            
        </div>
    )
}