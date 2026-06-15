import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Activity, Code2, Globe, Cpu } from 'lucide-react';

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full bg-[#Fdfbf7] py-32 md:py-48 px-4 sm:px-8 font-sans overflow-hidden"
    >
      {/* Background Abstract Typography / Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center z-0">
         <motion.div style={{ y: y1 }} className="absolute text-[25vw] font-black text-neutral-900/[0.02] tracking-tighter whitespace-nowrap select-none">
           INTELLIGENCE
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              <span className="inline-block px-4 py-1.5 bg-white border border-neutral-200 text-neutral-900 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                About Zip Foundry
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9]"
            >
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-400">
                nervous system
              </span><br/>
              of tomorrow.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 text-neutral-500 font-light leading-relaxed text-base sm:text-lg"
          >
            We are not just another AI wrapper. We are a deep-tech collective engineering the fundamental infrastructure for autonomous enterprise systems.
          </motion.div>
        </div>

        {/* Unique Bento / Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr md:h-[650px]">
          
          {/* Main Large Visual Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden bg-neutral-900 group shadow-2xl h-[500px] md:h-auto flex flex-col justify-end"
          >
            {/* Pure CSS Abstract Cinematic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-[80px]"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  x: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-amber-500/20 rounded-full blur-[100px]"
              />
            </div>
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10 pointer-events-none" />
            
            {/* Floating UI Elements inside Card */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 z-20">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-white text-[9px] font-bold tracking-widest uppercase">System Active</span>
            </div>

            <div className="relative z-20 p-8 sm:p-12 w-full transition-transform duration-700 group-hover:-translate-y-2">
               <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
                 Intelligence.<br/>Decentralized.
               </h3>
               <p className="text-neutral-400 max-w-md text-lg font-light leading-relaxed mb-8">
                 Our proprietary architecture distributes cognitive load across specialized agentic nodes, achieving human-level reasoning at machine scale.
               </p>
               <button className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-widest hover:gap-5 transition-all group/btn">
                 <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-neutral-900 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                 </div>
                 Read Manifesto
               </button>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6 h-[600px] md:h-auto">
            {/* Top Right Small Card: Stats/Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 rounded-[2.5rem] bg-white border border-neutral-200 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/80 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-125" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Globe className="w-5 h-5 text-neutral-900" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">Global Scale</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Infrastructure deployed across 14 distinct regions, ensuring sub-20ms latency worldwide.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-end justify-between relative z-10">
                 <div>
                   <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-1">Active Nodes</div>
                   <div className="text-4xl font-black text-neutral-900 tracking-tighter">10k+</div>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                   <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
            </motion.div>

            {/* Bottom Right Small Card: Engineering */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 rounded-[2.5rem] bg-neutral-50 border border-neutral-200 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-shadow"
            >
              {/* Animated Grid Background */}
              <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_14px]" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white border border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5 text-neutral-900" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">Pure Engineering</h4>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  No compromises. We build custom, high-performance C++ and Rust engines for critical paths.
                </p>
              </div>

              <div className="mt-8 relative z-10 w-full">
                 <div className="h-1.5 w-full bg-neutral-200/80 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: '85%' }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                     className="h-full bg-neutral-900 rounded-full relative"
                   >
                   </motion.div>
                 </div>
                 <div className="flex justify-between mt-3 text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-500">
                   <span>Compute Efficiency</span>
                   <span className="text-neutral-900">85%</span>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
