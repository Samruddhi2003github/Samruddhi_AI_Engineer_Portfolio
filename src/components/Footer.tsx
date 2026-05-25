import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { resumeData } from "../lib/resumeData";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="py-24 border-t border-slate-900 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-xs">SB</div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none">Samruddhi Bansode</span>
              <span className="text-[9px] text-secondary font-mono tracking-widest mt-2 uppercase">Engineer building ML & cloud systems</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Building practical machine learning systems and robust cloud infrastructure.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Samruddhi2003github" target="_blank" className="p-2 glass rounded-full hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/samruddhi-bansode-030015264" target="_blank" className="p-2 glass rounded-full hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:samruddhipb@gmail.com" className="p-2 glass rounded-full hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-6">Navigation</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-secondary transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-secondary transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-secondary transition-colors">Skills</a></li>
          </ul>
        </div>

        <div className="relative">
          <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-6">Contact</h5>
          <div className="space-y-4 text-sm text-slate-400">
            <p>Mumbai, Maharashtra</p>
            <a href={`mailto:${resumeData.email}`} className="block hover:text-secondary transition-colors underline decoration-slate-800 underline-offset-4">{resumeData.email}</a>
            <p>{resumeData.phone}</p>
          </div>
          <button 
            onClick={scrollToTop}
            className="absolute -bottom-12 right-0 md:relative md:bottom-0 md:mt-12 p-4 glass rounded-full hover:bg-secondary hover:text-white transition-all group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
        <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        <p>Built with React & Framer Motion</p>
      </div>
    </footer>
  );
}
