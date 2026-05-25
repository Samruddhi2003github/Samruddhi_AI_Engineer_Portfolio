import { motion } from "motion/react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { resumeData } from "../lib/resumeData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
            SB
          </div>
          <span className="hidden sm:block font-display font-semibold text-lg tracking-tight">
            Software Engineer <span className="text-secondary ml-2">| RAG • Computer Vision • AWS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/Samruddhi2003github"
            target="_blank"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/samruddhi-bansode-030015264"
            target="_blank"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:samruddhipb@gmail.com"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href={resumeData.resumeUrl}
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-bg-dark font-bold text-sm hover:bg-secondary hover:text-white transition-all"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass p-6 rounded-2xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-slate-800">
             <a href="https://github.com/Samruddhi2003github" target="_blank"><Github /></a>
             <a href="https://www.linkedin.com/in/samruddhi-bansode-030015264" target="_blank"><Linkedin /></a>
             <a href="mailto:samruddhipb@gmail.com"><Mail /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
