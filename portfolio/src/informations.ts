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
    "I'm Rophen PADONOU. I love building intuitive products that bridge the gap between complex technology and everyday users. I enjoy working with AI systems, user interfaces, and thoughtful design solutions.",
  interests:
    "When I'm not coding, you'll usually find me playing BasketBall, or discovering new places and experiences.",
  workStatus:
    "Currently building AI tooling at Tekas Africa as a designer and engineer. Previously freelance developer and designer.",
};

export const projects: Project[] = [
  {
    name: "introcam",
    logo: "introcam.png",
    link: "https://introcam.pagy.site",
    description: "Record presentation video while reading script.",
  },
];

export const works: Work[] = [
  {
    company: "AEIG",
    role: "FullStack dev",
    description: "Worked on various web development projects, focusing on both frontend and backend tasks to deliver comprehensive solutions.",
    projects: ["Job matching and recruitment platform", "Company website redesign"],
    startDate: "Jan 2025",
    endDate: "Jul 2025",
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
