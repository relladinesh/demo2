import { motion } from 'framer-motion';
import { Cpu, Globe, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full bg-[#Fdfbf7] py-24 sm:py-32 px-4 sm:px-8 font-sans overflow-hidden">
      
      {/* Static Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[70vw] h-[70vw] bg-amber-100/40 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Sticky Typography */}
        <div className="lg:w-5/12 flex flex-col items-start relative z-20">
          <div className="sticky top-32">
             <span className="inline-block px-4 py-1.5 bg-neutral-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 shadow-lg">
                About Zip Foundry
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.95] mb-8"
              >
                <span className="block">We engineer</span>
                <span className="block text-neutral-400">intelligence.</span>
                <span className="block text-amber-500">At scale.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-md"
              >
                We are a collective of systems engineers, AI researchers, and designers. We build autonomous software infrastructure for companies operating at the edge of what's possible.
              </motion.p>
          </div>
        </div>

        {/* Right Column: Flowing Cards */}
        <div className="lg:w-7/12 flex flex-col gap-6 sm:gap-8 pt-0 lg:pt-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white border border-neutral-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-xl flex flex-col justify-center group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-white flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-6 h-6 text-neutral-900" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Unprecedented Speed</h3>
            <p className="text-neutral-500 font-light leading-relaxed text-lg">
              Our proprietary infrastructure allows for model deployment and scaling in milliseconds. We remove the bottlenecks entirely, closing the gap between prototype and production.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden flex flex-col justify-center relative group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Infinite Scale</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-lg">
                From stealth startups to Fortune 500 enterprises, our cloud architecture dynamically allocates resources perfectly, ensuring zero downtime even under extreme load.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white border border-neutral-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col justify-center group hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
              <Cpu className="w-6 h-6 text-neutral-900" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Autonomous Systems</h3>
            <p className="text-neutral-500 font-light leading-relaxed text-lg">
              We believe in software that manages itself. Our platform utilizes advanced agentic models to self-heal, self-optimize, and continuously improve code performance.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
