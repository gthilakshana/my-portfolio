import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);
    const maxLength = 120; // characters before truncating

    const shouldTruncate = project.description.length > maxLength;
    const displayedText = expanded
        ? project.description
        : project.description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

    return (
        <div className="bg-gray-800  overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
            {/* Media */}
            {project.video ? (
                <video
                    src={project.video}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>

                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                    {displayedText}
                    {shouldTruncate && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="ml-2 text-yellow-400 hover:text-yellow-300 underline text-xs focus:outline-none"
                        >
                            {expanded ? "See Less" : "See More"}
                        </button>
                    )}
                </p>

                {/* Actions */}
                <div className="mt-4 flex flex-wrap gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition transform hover:scale-105"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-700 text-white hover:bg-yellow-400 hover:text-gray-900 transition transform hover:scale-105"
                        >
                            <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
