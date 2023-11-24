import "./styles/Footer.css";
import { useState } from "react";

export default function Footer() {
  const [twitterIconStyle, setTwitterIconStyle] = useState({
    color: "gray",
    fontSize: "30px",
    transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  });

  function handleMouseEnterTwitter() {
    setTwitterIconStyle({
      color: "#27AE60",
      fontSize: "40px",
      transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    });
  }

  function handleMouseLeaveTwitter() {
    setTwitterIconStyle({
      color: "gray",
      fontSize: "30px",
      transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    });
  }

  const [githubIconStyle, setGithubIconStyle] = useState({
    color: "gray",
    fontSize: "30px",
    transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  });

  function handleMouseEnterGithub() {
    setGithubIconStyle({
      color: "#27AE60",
      fontSize: "40px",
      transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    });
  }

  function handleMouseLeaveGithub() {
    setGithubIconStyle({
      color: "gray",
      fontSize: "30px",
      transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    });
  }

  const [emailIconStyle, setEmailIconStyle] = useState({
    color: "gray",
    fontSize: "30px",
    transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  });

  function handleMouseEnterEmail() {
    setEmailIconStyle({
      color: "#27AE60",
      fontSize: "40px",
      transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    });
  }

  function handleMouseLeaveEmail() {
    setEmailIconStyle({
      color: "gray",
      fontSize: "30px",
      transition: "font-size 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    });
  }

  return (
    <div id="footer">
      <div>Contact me on:</div>
      <div className="contact-container">
        <div className="contact-footer twitter">
          <a target="_blank" href="https://twitter.com/the-izuchukwu">
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
      <div className="copyright">2023 &copy; IZUCHUKWU MBA</div>
    </div>
  );
}
