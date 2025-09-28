import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-16 p-[3rem] pb-[1rem] ">
      <div className="w-full bg p-[1rem] rounded-[15px] ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left side - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold white cur ">Vedant Vanmore</h2>
          <p className="text-sm white mt-2">
            Helping businesses scale with AI, automation, and efficient workflows.
          </p>
        </div>

        {/* Center - Links */}
        <nav className="flex gap-6 white text-sm font-medium">
          <a href="#services" className="hover:scale-105 white ">
            Services
          </a>
          <a href="#about" className="hover:scale-105 white ">
            About
          </a>
          <a href="#contact" className="hover:scale-105 white ">
            Contact
          </a>
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
