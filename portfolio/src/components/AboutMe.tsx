import Image from "next/image";
import FigmaSection from "./FigmaSection";
import AudioReader from "./AudioReader";
import Hoverable from "./Hoverable";

export default function AboutMe() {
    return (
        <FigmaSection name="About Me">


            {/* <div className="w-full flex flex-col items-center text-center gap-8 relative overflow-hidden bg-gradient-to-br from-white/[0.02] via-transparent to-emerald-500/[0.02] p-8 rounded-2xl border border-white/5">
                <div className="absolute inset-0 opacity-[0.015] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <OldCode />
            </div> */}

            <div className=" w-full flex flex-col items-center text-center gap-8 bg-white/[0.02] p-8 rounded-2xl border border-white/10 shadow-2xl">

                <OldCode />
            </div>
        </FigmaSection>
    );
}

const OldCode = () => {
    return (
        <div className="w-full flex flex-col items-center text-center gap-6 ">
            {/* Profile Image with Status */}
            <div className="relative">
                <Hoverable>
                    <div className="w-20 h-20 rounded-full border-2 border-white/10 overflow-hidden">
                        <Image
                            src="/pic.png"
                            alt="Profile Picture"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer "
                        />
                    </div>
                </Hoverable>


            </div>

            {/* Main Info */}
            <div className="space-y-3">
                <div className="flex flex-col items-center gap-2">
                    <Hoverable>
                        <h1 className="text-xl font-bold w-max">Roph PAD</h1>
                    </Hoverable>
                    <Hoverable>
                        <p className="text-sm text-white/60">Software Engineer & Designer</p>
                    </Hoverable>
                </div>

                <Hoverable>
                    <p className="text-xs text-white/50 max-w-xs leading-relaxed">
                        Passionate about building delightful products that solve complex problems.
                        Currently crafting AI tools at Tekas.
                    </p>
                </Hoverable>

            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/80 hover:shadow-lg focus:outline-none">
                    Get Resume
                </button>
                <div className="flex items-center gap-2 text-white/40">
                    <AudioReader />
                    <span className="text-[10px]">Listen</span>
                </div>
            </div>

            {/* Location Tag */}
            <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span className="text-[10px] text-white/50">Benin, West Africa</span>
            </div>
        </div>
    );
}