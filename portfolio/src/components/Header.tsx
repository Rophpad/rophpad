import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full px-8 py-6">
            <Link href="/" className="group flex items-center gap-3 hover:opacity-80 transition-all duration-200 border border-white/20 p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:border-white/30">
                <div className="relative">
                    <Image
                        src="/pic.png"
                        alt="Profile Picture"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-white font-medium text-sm leading-tight">
                        {`Roph's Website`}
                    </h1>
                    <span className="text-white/50 text-xs">
                        Portfolio 
                    </span>
                </div>
            </Link>
        </header>
    );
}