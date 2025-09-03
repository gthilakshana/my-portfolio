import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaNodeJs,
    FaReact,
    FaJava,
    FaLinux,
    FaAws,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
    FaWhatsapp,
} from "react-icons/fa";
import {
    SiMongodb,
    SiMysql,
    SiExpress,
    SiFigma,
    SiTailwindcss,
} from "react-icons/si";

export default function HomeSection() {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = [
        "Full Stack Developer",
        "MERN Stack Enthusiast",
        "Next.js Explorer",
    ];

    useEffect(() => {
        const interval = setInterval(
            () => setTextIndex((prev) => (prev + 1) % textArray.length),
            3000
        );
        return () => clearInterval(interval);
    }, []);

    // const techIcons = [
    //     { icon: <FaNodeJs className="text-green-400" /> },
    //     { icon: <SiExpress className="text-gray-200" /> },
    //     { icon: <FaJava className="text-red-500" /> },
    //     { icon: <SiFigma className="text-pink-400" /> },
    //     { icon: <FaReact className="text-blue-400" /> },
    //     { icon: <SiMongodb className="text-green-500" /> },
    //     { icon: <SiMysql className="text-blue-300" /> },
    //     { icon: <FaHtml5 className="text-orange-500" /> },
    //     { icon: <FaCss3Alt className="text-blue-500" /> },
    //     { icon: <FaBootstrap className="text-purple-500" /> },
    //     { icon: <SiTailwindcss className="text-sky-400" /> },
    //     { icon: <FaGitAlt className="text-red-500" /> },
    //     { icon: <FaGithub className="text-white" /> },
    //     { icon: <FaLinux className="text-gray-100" /> },
    //     { icon: <FaAws className="text-yellow-400" /> },
    // ];

    const socialLinks = [
        { icon: <FaEnvelope />, url: "mailto:gavrawavanniarachchi@gmail.com" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/gavrawa-thilakshana" },
        { icon: <FaGithub />, url: "https://github.com/gthilakshana" },
    ];

    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center md:flex-row md:justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 md:px-16 py-20 min-h-screen overflow-hidden"
        >

            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
                <p className="text-yellow-400 text-lg md:text-xl font-medium">
                    Hey, I'm Gavrawa Thilakshana
                </p>

                <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-snug uppercase tracking-tight">
                    {textArray[textIndex]}
                </h1>

                <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mt-6 mx-auto md:mx-0">
                    Enthusiastic MERN Stack Developer with strong expertise in React and
                    Node.js, currently expanding skills in Next.js. Passionate about
                    building clean, responsive, and user-friendly interfaces backed by
                    robust backend functionality. A fast learner eager to contribute to
                    impactful projects while combining creativity with technical
                    precision.
                </p>


                <div className="flex justify-center md:justify-start gap-4">
                    {socialLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 flex items-center justify-center  bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900 transition transform hover:scale-110 shadow-lg"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>


            <div className="hidden md:flex w-full md:w-1/2 justify-center items-center ">
                <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center ">
                    <img
                        src="/compu.gif"
                        alt="Profile"
                        className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-cover"
                    />


                </div>
            </div>


            <div className="fixed bottom-4 left-4 flex flex-col space-y-4 z-50">
                <button
                    onClick={() => window.open("https://wa.me/94774571927", "_blank")}
                    className="flex items-center justify-center w-13 h-13  bg-green-500 
          text-white shadow-lg hover:scale-110 transform transition duration-300"
                >
                    <FaWhatsapp className="text-2xl" />
                </button>
            </div>
        </section>
    );
}
