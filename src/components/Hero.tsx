import { motion } from "motion/react";
import { ArrowRight, Brain, Cloud, Code } from "lucide-react";
import { resumeData } from "../lib/resumeData";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-gradient">
      {/* Decorative Blur and Grids */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[128px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-slate-700/50 text-xs font-medium text-secondary"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            Open to AI Engineer and MLOps Engineer roles – Mumbai
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold leading-tight tracking-tighter"
          >
            Software Engineer transitioning into AI <br />
            <span className="text-gradient">building production ML systems.</span> <br />
            <span className="text-sm md:text-base font-light tracking-normal text-slate-400 block mt-4 max-w-2xl">
              Worked on RAG pipelines, computer vision, and backend systems, with hands-on experience in deploying ML solutions using AWS and Docker.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light"
          >
            {resumeData.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-bg-dark font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href={`mailto:${resumeData.email}`}
              className="px-8 py-4 rounded-full glass font-bold hover:bg-slate-800 transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800/50"
          >
            <div>
              <p className="text-3xl font-display font-bold text-white">5+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">AI Projects</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white">RAG</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Specialist</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white">AWS</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Certified</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", damping: 15 }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-card p-8 aspect-[4/5] flex flex-col items-center justify-center gap-8">
              <div className="relative w-56 h-56 group">
                {/* Decorative rings */}
                <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite] opacity-50" />
                <div className="absolute -inset-2 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse] opacity-50" />
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl z-10 bg-slate-900 group">
                   <img 
                     src="/profile.jpeg" 
                     alt="Samruddhi Bansode" 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent opacity-60 pointer-events-none" />
                </div>
                
                {/* Availability indicator */}
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-900 z-20 shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold">{resumeData.name}</h3>
                  <p className="text-[10px] text-secondary font-mono uppercase tracking-[0.2em] font-semibold">Software Engineer</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <span className="px-3 py-1 bg-slate-800/80 rounded-full text-[9px] text-slate-400 border border-slate-700/50 uppercase tracking-wider font-semibold group-hover:border-secondary transition-colors">ML Deployment</span>
                  <span className="px-3 py-1 bg-slate-800/80 rounded-full text-[9px] text-slate-400 border border-slate-700/50 uppercase tracking-wider font-semibold group-hover:border-primary transition-colors">FastAPI & AWS</span>
                </div>

                <div className="flex gap-6 justify-center pt-4 border-t border-slate-800/50">
                  <div className="flex flex-col items-center">
                    <Brain size={18} className="text-primary mb-1" />
                    <span className="text-[8px] text-slate-500 uppercase tracking-tighter">AI Core</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Cloud size={18} className="text-secondary mb-1" />
                    <span className="text-[8px] text-slate-500 uppercase tracking-tighter">MLOps</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Code size={18} className="text-emerald-400 mb-1" />
                    <span className="text-[8px] text-slate-500 uppercase tracking-tighter">Backend</span>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
