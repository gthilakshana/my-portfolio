import { FaDownload } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-gray-800/60 backdrop-blur-md rounded-2xl p-10 border border-gray-700 shadow-lg">

                <div className="flex justify-center items-center">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-40 sm:w-60 md:w-80 rounded-2xl object-cover shadow-xl border-4 border-gray-700 hover:border-yellow-400 transition duration-300 transform hover:scale-105"
                    />
                </div>


                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-yellow-400 mb-6 tracking-tight">
                        About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Hi, I’m{" "}
                        <span className="font-semibold text-yellow-400">Thilakshana</span>,
                        a passionate{" "}
                        <span className="font-semibold text-yellow-300">
                            Full Stack Developer
                        </span>{" "}
                        with experience in building modern, responsive, and user-friendly
                        web applications. I enjoy turning complex problems into elegant
                        solutions using the latest web technologies.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-8">
                        With expertise in{" "}
                        <span className="text-yellow-400">React, Node.js, MongoDB</span>,
                        and cloud technologies like{" "}
                        <span className="text-yellow-400">AWS</span>, I strive to create
                        seamless digital experiences. I also love exploring{" "}
                        <span className="text-yellow-400">UI/UX design</span> to ensure my
                        projects are both functional and visually appealing.
                    </p>


                    <a
                        href="/cv/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold uppercase bg-yellow-500 text-gray-900 shadow-md hover:bg-yellow-600 hover:shadow-yellow-400/40 transition transform hover:scale-105"
                    >
                        <FaDownload className="animate-bounce text-lg" />
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
