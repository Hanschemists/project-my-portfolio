import Link from "next/link";

//Components
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

//UI Components
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-6 xl:py-8 text-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Mew<span className="text-4xl font-semibold text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop Navbar & Hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <NavDesktop />

                    <Link href="/contact">
                        <Button>
                            Hire me
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    )
};

export default Header;  