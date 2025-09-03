import {
    FaNodeJs, FaJava, FaReact, FaFigma, FaLinux, FaHtml5,
    FaCss3Alt, FaBootstrap, FaGitAlt, FaAws, FaPython, FaCuttlefish
} from "react-icons/fa";
import {
    SiExpress, SiMongodb, SiMysql, SiTailwindcss,
    SiPostman, SiDocker, SiJenkins, SiUbuntu, SiCentos
} from "react-icons/si";

export default function SkillsSection() {
    const skills = [
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
        { icon: <FaJava />, name: "Java", color: "text-red-500" },
        { icon: <FaCuttlefish />, name: "C++", color: "text-indigo-400" },
        { icon: <FaPython />, name: "Python", color: "text-yellow-400" },
        { icon: <FaReact />, name: "React.js", color: "text-blue-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
        { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
        { icon: <FaFigma />, name: "UI/UX, Figma", color: "text-pink-400" },
        { icon: <FaLinux />, name: "Linux", color: "text-gray-300" },
        { icon: <SiUbuntu />, name: "Ubuntu", color: "text-orange-400" },
        { icon: <SiCentos />, name: "CentOS", color: "text-purple-400" },
        { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
        { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-400" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-400" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-400" },
        { icon: <FaGitAlt />, name: "Git, GitHub", color: "text-red-400" },
        { icon: <FaAws />, name: "AWS", color: "text-yellow-500" },
        { icon: <SiPostman />, name: "Postman", color: "text-orange-400" },
        { icon: <SiDocker />, name: "Docker", color: "text-blue-400" },
        { icon: <SiJenkins />, name: "Jenkins", color: "text-red-500" },
    ];

    return (
        <section
            id="skills"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto">

                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight uppercase">
                        Skills
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl">
                        A blend of technologies I use to build{" "}
                        <span className="font-semibold text-yellow-400">
                            modern, scalable, and elegant
                        </span>{" "}
                        applications.
                    </p>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer flex flex-col items-center p-6 bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-yellow-400/20 transition transform hover:-translate-y-2 duration-300 border border-gray-700"
                        >
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-900 group-hover:scale-110 transition-transform duration-300">
                                <span className={`text-4xl ${skill.color}`}>{skill.icon}</span>
                            </div>
                            <p className="mt-4 text-gray-300 font-semibold text-center text-lg group-hover:text-yellow-400 transition">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
