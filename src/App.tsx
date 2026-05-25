/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumeBot from "./components/ResumeBot";
import Footer from "./components/Footer";
import { resumeData } from "./lib/resumeData";
import { motion } from "motion/react";
import { Award, GraduationCap, Brain, Cpu, Terminal, Cloud } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About / Summary Section */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-3xl font-display font-bold leading-tight">
                Software Engineer transitioning into AI <br /> <span className="text-secondary text-2xl font-medium">Building production ML systems.</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                I currently work at Aurionpro, where I contribute to cloud infrastructure and deployment workflows. 
                My background started in Java backend development and gradually expanded into machine learning systems, 
                computer vision projects, and RAG-based applications.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Education</h5>
                    <p className="text-sm text-slate-400">{resumeData.education[0].degree}</p>
                    <p className="text-xs text-slate-500">{resumeData.education[0].institution} • {resumeData.education[0].grade}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-secondary shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-bold text-white mb-4">Professional Certifications</h5>
                    <div className="grid gap-3">
                       <a 
                         href="https://www.credly.com/badges/025ca698-8335-4f15-9055-3f36fa290d76/public_url" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10 group/cert hover:border-secondary/50 transition-colors"
                       >
                         <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 p-1">
                              <img 
                                src="https://images.credly.com/size/340x340/images/025ca698-8335-4f15-9055-3f36fa290d76/image.png" 
                                alt="AWS Certified Cloud Practitioner"
                                className="w-full h-full object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div>
                               <p className="text-sm font-bold text-white">AWS Cloud Practitioner</p>
                               <p className="text-[10px] text-slate-400 font-mono tracking-wider">Verified via Credly • Click to view</p>
                            </div>
                         </div>
                         <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-tighter font-bold">Issued</span>
                       </a>
                       
                       <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10 group/cert opacity-70">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500">
                               <Award size={20} />
                            </div>
                            <div>
                               <p className="text-sm font-bold text-white/50">Solutions Architect Assoc.</p>
                               <p className="text-[10px] text-slate-500">In Progress</p>
                            </div>
                         </div>
                         <span className="text-[10px] bg-white/5 text-slate-500 px-3 py-1 rounded-full border border-white/10 uppercase tracking-tighter">Preparing</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 lg:p-12">
               <div className="absolute inset-0 glass rounded-3xl -rotate-2" />
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl" />
                <div className="relative space-y-6">
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                    <h6 className="text-xs font-mono text-secondary uppercase mb-4 tracking-widest">A Bit About Me</h6>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      I enjoy building practical ML systems that can move beyond notebooks into production-style environments. I focus on making machine learning models work as robust parts of real-world systems.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                   <div className="glass p-5 rounded-2xl text-center">
                     <p className="text-3xl font-display font-bold text-white">8.48</p>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest">B.E. CGPA</p>
                   </div>
                   <div className="glass p-5 rounded-2xl text-center">
                     <p className="text-3xl font-display font-bold text-white">AWS</p>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest">Certified</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <Experience />

        {/* What I've Worked On Section */}
        <section id="bring" className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 italic underline decoration-secondary/30 underline-offset-8">What I’ve Worked On</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Tools and technologies I’ve worked with across ML and backend systems.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resumeData.whatIBring.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    {idx === 0 && <Cloud size={24} />}
                    {idx === 1 && <Brain size={24} />}
                    {idx === 2 && <Terminal size={24} />}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <Projects />
        <Skills />
      </main>

      <ResumeBot />
      <Footer />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
    </div>
  );
}

