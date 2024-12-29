"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// React Icons
import { BsArrowDownRight } from "react-icons/bs";

const Items = [
    {
        num: "01",
        title: "Web Development",
        description: "I offer services ranging from simple static sites to advanced web applications.",
        path: "/contact"
    },
    {
        num: "02",
        title: "UX/UI Design",
        description: "I design interfaces that are intuitive, functional, and visually appealing.",
        path: "/contact"
    },
    {
        num: "03",
        title: "Logo Design",
        description: "I create logos that are unique, memorable, and help your brand stand out.",
        path: "/contact"
    },
    {
        num: "04",
        title: "SEO",
        description: "I optimize websites for search engines to attract more traffic and visibility.",
        path: "/contact"
    }
];

const services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
                >
                    {Items.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-1 flex-col justify-center gap-6 group"
                            >
                                {/* Header */}
                                <div className="w-full flex items-center justify-between">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>

                                    <Link
                                        href={service.path}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl font-extrabold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>

                                {/* Description */}
                                <p className="text-white/80">{service.description}</p>

                                {/* Border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default services;