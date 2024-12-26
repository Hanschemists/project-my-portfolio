"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//UI Components
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

//React Icons
import { TfiMenu } from "react-icons/tfi";

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

const NavMobile = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <TfiMenu className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent>
                <SheetHeader className="mt-10">
                    <SheetTitle className="text-white text-2xl">PortFolio<span className="text-accent">.</span></SheetTitle>
                    <SheetDescription>
                        Explore my portfolio to learn more about my work, skills, and the services I offer.
                    </SheetDescription>

                </SheetHeader>

                <nav className="flex flex-col gap-2 mt-10">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname ? "text-accent font-bold" : "text-white"} capitalize font-medium hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default NavMobile;


