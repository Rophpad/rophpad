export interface Work {
  company: string;
  role: string;
  description: string;
  projects?: { description: string; link: string }[];
  startDate: string;
  endDate: string;
}