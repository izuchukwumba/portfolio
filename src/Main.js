import "./styles/Main.css";
import skillData from "./data/skillData.js"

export default function Main(){
         
    
    return( 
        <div className="main">
            <div className="text-container">
                <div className="text hi">Hi, I'm</div>
                <div className = "text izu">Izuchukwu&nbsp;&nbsp;Mba</div>
                <div className="text subtitle">Aspiring Software Engineer</div>
            </div>
                <div className="about-container">
                    <div className="about">
                        <div className="about-heading">About</div>
                        <div className = "about-text">I am a creative critical 
                        thinker who is pasionate about building highly 
                        functional and scalable web application architecture 
                        using a very diverse skillset that I have learnt 
                        both in the classroom and on my personal development 
                        journey. I strive to be excel at what I do using available 
                        resources and the beautiful gift of effective teamwork and 
                        collaboration.</div>
                </div>

                </div>
                <div className="skillset-container">

                    <div className = "skillset">
                        <div className = "skillset-heading">Skillset</div>
                        <div className="skill-all">

                                {skillData.map((item) => (
                            <div className="skill-total" key = {item.id}>
                                <div className="skill">{item.skill}</div>
                                <div className="skill-level">{item.skill_level}</div>
                            </div>
                                ))}
                            
                        </div>
                    </div>
                </div>

                    
        </div>
    ) ;
}