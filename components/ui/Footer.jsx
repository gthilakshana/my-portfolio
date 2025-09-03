import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">


                <p className="text-sm md:text-base text-gray-400">
                    © {new Date().getFullYear()} Gavrawa Thilakshana. All rights reserved.
                </p>


                <div className="flex space-x-4 text-lg">
                    <a
                        href="https://github.com/gthilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-white shadow-lg transition transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/gavrawa-thilakshana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-white shadow-lg transition transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:gavrawavanniarachchi@gmail.com"
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-white shadow-lg transition transform hover:scale-110"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://instagram.com/gavrawa_thilakshana_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-white shadow-lg transition transform hover:scale-110"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}
