"use client";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiSearch, FiX } from "react-icons/fi";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ResumeSection() {
    const [showMore, setShowMore] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const certifications = [
        { title: "CS50's Introduction to Database with SQL", org: "Harvard University", year: "2025", link: "https://certificates.cs50.io/b6832460-efea-41e4-ac1e-950300e93c1c.pdf?size=letter", img: "CS50_SQL.png" },
        { title: "CS50's Introduction to Programming with Python", org: "Harvard University", year: "2025", link: "https://certificates.cs50.io/3dbc26fe-3967-4c39-902e-52639810aa77.pdf?size=letter", img: "CS50_Python.png" },
        { title: "AWSome Day Online Conference", org: "Amazon Web Services (AWS)", year: "2023", link: "", img: "aws.jpg" },
        { title: "Java Programming", org: "Evotech Education", year: "2021", link: "", img: "java_evo.jpg" },
        { title: "Photoshop Basics to Advanced", org: "Kelani External Degree Institute", year: "2021", link: "", img: "photoshop.jpg" },
    ];

    const education = [
        { title: "BEng. In Software Engineering (Hons)", org: "IIC University of Technology, Cambodia", year: "2021 – 2025", img: "/IIC_Logo.png" },
        { title: "RQF Level 5 Diploma in Software Engineering", org: "SEG Awards, UK", year: "2022 – 2023", img: "/Seg_awards.png" },
        { title: "RQF Level 4 Diploma in Software Engineering", org: "SEG Awards, UK", year: "2021 – 2022", img: "/Seg_awards.png" },
        { title: "Thihagoda National School Matara", org: "Advanced Level", year: "2017 – 2020", img: "/school.jpg" },
    ];

    const zoomImages = certifications.map((cert) => cert.img);

    return (
        <section
            id="resume"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-14 uppercase tracking-tight">
                    Resume
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">

                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-yellow-400 flex items-center gap-2 mb-8 uppercase">
                            <FaGraduationCap className="text-yellow-400" /> Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center bg-gray-800/70 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-xl hover:bg-gray-800/90 transition transform hover:-translate-y-1 duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={edu.img}
                                            alt={edu.title}
                                            className="w-14 h-14 object-contain rounded-lg border border-gray-700"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-100">
                                                {edu.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm">{edu.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">
                                        {edu.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-8 uppercase">
                            Certifications
                        </h3>

                        <div className="space-y-6">
                            {(showMore ? certifications : certifications.slice(0, 2)).map(
                                (cert, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center bg-gray-800/70 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-xl hover:bg-gray-800/90 transition transform hover:-translate-y-1 duration-300 group"
                                    >

                                        <div
                                            className="relative cursor-pointer"
                                            onClick={() => {
                                                setCurrentIndex(zoomImages.indexOf(cert.img));
                                                setZoomed(true);
                                            }}
                                        >
                                            <img
                                                src={cert.img}
                                                alt={cert.title}
                                                className="w-14 h-14 object-contain rounded-lg border border-gray-700"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition duration-300 rounded-lg">
                                                <FiSearch className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="ml-4 flex-1">
                                            <h4 className="text-lg font-semibold text-gray-100">
                                                {cert.title}
                                            </h4>
                                            <div className="text-sm text-gray-400 flex items-center gap-2">
                                                <span>{cert.org}</span>
                                                {cert.link && (
                                                    <a
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-yellow-400 hover:underline transition"
                                                    >
                                                        View
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <span className="text-sm text-gray-500">{cert.year}</span>
                                    </div>
                                )
                            )}
                        </div>


                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="p-3 rounded-full bg-yellow-500 text-white shadow-md hover:bg-yellow-600 transition transform hover:scale-110 duration-300"
                            >
                                {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {zoomed && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6 animate-fadeIn"
                    onClick={() => setZoomed(false)}
                >
                    <div
                        className="relative max-w-3xl w-full animate-zoomIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={zoomImages[currentIndex]}
                            alt="Zoomed"
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                        <button
                            className="absolute top-3 right-3 text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-yellow-500 transition"
                            onClick={() => setZoomed(false)}
                        >
                            <FiX />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
