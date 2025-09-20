import Dock from "@/components/Dock";
import FigmaSection from "@/components/FigmaSection";
import ProjectCard from "@/components/ProjectCard";
import TalkCard from "@/components/TalkCard";
import WorkCard from "@/components/WorkCard";

import AboutMe from "@/components/AboutMe";


export default function Home() {

  return (
    <div className="w-full font-sans items- justify-items-center h-full overflow-y-auto no-scrollbar">


      <div className="w-full px-8 lg:px-0 lg:max-w-xl flex flex-col gap-16">
        <div className="border h-16 w-full  lg:max-w-xl mt-4 px-8 rounded-lg  bg-[#212529] border-white/10 flex items-center text-white/50 text-sm ">
          title
        </div>
        <AboutMe />

        <FigmaSection name="Projects">
          <div className="w-full ">
            {/* Projects list */}
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </FigmaSection>

        <FigmaSection name="Experiences">
          <div className="w-full">
            {/* Works list */}
            <WorkCard />
            <WorkCard />
          </div>
        </FigmaSection>

        <FigmaSection name="Talks">
          <div className="w-full">
            {/* Talks list */}
            <TalkCard />
            <TalkCard />
          </div>
        </FigmaSection>
      </div>
      <Dock />
    </div>
  );
}
