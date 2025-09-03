import { useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../components/data/projectsData.js";

export default function ProjectsSection() {
    const [showMore, setShowMore] = useState(false);
    const initialCount = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, initialCount);

    return (
        <section
            id="projects"
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16 border-b border-gray-700"
        >

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 max-w-6xl mx-auto gap-6">
                <div>
                    <p className="text-sm font-medium text-gray-400">Recent Projects</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-14 uppercase tracking-tight">

                        Projects
                    </h2>
                </div>

                <a
                    href="https://github.com/gthilakshana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-800 text-white font-medium rounded-md shadow-md hover:bg-yellow-500 hover:text-gray-900 hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center gap-2 text-base"
                >
                    <FaGithub className="text-lg" />
                    GitHub
                    <FaArrowRight className="text-sm" />
                </a>
            </div>


            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>


            {projects.length > initialCount && (
                <div className="mt-10 flex justify-center">
                    <span
                        onClick={() => setShowMore(!showMore)}
                        className="p-3 rounded-full cursor-pointer bg-gray-700 text-white cursor-pointer shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition transform hover:scale-110"
                    >
                        {showMore ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </span>
                </div>
            )}
        </section>
    );
}
