import "./styles/Main.css";
import techText from "./data/techText.js";
import { useState, useEffect } from "react";


export default function Main(){
    //   let [text, setText] = useState("");
    //   let [isTextFullySpelled, setIsTextFullySpelled] = useState(false);
    //     let targetText = ""
    //   useEffect(() => {

    //     let currentIndex = 0;
    
    //     const interval = setInterval(() => {
    //       if (currentIndex === targetText.length) {
    //         clearInterval(interval);
    //         setIsTextFullySpelled(true); // Set the flag to true when the text is fully spelled
    //       } else {
    //         setText(targetText.substring(0, currentIndex + 1));
    //         currentIndex++;
    //       }
    //     }, 100); // Adjust the interval as needed
    
    //     return () => clearInterval(interval);
    //   }, []);    
    
    return( 
        <div className="main">
            <div className="text-container">
                <div className="text hi">Hi, I'm</div>
                <div className = "text izu">Izuchukwu</div>
            </div>


            <div class = "regular-text">I build highly functional web application using:</div>
            
            <div className = "typewriter">
                {techText.map((item, index) => (<div key = {index}> {item}</div>))}
                
            </div>
        </div>
    ) ;
}