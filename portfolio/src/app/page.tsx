import Dock from "@/components/Dock";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import SocialIcon from "@/components/SocialIcon";
import TalkCard from "@/components/TalkCard";
import WorkCard from "@/components/WorkCard";
import Image from "next/image";

export default function Home() {
  const socialIconStyle = "p-2 size-10 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer";
  const socialNetworks = [
    { name: "github", link: "https://github.com/Rophpad" },
    { name: "x", link: "https://github.com/Rophpad" },
    { name: "telegram", link: "https://github.com/Rophpad" },
    { name: "linkedIn", link: "https://github.com/Rophpad" },
    { name: "mail", link: "https://github.com/Rophpad" },
    { name: "discord", link: "https://github.com/Rophpad" },
  ];
  return (
    <div className="w-full font-sans grid grid-rows-[20px_1fr_20px] items- justify-items-center h-full py-8 px-16">
      <Header />
      <div className="mt-16 flex flex-col gap-16">
        <div className="w-full max-w-3xl h- flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-white/10 py-4 flex items-center gap-4">
            {/* <Image
              src="/profile_pic.jpeg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full size-10 object-cover cursor-pointer"
            /> */}
            <h1 className="text-3xl font-medium">Hi, I'm Roph PAD</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2" />
            </svg>
          </div>
          <div className="w-full flex flex-col gap-6">
            <p>
              {`I'm Rophen PADONOU. I love building products that make complex problems simple and delightful. I enjoy working with data, maps, and clean interfaces.`}
            </p>
            <p >
             {`On weekends, you'll usually find me playing basketball, or exploring the world.`}
            </p>
            <p>
              {`Currently building AI tooling and SDKs at Composio as senior software engineer. Previously lead product and design at Locale.ai`}
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

          <div className="w-full">
            {/* Projects list */}
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
