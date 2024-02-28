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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut libero sit amet est sagittis scelerisque. Integer non nulla lectus. Phasellus auctor velit in lacus tincidunt tempor. Donec pulvinar libero a libero viverra, nec gravida lectus posuere. Nulla facilisi. Proin et ligula at elit vehicula fermentum. Sed quis nisl at libero pharetra sagittis. Aliquam erat volutpat.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "typescript", "react", "node", "html/css"],
    link: "",
  },

  {
    id: 2,
    name: "Pure Breathe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut libero sit amet est sagittis scelerisque. Integer non nulla lectus. Phasellus auctor velit in lacus tincidunt tempor. Donec pulvinar libero a libero viverra, nec gravida lectus posuere. Nulla facilisi. Proin et ligula at elit vehicula fermentum. Sed quis nisl at libero pharetra sagittis. Aliquam erat volutpat.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "typescript", "react", "node", "html/css"],
    link: "",
  },
  {
    id: 3,
    name: "Unaccompained Minor Assistance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut libero sit amet est sagittis scelerisque. Integer non nulla lectus. Phasellus auctor velit in lacus tincidunt tempor. Donec pulvinar libero a libero viverra, nec gravida lectus posuere. Nulla facilisi. Proin et ligula at elit vehicula fermentum. Sed quis nisl at libero pharetra sagittis. Aliquam erat volutpat.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "typescript", "react", "node", "html/css"],
    link: "",
  },
  {
    id: 4,
    name: "Wargames",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut libero sit amet est sagittis scelerisque. Integer non nulla lectus. Phasellus auctor velit in lacus tincidunt tempor. Donec pulvinar libero a libero viverra, nec gravida lectus posuere. Nulla facilisi. Proin et ligula at elit vehicula fermentum. Sed quis nisl at libero pharetra sagittis. Aliquam erat volutpat.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "typescript", "react", "node", "html/css"],
    link: "",
  },
  {
    id: 5,
    name: "Quotes App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut libero sit amet est sagittis scelerisque. Integer non nulla lectus. Phasellus auctor velit in lacus tincidunt tempor. Donec pulvinar libero a libero viverra, nec gravida lectus posuere. Nulla facilisi. Proin et ligula at elit vehicula fermentum. Sed quis nisl at libero pharetra sagittis. Aliquam erat volutpat.",
    image: "https://webfoundation.org/docs/2017/03/March-12-Letter.jpg",
    tech_stack: ["javascript", "python", "typescript", "react", "node", "html/css", "rest api"],
    link: "",
  },
];

export default portfolio_projects;
