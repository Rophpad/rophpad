import AudioReader from "@/components/AudioReader";
import ProjectCard from "@/components/ProjectCard";
import SocialIcon from "@/components/SocialIcon";
import TalkCard from "@/components/TalkCard";
import WorkCard from "@/components/WorkCard";
// import Image from "next/image";

export default function Home() {
  const socialIconStyle = "p-2 size-10 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer";
  const socialNetworks = [
    { name: "github", link: "https://github.com/Rophpad" },
    // { name: "x", link: "https://github.com/Rophpad" },
    // { name: "telegram", link: "https://github.com/Rophpad" },
    { name: "linkedIn", link: "https://github.com/Rophpad" },
    { name: "mail", link: "https://github.com/Rophpad" },
    { name: "discord", link: "https://github.com/Rophpad" },
  ];
  return (
    <div className="w-full font-sans items- justify-items-center h-full py- px-">
      <div className="w-full px-8 lg:px-0 lg:max-w-2xl mt-8 flex flex-col gap-16">
        <div className="w-full h- flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-white/10 py-4 flex items-center gap-4">
            {/* <Image
              src="/profile_pic.jpeg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full size-10 object-cover cursor-pointer"
            /> */}
            <h1 className="text-2xl font-medium">{`Roph PAD`}</h1>
            <AudioReader />
          </div>
          <div className="w-full flex flex-col gap-6">
            <p>
              {`I'm [Your Name]. I love building intuitive products that bridge the gap between complex technology and everyday users. I enjoy working with AI systems, user interfaces, and thoughtful design solutions.`}
            </p>
            <p>
              {`When I'm not coding, you'll usually find me [your hobby/interest], or discovering new places and experiences.`}
            </p>
            <p>
              {`Currently building AI tooling at Tekas Africa as a designer and engineer. Previously [your previous role/company if applicable].`}
            </p>
          </div>
          <div className="w-full flex gap-4">
            {
              socialNetworks.map((socialNetwork, index) => {
                return (
                  <SocialIcon key={index} name={socialNetwork.name} link={socialNetwork.link} style={socialIconStyle} />

                )
              })
            }
          </div>
        </div>

        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium">Projects</h2>
          </div>

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
        </div>

        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium">Works</h2>
          </div>

          <div className="w-full">
            {/* Works list */}
            <WorkCard />
            <WorkCard />
          </div>
        </div>


        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium">Talks</h2>
          </div>

          <div className="w-full">
            {/* Talks list */}
            <TalkCard />
            <TalkCard />
          </div>
        </div>
      </div>
    </div>
  );
}
