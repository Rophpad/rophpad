import Dock from "@/components/Dock";
import FigmaSection from "@/components/FigmaSection";
import ProjectCard from "@/components/ProjectCard";
// import SocialIcon from "@/components/SocialIcon";
import TalkCard from "@/components/TalkCard";
import WorkCard from "@/components/WorkCard";

import AboutMe from "@/components/AboutMe";


export default function Home() {
  // const socialIconStyle = "p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer size-10 fill-white";
  // const socialNetworks = [
  //   { name: "github", link: "https://github.com/Rophpad" },
  //   // { name: "x", link: "https://github.com/Rophpad" },
  //   // { name: "telegram", link: "https://github.com/Rophpad" },
  //   { name: "linkedIn", link: "https://github.com/Rophpad" },
  //   { name: "mail", link: "https://github.com/Rophpad" },
  //   { name: "discord", link: "https://github.com/Rophpad" },
  // ];
  return (
    <div className="w-full font-sans items- justify-items-center h-full overflow-y-auto no-scrollbar ">
      {/* <Header /> */}
      <div className="w-full px-8 lg:px-0 lg:max-w-xl mt-8 flex flex-col gap-16">
        {/* <FigmaSection name="About me">
          <Element isClickable={false}>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="rounded-full size-10 object-cover cursor-pointer border"
                />
                <span>
                  <h1 className="text-base font-medium">{`Roph PAD`}</h1>
                  <p className="text-xs">Software engineer & designer</p>
                </span>
              </div>
              <AudioReader />
            </div>
          </Element>

          <Element isClickable={false}>
            <div className="w-full flex flex-col gap-3 text-[14px] text-justify">
              <p className="">
                {`I'm Rophen PADONOU. I love building products that make complex problems simple and delightful. I enjoy working with data, maps, and clean interfaces.
                `}
              </p>
              <p >
                {`On weekends, you'll usually find me playing basketball, or exploring the world.`}
              </p>
              <p className="text-justify">
                {`Currently building AI tooling and SDKs at Composio as senior software engineer. Previously lead product and design at Locale.ai`}
              </p>
            </div>
          </Element>

          <Element isClickable={false}>
            <div className="w-full flex gap-4">
              {
                socialNetworks.map((socialNetwork, index) => {
                  return (
                    <SocialIcon key={index} name={socialNetwork.name} link={socialNetwork.link} style={socialIconStyle} />
                  )
                })
              }
            </div>
          </Element>

        </FigmaSection> */}

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

        <FigmaSection name="Expériences">
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
