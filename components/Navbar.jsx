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
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full lg:w-[70%] bg-white shadow-md z-50 transition-all">
            <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-4">


                <div
                    className="inline-block rounded-md cursor-pointer"
                    onClick={() => handleScroll("home")}
                >
                    <img
                        src="/logo.png"
                        alt="Thilakshana Logo"
                        className="h-10 md:h-12 w-[150px] md:w-[220px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>


                <nav className="hidden md:flex space-x-4 text-base uppercase items-center justify-end font-medium w-[80%]">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${activeSection === item.id
                                ? "bg-yellow-100 text-yellow-600"
                                : "text-gray-800 hover:bg-yellow-50 hover:text-yellow-500"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            {item.name}
                        </div>
                    ))}


                    <div
                        className="p-2 text-gray-800 hover:text-yellow-500 border-2 border-gray-200 rounded-lg cursor-pointer transition-colors"
                        onClick={goToLogin}
                    >
                        <FaUser />
                    </div>
                </nav>


                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 text-2xl focus:outline-none cursor-pointer hover:text-yellow-500 transition-colors"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white w-full px-4 sm:px-6 pb-4 flex flex-col space-y-2 shadow-md rounded-b-lg transition-all">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${activeSection === item.id
                                ? "bg-yellow-100 text-yellow-600"
                                : "text-gray-800 hover:bg-yellow-50 hover:text-yellow-500"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            {item.name}
                        </div>
                    ))}


                    <div
                        className="p-2 text-gray-800 hover:text-yellow-500 border-2 border-gray-200 rounded-lg cursor-pointer mt-2 transition-colors"
                        onClick={goToLogin}
                    >
                        <FaUser />
                    </div>
                </div>
            )}
        </div>
    );
}
