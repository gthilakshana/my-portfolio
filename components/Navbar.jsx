"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setIsOpen(!isOpen);
    const goToLogin = () => console.log("Go to login");

    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);


            window.history.replaceState(null, "", `#${sectionId}`);

            if (isOpen) setIsOpen(false);
        }
    };


    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            menuItems.forEach((item) => {
                const elem = document.getElementById(item.id);
                if (elem) {
                    const top = elem.offsetTop;
                    const bottom = top + elem.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(item.id);


                        window.history.replaceState(null, "", `#${item.id}`);
                    }
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full lg:w-[70%] bg-gray-50 z-50 shadow">
            <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

                <div
                    className="inline-block rounded-md cursor-pointer"
                    onClick={() => handleScroll("home")}
                >
                    <img
                        src="/logo.png"
                        alt="Thilakshana Logo"
                        className="h-9 md:h-12 w-[155px] sm:w-[150px] md:w-[220px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>


                <nav className="hidden md:flex space-x-4  text-base uppercase items-center justify-end font-medium w-[80%]">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`cursor-pointer py-3 px-3 flex items-center justify-center gap-2 transition-colors duration-300 ${activeSection === item.id
                                ? "bg-gray-800 text-white"
                                : "bg-transparent text-gray-900 hover:bg-gray-700 hover:text-yellow-300"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            <span>{item.name}</span>
                        </div>
                    ))}

                    <div
                        className="p-2 text-white text-[18px] hover:text-yellow-300 transition-colors cursor-pointer border-2 border-gray-500"
                        onClick={goToLogin}
                    >
                        <FaUser />
                    </div>
                </nav>


                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-2xl focus:outline-none cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-gray-900 w-full px-4 sm:px-6 pb-4 flex flex-col space-y-2">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`cursor-pointer py-2 px-3 flex items-center justify-center gap-2 transition-colors duration-300 ${activeSection === item.id
                                ? "bg-gray-800 text-white"
                                : "bg-transparent text-white hover:bg-gray-700 hover:text-yellow-300"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            <span>{item.name}</span>
                        </div>
                    ))}

                    <div
                        className="p-2 text-white text-[18px] hover:text-yellow-300 transition-colors cursor-pointer border-2 border-gray-500 mt-2"
                        onClick={goToLogin}
                    >
                        <FaUser />
                    </div>
                </div>
            )}
        </div>
    );
}
