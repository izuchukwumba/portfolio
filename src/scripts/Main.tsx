import "../styles/Main.css";
import Developer from "../images/focused_developer.png";
import Typewriter from "typewriter-effect";
const Main: React.FC = () => {
  return (
    <div className="main">
      <div id="intro-div">
        <div id="hi">Hi, I'm Izuchukwu Mba, but you can call me</div>
        <div id="izu">IZU</div>
        <div id="tagline">
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Web Developer",
                "Creative Mind",
                "Team Player",
                "Resilient Attitude",
                "Dedicated",
                "Innovative",
              ],
              autoStart: true,
              loop: true,
              delay: 70,
            }}
          />
        </div>
      </div>

      <section>
        <div>
          <img src={Developer} alt="focused developer" />
        </div>
        <div className="section-texts">
          {" "}
          <div id="mission">
            I am focused on becoming an industry-leading software engineer in the next 10 years.
          </div>
          <div id="description">
            I am passionate about building high-performance software applications using a very
            diverse skillset that I have learned on my personal software development journey. I
            utilize my creative mind and rich knowledge of the MERN tech stack and REST APIs to
            create high-performing end-to-end web applications. I strive to excel at all I do using
            every available dev resources and the beautiful gift of effective teamwork and
            collaboration.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
