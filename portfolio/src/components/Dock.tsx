"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dock() {
    const navigationItems = [
        { name: "Home", icon: "/globe.svg", route: "/" },
        { name: "Others", icon: "/file.svg", route: "/others" }
    ]

    const currentRoute = usePathname();
    return (
        <nav className="w-max h-max bg-[#141a20]/80 border border-white/10 sticky bottom-4 rounded-full p-2 flex items-center justify-center space-x-4">
            {navigationItems.map((item, index) => {
                return (
                    <Link key={index} href={item.route} className={`${currentRoute === item.route ? 'border border-white/10 bg-white/5' : ''} hover:border hover:border-white/5 hover:bg-white/2 rounded-full py-2 px-4 flex items-center justify-center space-x-3 cursor-pointer`}>
                        <Image
                            src={item.icon}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="size-6 bg-white/50 rounded-full"
                        />
                        <p className="text-sm">{item.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}