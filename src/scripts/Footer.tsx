import "../styles/Footer.css";
import { useState } from "react";

const Footer: React.FC = () => {
  const [endContactText, setEndContactText] = useState("");

  return (
    <div id="Footer">
      {/* <div id="contact-me">Contact me on:</div>
      <div className="1contact-container">
        <div className="contact-footer twitter">
          <a target="_blank" href="https://twitter.com/the_izuchukwu">
            <i
              className="fa-brands fa-twitter"
              style={twitterIconStyle}
              onMouseEnter={handleMouseEnterTwitter}
              onMouseLeave={handleMouseLeaveTwitter}
            ></i>
          </a>
        </div>

        <div className="contact-footer github">
          <a target="_blank" href="https://github.com/izuchukwumba">
            <i
              className="fa-brands fa-github"
              style={githubIconStyle}
              onMouseEnter={handleMouseEnterGithub}
              onMouseLeave={handleMouseLeaveGithub}
            ></i>
          </a>
        </div>

        <div className="contact-footer email">
          <a href="mailto:izuchukwumba100@gmail.com">
            <i
              className="fa-solid fa-envelope"
              style={emailIconStyle}
              onMouseEnter={handleMouseEnterEmail}
              onMouseLeave={handleMouseLeaveEmail}
            ></i>
          </a>
        </div>
      </div>
      <div className="1copyright">2023 &copy; IZUCHUKWU MBA</div> */}
      <div id="contact-container">
        <div id="lets-talk-container">
          <div id="lets-talk">Let's Talk</div>
        </div>
        <div id="contact-section">
          <div id="contact-instruction">
            DO YOU HAVE ANY QUESTIONS, IDEAS, OR PROJECTS IN MIND? IF YOU WANT TO COLLABORATE OR
            WORK TOGETHER ON SOMETHING, FEEL FREE TO GET IN TOUCH:
          </div>
          <div id="social-networks">
            <i
              className="fa-solid fa-envelope social email"
              onMouseEnter={() => setEndContactText("email")}
              onMouseLeave={() => setEndContactText("")}
              onClick={() => (window.location.href = "mailto:izuchukwumba100@gmail.com")}
            ></i>
            <i
              className="fa-brands fa-github social github"
              onMouseEnter={() => setEndContactText("github")}
              onMouseLeave={() => setEndContactText("")}
              onClick={() => (window.location.href = "https://github.com/izuchukwumba")}
            ></i>
            <i
              className="fa-brands fa-x-twitter social twitter"
              onMouseEnter={() => setEndContactText("twitter")}
              onMouseLeave={() => setEndContactText("")}
              onClick={() => (window.location.href = "https://twitter.com/the_izuchukwu")}
            ></i>
            <i
              className="fa-brands fa-linkedin social linkedin"
              onMouseEnter={() => setEndContactText("linkedin")}
              onMouseLeave={() => setEndContactText("")}
              onClick={() => (window.location.href = "https://www.linkedin.com/in/bartholomew-mba")}
            ></i>
          </div>
          <div id="contact-end-text">
            {endContactText === "email"
              ? "Shoot me an email"
              : endContactText === "github"
              ? "Check out my Github profile"
              : endContactText === "twitter"
              ? "Follow me on Twitter"
              : endContactText === "linkedin"
              ? "Connect with me on Linkedin"
              : "I look forward to speaking to you!"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
