import "../styles/Skills.css";
import Orange_Developer from "../images/orange_developer.png";

const Skills: React.FC = () => {
  return (
    <div id="Skills">
      <div id="skills-header-container">
        <img src={Orange_Developer} id="skills-header-img" />
        <div id="skills-header-text">
          I craft high quality software programs using these tools/skillset:
        </div>
      </div>
      <div id="skill-container">
        <div className="skill">javascript</div>
        <div className="skill">python</div>
        <div className="skill">typescript</div>
        <div className="skill">c++</div>
        <div className="skill">react.js</div>
        <div className="skill">node.js</div>
        <div className="skill">express.js</div>
        <div className="skill">mongodb</div>
        <div className="skill">html/css</div>
      </div>
    </div>
  );
};

export default Skills;
