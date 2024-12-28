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
    description: "A journey through diverse roles in front-end and full-stack development, showcasing adaptability and a commitment to growth.",
    items: [
        {
            company: "Freelancer",
            position: "Front-End Developer",
            duration: "2022 - 2024",
        },
        {
            company: "Betagro Public Company Limited",
            position: "Full Stack Developer Intern",
            duration: "From June to December 2024",
        },
        {
            company: "Freelancer",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
    ],
};

//Education Data
const education = {
    icon: "",
    title: "My Education",
    description: "A journey through diverse roles in front-end and full-stack development, showcasing adaptability and a commitment to growth.",
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                {/* Title */}
                                <h3 className="text-4xl font-bold">{experience.title}</h3>

                                {/* Description */}
                                <p className="text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#1E1E1E] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    {/* Duration */}
                                                    <span className="text-accent">{item.duration}</span>

                                                    {/* Position */}
                                                    <h3 className="font-bold max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>

                                                    {/* Border */}
                                                    <div className="border-b border-white/20 w-full mt-2 mb-2"></div>

                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                                                        {/* Company */}
                                                        <p className="text-sm text-white/80">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                {/* Title */}
                                <h3 className="text-4xl font-bold">{education.title}</h3>

                                {/* Description */}
                                <p className="text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#1E1E1E] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    {/* Duration */}
                                                    <span className="text-accent">{item.duration}</span>

                                                    {/* Position */}
                                                    <h3 className="font-bold max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>

                                                    {/* Border */}
                                                    <div className="border-b border-white/20 w-full mt-2 mb-2"></div>

                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                                                        {/* Company */}
                                                        <p className="text-sm text-white/80">{item.insitution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            
                        </TabsContent>

                        <TabsContent value="about" className="w-full">
                            About Me
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default resume;