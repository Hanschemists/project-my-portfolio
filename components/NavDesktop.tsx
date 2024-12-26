"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const NavDesktop = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : "border-b-2 border-transparent"} capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>

                );
            })}
        </nav>
    );
};

export default NavDesktop;