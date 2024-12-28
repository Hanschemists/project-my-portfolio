"use client";

import { motion } from "framer-motion";

//UI Components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

//React Icons
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

//About Data
const about = {
    title: "About Me",
    description: "I excel at crafting elegant digital experiences and I'm proficient in various programming languages and frameworks.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Korrawit Konkaew",
        },
        {
            fieldName: "Phone",
            fieldValue: "[+66] 906 633 109",
        },
        {
            fieldName: "Experience",
            fieldValue: "1 Year",
        },
        {
            fieldName: "Skype",
            fieldValue: "Hanschemists.01",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Thai",
        },
        {
            fieldName: "Email",
            fieldValue: "Hanschemists@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Language",
            fieldValue: "English, Thai",
        },
    ],
};

//Experience Data
const experience = {
    icon: "",
    title: "My Experience",
    description: "My professional experience spans diverse roles in web development, from freelancing as a Front-End Developer to interning as a Full Stack Developer at Betagro Public Company Limited. These opportunities have allowed me to enhance my technical expertise, collaborate on various projects, and deliver solutions that meet real-world needs. Currently, I continue to grow as a Full Stack Developer, leveraging my skills to create impactful and innovative web applications.",
    items: [
        {
            compoany: "Freelancer",
            position: "Front-End Developer",
            duration: "2022 - 2024",
        },
        {
            compoany: "Betagro Public Company Limited",
            position: "Full Stack Developer Intern",
            duration: "From June to December 2024",
        },
        {
            compoany: "Freelancer",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
    ],
};

//Education Data
const education = {
    icon: "",
    title: "My Education",
    description: "My professional experience spans diverse roles in web development, from freelancing as a Front-End Developer to interning as a Full Stack Developer at Betagro Public Company Limited. These opportunities have allowed me to enhance my technical expertise, collaborate on various projects, and deliver solutions that meet real-world needs. Currently, I continue to grow as a Full Stack Developer, leveraging my skills to create impactful and innovative web applications.",
    items: [
        {
            insitution: "Thammasat University",
            degree: "Bachelor of Science in Computer Science",
            duration: "2021 - 2024",
        },
        {
            insitution: "Codecademy",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
        },
    ],
};

//Skills Data
const skills = {
    title: "My Skills",
    description: "My professional experience spans diverse roles in web development, from freelancing as a Front-End Developer to interning as a Full Stack Developer at Betagro Public Company Limited. These opportunities have allowed me to enhance my technical expertise, collaborate on various projects, and deliver solutions that meet real-world needs. Currently, I continue to grow as a Full Stack Developer, leveraging my skills to create impactful and innovative web applications.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ],
};

const resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList
                        className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4"
                    >
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            Experience
                        </TabsContent> 
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default resume;