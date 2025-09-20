import SocialIcon from "./SocialIcon";
import Widget from "./Widget";

export default function RightSideBar() {
    const socialIconStyle = "p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer size- fill-white";
    const socialNetworks = [
        { name: "github", link: "https://github.com/Rophpad" },
        { name: "x", link: "https://github.com/Rophpad" },
        // { name: "telegram", link: "https://github.com/Rophpad" },
        { name: "linkedIn", link: "https://github.com/Rophpad" },
        // { name: "mail", link: "https://github.com/Rophpad" },
        { name: "discord", link: "https://github.com/Rophpad" },
    ];

    return (
        <div className="h-full w-1/3  hidden p-4 lg:flex flex-col gap-4 items-center justify-">
            <Widget>
                <div className="w-full flex flex-col items-center justify-center gap-4 px-8 ">
                    <div className="h-[196px] w-full border border-white/10 rounded-lg">

                    </div>
                    <textarea className="h- w-full rounded-lg outline-none p-2 border border-white/10 text-xs">

                    </textarea>
                    <button className="w-full px-4 py-2 bg-white/10 text- text-xs font-medium rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:shadow-lg focus:outline-none">
                        Let ur msg
                    </button>
                </div>
            </Widget>

            <Widget>
                <div className="w-full flex flex-col items-center justify-center gap-4 px-8 ">
                    <div className="w-full flex items-center justify-between">
                        {
                            socialNetworks.map((socialNetwork, index) => {
                                return (
                                    <SocialIcon key={index} name={socialNetwork.name} link={socialNetwork.link} style={socialIconStyle} />
                                )
                            })
                        }
                    </div>
                    <button className="group w-full py-3 px-4 border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-200 cursor-pointer text-xs text-white/80 hover:text-white flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Get Resume
                    </button>
                </div>
            </Widget>

        </div>
    )
};