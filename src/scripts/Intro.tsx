import "../styles/Intro.css";
import Developer from "../images/focused_developer.png";
import Taglines from "../data/intro_tagline";
const Main: React.FC = () => {
  return (
    <div className="intro">
      <div id="intro-container">
        <div>
          <div id="first-intro">
            Hello, friend. I’m Izuchukwu Mba, but you can call me
            <span id="izu"> IZU.</span>
          </div>
          <div id="second-intro">
            i am a{" "}
            <div id="tagline">
              <span>software engineer</span>
              <span>team player</span>
              <span>fullstack developer</span>
              <span>creative ideator</span>
              {/* <span>web developer</span>
              <span>critical thinker</span> */}
              <span>software engineer</span>
            </div>
            passionate about developing quality software applications.
          </div>
        </div>
        <img src={Developer} id="intro-pic"></img>
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
