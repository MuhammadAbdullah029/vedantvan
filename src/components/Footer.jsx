import React from "react";
import { Mail } from "lucide-react";

const Footer = ({ aboutRef, skillsRef, workRef, servicesRef }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-12 md:p-[3rem] md:pb-[1rem] p-[1rem] ">
      <div className="w-full bg p-[1rem] md:rounded-[25px] rounded-[15px] ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold white cur">Vedant Vanmore</h2>
            <p className="text-sm white mt-2">
              Helping businesses scale with AI, automation, and efficient workflows.
            </p>
          </div>

          {/* Center - Links */}
          <nav className="flex gap-6 white text-sm font-medium">
            <p onClick={() => handleScroll(servicesRef)} className="cursor-pointer hover:scale-105 white">
              Services
            </p>
            <p onClick={() => handleScroll(aboutRef)} className="cursor-pointer hover:scale-105 white">
              About
            </p>
            <p onClick={() => handleScroll(skillsRef)} className="cursor-pointer hover:scale-105 white">
              Skills
            </p>
            <p onClick={() => handleScroll(workRef)} className="cursor-pointer hover:scale-105 white">
              Work
            </p>
          </nav>

          {/* Right side - Social Icons */}
          <div className="flex gap-5">
            <a
              href="mailto:vedantvanmore111@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition-all"
            >
              <Mail size={20} strokeWidth={2} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm white">
          © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
