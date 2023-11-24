import "../styles/Footer.css";
import { useState } from "react";

const Footer: React.FC = () => {
  const [twitterIconStyle, setTwitterIconStyle] = useState({
    color: "gray",
    fontSize: "1.875rem",
    transition: "font-size 0.4s ease",
  });

  function handleMouseEnterTwitter() {
    setTwitterIconStyle({
      color: "rgba(0, 128, 255, 1)",
      fontSize: "2.5rem",
      transition: "font-size 0.4s ease",
    });
  }

  function handleMouseLeaveTwitter() {
    setTwitterIconStyle({
      color: "gray",
      fontSize: "1.875rem",
      transition: "font-size 0.4s ease",
    });
  }

  const [githubIconStyle, setGithubIconStyle] = useState({
    color: "gray",
    fontSize: "1.875rem",
    transition: "font-size 0.4s ease",
  });

  function handleMouseEnterGithub() {
    setGithubIconStyle({
      color: "#000000",
      fontSize: "2.5rem",
      transition: "font-size 0.4s ease",
    });
  }

  function handleMouseLeaveGithub() {
    setGithubIconStyle({
      color: "gray",
      fontSize: "1.875rem",
      transition: "font-size 0.4s ease",
    });
  }

  const [emailIconStyle, setEmailIconStyle] = useState({
    color: "gray",
    fontSize: "1.875rem",
    transition: "font-size 0.4s ease",
  });

  function handleMouseEnterEmail() {
    setEmailIconStyle({
      color: "#27AE60",
      fontSize: "2.5rem",
      transition: "font-size 0.4s ease",
    });
  }

  function handleMouseLeaveEmail() {
    setEmailIconStyle({
      color: "gray",
      fontSize: "1.875rem",
      transition: "font-size 0.4s ease",
    });
  }

  return (
    <div id="footer">
      <div id="contact-me">Contact me on:</div>
      <div className="contact-container">
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
      <div className="copyright">2023 &copy; IZUCHUKWU MBA</div>
    </div>
  );
};

export default Footer;
