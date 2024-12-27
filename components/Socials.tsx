import Link from "next/link";
import path from "path";

//React Icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "",
    },
    {
        icon: <FaLinkedin />,
        path: "",
    },
    {
        icon: <FaInstagram />,
        path: "",
    }
];

const Socials = ({containerStyles, iconStyle}: {containerStyles: string, iconStyle: string}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyle}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;