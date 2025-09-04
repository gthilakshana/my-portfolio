"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Resume", id: "resume" },
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
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full lg:w-[70%] bg-gray-50 z-50 shadow-md">
            <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

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

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4 text-sm items-center font-medium">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`px-4 py-2 uppercase transition-colors duration-300 ${activeSection === item.id
                                ? "bg-gray-700 text-white"
                                : "text-gray-800 hover:bg-gray-800 hover:text-yellow-400"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            {item.name}
                        </button>
                    ))}

                    <button
                        className="ml-4 p-2 border-1 border-yellow-400 text-gray-800 hover:bg-gray-900 hover:text-yellow-400 transition-colors duration-300"
                        onClick={goToLogin}
                    >
                        <FaUser />
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-900 text-2xl focus:outline-none hover:text-gray-700 transition-colors"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>


            <div
                className={`fixed top-0 right-0 h-screen w-64 transform transition-transform duration-300 
  ${isOpen ? "translate-x-0" : "translate-x-full"} 
  bg-gray-900 text-white shadow-2xl z-[60] md:hidden`}
            >
                <nav className="flex flex-col mt-6 space-y-2 px-6 uppercase">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center gap-4 py-2 px-3 cursor-pointer transition-colors ${activeSection === item.id
                                ? "bg-gray-700 text-white"
                                : "hover:bg-gray-800"
                                }`}
                            onClick={() => handleScroll(item.id)}
                        >
                            <span className="text-md">{item.name}</span>
                        </div>
                    ))}
                </nav>

                <div
                    className="flex items-center gap-4 py-2 px-6 mt-6 cursor-pointer hover:bg-yellow-400 transition-colors absolute bottom-6 w-full"
                    onClick={goToLogin}
                >
                    <FaUser className="text-xl" />
                    <span className="text-md">Login</span>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[50] md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}

        </div>
    );
}
