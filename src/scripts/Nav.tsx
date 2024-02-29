import "../styles/Nav.css";
import { useState } from "react";
import Logo from "../images/code_typing_bro.png";

const Nav: React.FC = () => {
  const [modalClicked, setModalClicked] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Izuchukwu_Mba_resume.pdf";
    link.download = "Izuchukwu_Mba_resume.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setModalClicked((prev) => !prev);
  };
  return (
    <div className="nav-container" id="nav-id">
      <div className="nav">
        <div className="nav-logo">
          <a href="#nav-id">Izuchukwu Mba</a>
        </div>

        <div className="nav-texts">
          <div onClick={() => setModalClicked((prev) => !prev)}>Resume</div>
          <div>
            {" "}
            <a href="#Skills">Skills</a>
          </div>
          <div>
            <a href="#Portfolio">Projects</a>
          </div>
          <div>
            <a href="#Footer">Contact</a>
          </div>
        </div>
      </div>
      <div
        className="modal"
        style={
          modalClicked
            ? {
                animation: "slideFromTop",
                animationDuration: "1s",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                transform: "translateY(-100%)",
              }
            : {
                opacity: "0",
                visibility: "hidden",
              }
        }
      >
        <p>What do you prefer?</p>
        <i
          className="x-icon fa-regular fa-circle-xmark"
          onClick={() => {
            setModalClicked((prev) => !prev);
          }}
        ></i>

        <div className="modal-btns">
          <div onClick={handleDownload}>Download Resume</div>
          <div
            onClick={() => {
              window.open("/Izuchukwu_Mba_resume.pdf", "_blank");
              setModalClicked((prev) => !prev);
            }}
          >
            View Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
