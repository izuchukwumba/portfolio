interface PortfolioProjects {
  id: number;
  name: string;
  description: string;
  image: string;
  tech_stack: string[];
  link: string;
}

const portfolio_projects: PortfolioProjects[] = [
  {
    id: 1,
    name: "Luminate",
    description:
      "An AI-powered academic assistant app that turns text prompts into quizzes and powerpoint slides. Currently build this.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["python", "typescript", "react", "node.js"],
    link: "https://github.com/izuchukwumba/Luminate",
  },

  {
    id: 2,
    name: "Pure Breathe",
    description:
      "A web application assessing environmental health risk using carbon emission and Whoop watch data to predict users’ level of risk exposure",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "react", "node.js"],
    link: "https://pure-breathe.vercel.app/",
  },
  {
    id: 3,
    name: "Unaccompained Minor Assistance",
    description:
      "An end-to-end web application that assists unaccompanied minors traveling by air by ensuring their safety, and keeping the parents informed throughout the duration of the flight.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "html/css", "node.js", "socket.io"],
    link: "https://github.com/izuchukwumba/talladegaUMA",
  },
  {
    id: 4,
    name: "Wargames",
    description:
      "A recreation of the interactive action-based terminal game in the 1983 movies, <i>Wargames</i>.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["python", "rest api"],
    link: "https://github.com/izuchukwumba/War-Games",
  },
  {
    id: 5,
    name: "Portfolio",
    description:
      "My personal portfolio highlighting my personality, skills projects and contact information",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["typescript", "react", "html/css"],
    link: "https://portfolio-git-main-izuchukwumba.vercel.app/",
  },

  {
    id: 6,
    name: "Quotes App",
    description:
      "An web application that randomly generates quotes of famous people from all walks of life.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "html/css", "rest api"],
    link: "https://quote-app-nine.vercel.app/",
  },
];

export default portfolio_projects;
