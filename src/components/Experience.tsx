import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronRight, Code } from "lucide-react";
import { resumeData } from "../lib/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-sm font-mono text-secondary uppercase tracking-[0.3em] mb-4">Professional Path</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold italic underline decoration-secondary/30 underline-offset-8">Experience</h3>
        </div>
        <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
          Transitioning from backend development to cloud infrastructure and ML deployment.
        </p>
      </div>

      <div className="space-y-16">
        {resumeData.experience.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                  <Calendar size={12} /> {exp.period}
                </div>
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-secondary transition-colors">{exp.role}</h4>
                <div className="flex flex-col gap-2 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-secondary" /> {exp.company}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-600" /> {exp.location}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-white/[0.07] transition-all">
                 <ul className="space-y-4">
                   {exp.bullets.map((bullet, bIdx) => (
                     <li key={bIdx} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                       <span className="font-light">{bullet}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
