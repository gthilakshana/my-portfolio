"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ScaleLoader  } from "react-spinners";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import ResumeSection from "../components/ResumeSection";
import Footer from "../components/ui/Footer";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [loadingSections, setLoadingSections] = useState(true);

  
  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setLoadingSections(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full lg:w-[70%] min-h-screen mx-auto border border-gray-500">
      
      <Navbar />

    
      <div  >
        {loadingSections ? (
          <div className="flex items-center justify-center h-[100vh]">
            <ScaleLoader color="#FACC3E" loading={loadingSections} size={15} />
          </div>
        ) : (
          <main>
            <section id="home"><HomeSection /></section>
            <section id="about"><AboutSection /></section>
            <section id="resume"><ResumeSection /></section>
            <section id="projects"><ProjectsSection /></section>
            <section id="skills"><SkillsSection /></section>
            <section id="contact"><ContactSection /></section>
            <Footer />
          </main>
        )}
      </div>

     
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition animate-bounce focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
