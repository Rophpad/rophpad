import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full py-8 backdrop-blur bg-[#141a20]/80 sticky top-0 z-50 flex items-center justify-between px-8">
            <Link href="/" className="flex items-center justify-center">
                <Image
                    src="/profile_pic.jpeg"
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full size-10 object-cover cursor-pointer"
                />
            </Link>

            <button className="py-2 px-6 border border-white/20 rounded-lg hover:bg-white/5 transition-colors cursor-pointer text-sm">
                Get in touch
            </button>
        </header>
    );
}