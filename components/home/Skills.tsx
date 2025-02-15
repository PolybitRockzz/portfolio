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
                { name: "Java", icon: <FaJava size={35} />, category: "Programming" },
                { name: "Python", icon: <FaPython size={35} />, category: "Programming" },
                { name: "Next.js", icon: <SiNextdotjs size={35} />, category: "Frontend" },
                { name: "TypeScript", icon: <SiTypescript size={35} />, category: "Frontend" },
                { name: "Git", icon: <FaGitAlt size={35} />, category: "Tool" },
            ],
        },
        {
            title: "Familiar With",
            skills: [
                { name: "C", icon: <SiC size={35} />, category: "Programming" },
                { name: "C++", icon: <SiCplusplus size={35} />, category: "Programming" },
                { name: "Dotnet C#", icon: <SiDotnet size={35} />, category: "Programming" },
            ],
        },
        {
            title: "Currently Learning",
            skills: [
                { name: "React", icon: <FaReact size={35} />, category: "Frontend" },
                { name: "Docker", icon: <FaDocker size={35} />, category: "Tool" },
                { name: "Tailwindcss", icon: <SiTailwindcss size={35} />, category: "Styling" },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState<number>(0);

    // Generates URL for Github search filtering by language (if Programming) or keyword (otherwise)
    const getSkillUrl = (skill: Skill): string => {
        // For Dotnet C#, search using C#
        const skillName = skill.name === "Dotnet C#" ? "C#" : skill.name;
        if (skill.category === "Programming") {
            return `https://github.com/PolybitRockzz?tab=repositories&q=&type=&language=${encodeURIComponent(skillName)}&sort=`;
        }
        return `https://github.com/search?q=user:PolybitRockzz+${encodeURIComponent(skillName)}`;
    };

    // Opens a new tab with the corresponding search URL
    const handleSkillClick = (skill: Skill) => {
        window.open(getSkillUrl(skill), "_blank");
    };

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
                                ? "bg-neutral-800 border-[#1f6feb]"
                                : "bg-neutral-950 border-neutral-800"
                        }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories[activeTab].skills.map((skill) => (
                    <div
                        key={skill.name}
                        onClick={() => handleSkillClick(skill)}
                        className="group px-4 py-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg flex items-center gap-2 cursor-pointer"
                    >
                        <span className="transition-colors p-2 duration-200 bg-neutral-800 rounded-lg group-hover:text-[#1f6feb]">
                            {skill.icon}
                        </span>
                        <div>
                            <span className="text-lg">{skill.name}</span>
                            <div className="text-xs">{skill.category}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
