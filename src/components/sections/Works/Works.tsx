import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    client: "Nexus Analytics", 
    title: "Predictive Intelligence Engine", 
    category: "LLM / Analytics", 
    color: "from-blue-100 to-indigo-50",
    tall: true
  },
  { 
    client: "Aura Health", 
    title: "Autonomous Diagnostic Agents", 
    category: "Healthcare / Agents", 
    color: "from-emerald-100 to-teal-50",
    tall: false
  },
  { 
    client: "Zenith Aerospace", 
    title: "Orbital Trajectory Optimizer", 
    category: "Deep Learning", 
    color: "from-rose-100 to-orange-50",
    tall: false
  },
  { 
    client: "Quantum Financial", 
    title: "High-Frequency Trading Core", 
    category: "Infrastructure", 
    color: "from-amber-100 to-yellow-50",
    tall: true
  }
];

export default function Works() {
  return (
    <section id="works" className="w-full bg-[#Fdfbf7] py-32 sm:py-48 px-4 sm:px-8 overflow-hidden font-sans relative">
      
      {/* Soft Ambient Background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-amber-50/50 rounded-full blur-[100px] pointer-events-none" />
           
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* Premium Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-8">
          <div>
            <span className="inline-block px-4 py-1.5 bg-white border border-neutral-200 text-neutral-900 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              Case Studies
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9]"
            >
              Selected<br/>Works.
            </motion.h2>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors group pb-2">
            View All Projects 
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900 group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {[projects[0], projects[2]].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`w-full group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 shadow-xl hover:shadow-2xl transition-all duration-500 ${project.tall ? 'h-[500px] sm:h-[600px]' : 'h-[350px] sm:h-[400px]'}`}
              >
                {/* Abstract 'Image' Gradient */}
                <div className={`absolute inset-x-2 top-2 bottom-1/3 rounded-[2rem] bg-gradient-to-br ${project.color} group-hover:scale-[1.02] transition-transform duration-700 ease-out`} />
                
                {/* Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 bg-white/40 backdrop-blur-md border-t border-white/60">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-neutral-500 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-neutral-900 transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column (Offset downward via margin) */}
          <div className="flex flex-col gap-6 sm:gap-8 md:mt-24">
            {[projects[1], projects[3]].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`w-full group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 shadow-xl hover:shadow-2xl transition-all duration-500 ${project.tall ? 'h-[500px] sm:h-[600px]' : 'h-[350px] sm:h-[400px]'}`}
              >
                {/* Abstract 'Image' Gradient */}
                <div className={`absolute inset-x-2 top-2 bottom-1/3 rounded-[2rem] bg-gradient-to-br ${project.color} group-hover:scale-[1.02] transition-transform duration-700 ease-out`} />
                
                {/* Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 bg-white/40 backdrop-blur-md border-t border-white/60">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-neutral-500 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-neutral-900 transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
