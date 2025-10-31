import { Article } from "./types/Article";
import { Project } from "./types/Project";
import { Work } from "./types/Work";

export const aboutme: {
  username: string;
  profile: string;
  interests: string;
  workStatus: string;
} = {
  username: "Roph PAD",
  profile:
    "I'm Rophen PADONOU. I love solving everyday problems using my tech skills, and if it's related to education or finance, I'm more dedicated.",
  interests:
    "When I'm not hitting my keyboard, you'll usually find me playing BasketBall, or discovering new places and experiences.",
  workStatus:
    "Currently I'm building justapply, a tool to help devs easily apply for jobs. Previously, I have worked as a developer and designer.",
};

export const projects: Project[] = [
  {
    name: "introcam",
    logo: "introcam.png",
    link: "https://introcam.pagy.site",
    description: "Record presentation video while reading script.",
  },
  {
    name: "justapply",
    logo: "justapply.png",
    link: "https://justapply-at.vercel.app",
    description: "A tool to help developers easily apply for jobs.",
  },
];

export const works: Work[] = [
  {
    company: "AEIG",
    role: "FullStack dev",
    description:
      "Worked on various web development projects, focusing on both frontend and backend tasks to deliver comprehensive solutions.",
    projects: [
      { description: "Job matching and recruitment platform", link: "" },
      { description: "Company website redesign", link: "" },
    ],
    startDate: "Jan 2025",
    endDate: "Jul 2025",
  },
  {
    company: "Freelance",
    role: "Developer",
    description:
      "Worked on various web development projects, focusing on both frontend and backend tasks to deliver comprehensive solutions.",
    projects: [
      {
        description: "Polling platform",
        link: "https://pollapp-zeta.vercel.app/",
      },
      {
        description: "Video creation web app",
        link: "https://easyvideo.vercel.app/",
      },
    ],
    startDate: "2024",
    endDate: "now",
  },
  {
    company: "Freelance",
    role: "Designer",
    description:
      "Worked on various web design projects.",
    projects: [
      {
        description: "Notion page of my design works",
        link: "https://www.notion.so/my-design-works-2494347db4b380ae80b6d493b08e8e49",
      },
    ],
    startDate: "2020",
    endDate: "now",
  },
];

export const articles: Article[] = [
  {
    title: "What happens when typing www.google.com ?",
    field: "Web",
    platform: "Medium",
    date: "21 June 2022",
    link: "https://www.medium.com",
  },
];

export const socialNetworks: { name: string; link: string }[] = [
  { name: "github", link: "https://github.com/Rophpad" },
  // { name: "x", link: "https://github.com/Rophpad" },
  // { name: "telegram", link: "https://github.com/Rophpad" },
  { name: "linkedIn", link: "https://github.com/Rophpad" },
  { name: "mail", link: "https://github.com/Rophpad" },
  { name: "discord", link: "https://github.com/Rophpad" },
];
