import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300">

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


            <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>


                <div className="mt-4 flex flex-wrap gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition transform hover:scale-105"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-white hover:bg-yellow-400 hover:text-gray-900 transition transform hover:scale-105"
                        >
                            <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
