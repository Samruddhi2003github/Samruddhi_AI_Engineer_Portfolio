import { motion } from "motion/react";
import { Terminal, Cpu, Cloud, Code, Database, Eye, Brain } from "lucide-react";
import { resumeData } from "../lib/resumeData";

const SkillCategory = ({ title, skills, icon: Icon, index }: { title: string, skills: string[], icon: any, index: number, [key: string]: any }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="p-6 glass rounded-2xl border border-slate-800/50 hover:bg-slate-800/30 transition-colors group"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-slate-800 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h4 className="font-display font-bold text-xl">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs font-mono text-slate-400 border border-slate-700/30 hover:border-secondary/50 hover:text-white transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const categories = [
    { title: "AI & Machine Learning", skills: resumeData.skills.ai_ml, icon: Brain },
    { title: "Backend Engineering", skills: resumeData.skills.backend_engineering, icon: Terminal },
    { title: "Cloud & Infrastructure", skills: resumeData.skills.cloud_devops, icon: Cloud },
  ];

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-sm font-mono text-secondary uppercase tracking-[0.3em]">Knowledge Base</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold italic underline decoration-primary/30 underline-offset-8">Technical Stack</h3>
        <p className="text-slate-400 max-w-2xl mx-auto pt-4">Tools and technologies I’ve worked with across ML and backend systems.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto font-mono">
        {categories.map((cat, idx) => (
          <SkillCategory key={cat.title} {...cat} index={idx} />
        ))}
      </div>
    </section>
  );
}
