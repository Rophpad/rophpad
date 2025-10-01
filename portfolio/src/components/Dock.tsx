"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

const NAVIGATION_ITEMS: readonly {
    name: string;
    icon: string;
    altIcon?: string;
    route: string;
}[] = [
        { name: "Top", icon: "/top.svg", route: "#about-me" },
        { name: "Menu", icon: "/menu.svg", altIcon: "/close.svg", route: "" }
    ];

const MENU_LINKS = [
    // { href: "#about-me", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#works", label: "Works" },
    { href: "#articles", label: "Articles" },
    { href: "#contact", label: "Contact" }
] as const;

export default function Dock() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);


    return (
        <div className="w-full lg:max-w-2xl flex justify-center items-center sticky bottom-4">
            <div className="w-full flex justify-center items-center relative">
                <nav className="w-max h-max backdrop-blur bg-[#0b0b0b]/80 border border-white/10 rounded-full p-2 flex items-center justify-center space-x-4">
                    {NAVIGATION_ITEMS.map((item) => {
                        if (item.name === "Menu") {
                            return (
                                <MenuButton
                                    key={item.name}
                                    item={item}
                                    isOpen={isOpen}
                                    onClick={toggleMenu}
                                />
                            );
                        }
                        return (
                            <NavLink
                                key={item.name}
                                item={item}
                               
                            />
                        );
                    })}
                </nav>

                {isOpen && <DropdownMenu links={MENU_LINKS} />}
            </div>
        </div>
    );
}

interface NavItemProps {
    item: typeof NAVIGATION_ITEMS[number];
}

interface MenuButtonProps extends NavItemProps {
    isOpen: boolean;
    onClick: () => void;
}

function MenuButton({ item, isOpen, onClick }: MenuButtonProps) {
    const iconSrc = isOpen && item.altIcon ? item.altIcon : item.icon;

    return (
        <button
            className={` ${isOpen ? 'border border-white/5 bg-white/2' : ''} hover:border hover:border-white/5 hover:bg-white/2 rounded-full py-2 px-2 flex items-center justify-center space-x-2 cursor-pointer transition-colors`}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <Image
                src={iconSrc}
                alt=""
                width={16}
                height={16}
                className="size-4 rounded-full"
            />
            <span className="text-xs">{item.name}</span>
        </button>
    );
}

function NavLink({ item }: NavItemProps) {
    const linkClasses = `
        hover:border hover:border-white/5 hover:bg-white/2 
        rounded-full py-2 px-2 flex items-center justify-center space-x-2 
        cursor-pointer transition-colors
    `.trim();

    return (
        <Link href={item.route} className={linkClasses}>
            <Image
                src={item.icon}
                alt=""
                width={16}
                height={16}
                className="size-4 rounded-full"
            />
            <span className="text-xs">{item.name}</span>
        </Link>
    );
}

interface DropdownMenuProps {
    links: typeof MENU_LINKS;
}

function DropdownMenu({ links }: DropdownMenuProps) {
    return (
        <div className="absolute bottom-16 w-full mx-16 backdrop-blur bg-[#0b0b0b]/80 border border-white/10 rounded-2xl shadow-2xl z-10 overflow-hidden">
            <ul className="flex flex-col p-1 gap-0.5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="block px-4 py-2.5 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 ease-out"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}