import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Code2, Layers, Cpu, Database, ChevronRight, Brain, Cloud, Terminal, X, CheckCircle2 } from "lucide-react";
import { resumeData } from "../lib/resumeData";

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-bg-dark/90 backdrop-blur-md" onClick={onClose} />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-slate-700/50 shadow-2xl rounded-3xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-slate-800 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side: Images & Quick Stats */}
              <div className="bg-slate-900/50 p-8 border-r border-slate-800/50">
                <div className="aspect-video rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500 mb-8 border border-white/5 relative overflow-hidden group/img">
                   {project.image ? (
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                   ) : (
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                   )}
                   <div className="absolute inset-0 bg-bg-dark/20" />
                   <Code2 size={48} className="relative z-10 opacity-20" />
                   <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest font-mono p-2 glass rounded-lg z-20">Project Interface</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-xs font-mono text-secondary uppercase tracking-widest mb-4">Core Technology</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t: string) => (
                        <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div>
                      <h5 className="text-xs font-mono text-secondary uppercase tracking-widest mb-4">Project Gallery & Architecture</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {project.screenshots.map((s: string, i: number) => (
                          <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/5 bg-slate-800 group/thumb cursor-pointer">
                            <img 
                              src={s} 
                              alt={`Screenshot ${i + 1}`} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h5 className="text-xs font-mono text-secondary uppercase tracking-widest mb-4">Deployment Status</h5>
                    <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white tracking-tight">Verified Implementation</p>
                        <p className="text-[10px] text-slate-500">Built using modern ML & Software engineering best practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Content */}
              <div className="p-8 md:p-12 space-y-10">
                <div>
                  <span className="text-[10px] font-mono text-secondary/70 uppercase tracking-[0.3em]">{project.type}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mt-2">{project.title}</h3>
                </div>

                <div className="space-y-8">
                  {/* Architecture Overview */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                       <span className="w-4 h-px bg-secondary" /> Architecture Overview
                    </h4>
                    <div className="p-6 rounded-3xl bg-secondary/5 border border-secondary/10">
                       <p className="text-slate-300 text-sm leading-relaxed">{project.architecture}</p>
                    </div>
                  </div>

                  {/* Deployment Details */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                       <span className="w-4 h-px bg-primary" /> Deployment Details
                    </h4>
                    <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 text-slate-300 text-sm leading-relaxed">
                       {project.deployment}
                    </div>
                  </div>

                  {/* Key Results & Verified Outcomes */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                       <span className="w-4 h-px bg-emerald-400" /> Key Outcomes
                    </h4>
                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                       <p className="text-emerald-100/70 text-sm leading-relaxed italic">{project.results}</p>
                       <ul className="space-y-3 pt-4 border-t border-emerald-500/10">
                         {project.highlights.map((h: string, i: number) => (
                           <li key={i} className="flex gap-3 text-slate-400 text-xs items-start">
                             <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                             <span>{h}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-4 rounded-2xl bg-white text-bg-dark font-bold text-xs hover:bg-secondary hover:text-white transition-all shadow-xl"
                  >
                    <Github size={18} /> Repository
                  </a>
                  <button 
                    onClick={onClose}
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-4 rounded-2xl glass font-bold text-xs hover:bg-slate-800 transition-all"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onOpen }: { project: any, index: number, onOpen: () => void, [key: string]: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col glass-card overflow-hidden h-full"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <Cpu className="text-white w-12 h-12 rotate-12" />
      </div>

      {/* Project Image Header */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 z-20">
          <div className="px-3 py-1 rounded-full glass border border-white/10 text-[10px] font-mono text-white/80 uppercase tracking-widest">
            {project.type}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 flex-grow relative">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-display font-bold text-white group-hover:text-secondary transition-colors">
              {project.title}
            </h4>
            <span className="font-mono text-[10px] text-slate-500">{project.year}</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.slice(0, 4).map((t: string) => (
            <span key={t} className="px-2 py-1 rounded-md bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700/50">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && <span className="text-[10px] text-slate-600 font-mono self-center">+{project.tech.length - 4} more</span>}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-3 border-t border-slate-800/50">
         <a 
          href={project.github || "https://github.com/Samruddhi2003github"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/50 text-white text-xs font-bold hover:bg-slate-700 transition-all border border-slate-700/50"
         >
           <Github size={14} /> View Code
         </a>
         <button 
          onClick={onOpen}
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-white text-xs font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
         >
           View Case Study <ChevronRight size={14} />
         </button>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold italic underline decoration-secondary/30 underline-offset-8">Projects</h3>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed font-light">
            A selection of projects focusing on RAG pipelines, computer vision, and machine learning experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              index={idx} 
              onOpen={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
