"use client";

import { useState } from "react";
import { JSX } from "react";
import {
    FaReact,
    FaPython,
    FaJava,
    FaGitAlt,
    FaDocker,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiC,
    SiCplusplus,
    SiDotnet,
} from "react-icons/si";

interface Skill {
    name: string;
    icon: JSX.Element;
    category: string;
    url: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Specialized In",
            skills: [
                { name: "Java", icon: <FaJava size={35} />, category: "Programming", url: "https://www.java.com/" },
                { name: "Python", icon: <FaPython size={35} />, category: "Programming", url: "https://www.python.org/" },
                { name: "Next.js", icon: <SiNextdotjs size={35} />, category: "Frontend", url: "https://nextjs.org/" },
                { name: "TypeScript", icon: <SiTypescript size={35} />, category: "Frontend", url: "https://www.typescriptlang.org/" },
                { name: "Git", icon: <FaGitAlt size={35} />, category: "Version Control", url: "https://git-scm.com/" },
            ],
        },
        {
            title: "Familiar With",
            skills: [
                { name: "C", icon: <SiC size={35} />, category: "Programming", url: "#" },
                { name: "C++", icon: <SiCplusplus size={35} />, category: "Programming", url: "#" },
                { name: "Dotnet C#", icon: <SiDotnet size={35} />, category: "Programming", url: "https://dot.net/" },
            ],
        },
        {
            title: "Currently Learning",
            skills: [
                { name: "React", icon: <FaReact size={35} />, category: "Frontend", url: "https://www.react.dev/" },
                { name: "Docker", icon: <FaDocker size={35} />, category: "DevOps", url: "https://www.docker.com/" },
                { name: "Tailwindcss", icon: <SiTailwindcss size={35} />, category: "Styling", url: "https://tailwindcss.com/" },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className="max-w-2xl mx-auto my-5 text-white p-6 bg-neutral-950 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-center">My Skills</h2>
            <div className="flex justify-between mb-6">
                {skillCategories.map((category, index) => (
                    <button
                        key={category.title}
                        onClick={() => setActiveTab(index)}
                        className={`px-10 py-2 w-50 rounded-lg transition-colors border-2 ${
                            activeTab === index
                                ? "bg-neutral-800 border-[#ff5c00]"
                                : "bg-neutral-950 border-neutral-800"
                        }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories[activeTab].skills.map((skill) => (
                    <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-10 py-3 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg flex items-center gap-2"
                    >
                        <span className="transition-colors px-5 duration-200 group-hover:text-[#ff5c00]">
                            {skill.icon}
                        </span>
                        <div>
                            <span className="text-lg">{skill.name}</span>
                            <div className="text-xs">{skill.category}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Skills;
