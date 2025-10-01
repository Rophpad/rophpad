import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full py-2 lg:py-3 backdrop-blur bg-[#0b0b0b]/80 sticky top-0 z-50 flex items-center justify-center">
            <div className="px-8 lg:px-0 w-2xl flex items-center justify-between ">
                <Link href="/" className="flex items-center justify-center">
                    <Image
                        src="/logo.png"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className=" size-10 object-cover cursor-pointer"
                    />
                    {/* <span className="text-xl font-medium">ROPH PAD</span> */}
                </Link>
                <button className="py-2 px-6 border border-white/20 rounded-lg hover:bg-white/5 transition-colors cursor-pointer text-xs">
                    Get in touch
                </button>
            </div>
        </header>
    );
}