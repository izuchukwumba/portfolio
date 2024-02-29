import "../styles/Portfolio.css";
import portfolio_projects from "../data/portfolio_projects";

const Portfolio: React.FC = () => {
  return (
    <div id="Portfolio">
      <div id="portfolio-header">Projects</div>
      <div id="portfolio-projects-container">
        {portfolio_projects.map((item) => (
          <div className="project-container" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="project-image"
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            />
            <div className="project-text">
              <div
                className="project-name"
                onClick={() => {
                  window.open(item.link, "_blank");
                }}
              >
                {item.name}
              </div>
              <div
                className="project-description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              >
                {/* {item.description} */}
              </div>
              <div className="tech-stack-container">
                {item.tech_stack.map((tech, index) => (
                  <div key={index} className="tech-stack-item">
                    <div
                      className="tech-stack-indicator"
                      style={{
                        backgroundColor:
                          tech === "javascript"
                            ? "yellow"
                            : tech === "python"
                            ? "blue"
                            : tech === "typescript"
                            ? "skyblue"
                            : tech === "html/css" || tech === "css" || tech === "tailwindcss"
                            ? "pink"
                            : tech === "react" || tech === "reactjs" || tech === "react.js"
                            ? "green"
                            : tech === "node" || tech === "nodejs" || tech === "node.js"
                            ? "orange"
                            : tech === "express"
                            ? "lemonchiffon"
                            : tech === "rest api"
                            ? "gold"
                            : "white",
                      }}
                    ></div>
                    <div className="tech-stack-used">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
