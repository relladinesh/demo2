import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Zap, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific 300vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Unique Text Reveal Animation
  // Words highlight progressively as you scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0.1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.25], [0.1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.35], [0.1, 1]);

  // Card 1 Parallax (Starts normal, scales down and fades as you scroll past it)
  const card1Scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.85]);
  const card1Opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.2, 0.4], [0, -50]);

  // Card 2 Parallax (Enters from below, pins, then scales)
  const card2Y = useTransform(scrollYProgress, [0.2, 0.5], [400, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.85]);
  const card2Opacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  // Card 3 Parallax (Enters from below at the end)
  const card3Y = useTransform(scrollYProgress, [0.6, 0.9], [400, 0]);
  
  return (
    // Make the section huge (300vh) to allow for deep scroll scrubbing
    <section id="about" ref={containerRef} className="relative w-full bg-[#Fdfbf7] h-[300vh] font-sans">
      
      {/* Sticky Container holds everything perfectly in view while we scroll through the 300vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden px-4 sm:px-8 py-20 flex items-center">
        
        {/* Static Background ambient lighting (removed scroll rotation to fix GPU lag) */}
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[70vw] h-[70vw] bg-amber-100/40 blur-[100px] rounded-full pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 h-[80vh] items-center">
          
          {/* Left Column: Scroll-Revealed Typography */}
          <div className="lg:w-5/12 flex flex-col items-start relative z-20">
             <span className="inline-block px-4 py-1.5 bg-neutral-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 shadow-lg">
                About Zip Foundry
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.95] mb-8">
                <motion.span style={{ opacity: opacity1 }} className="block">We engineer</motion.span>
                <motion.span style={{ opacity: opacity2 }} className="block text-neutral-400">intelligence.</motion.span>
                <motion.span style={{ opacity: opacity3 }} className="block text-amber-500">At scale.</motion.span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-10 max-w-md">
                We are a collective of systems engineers, AI researchers, and designers. We build autonomous software infrastructure for companies operating at the edge of what's possible.
              </p>
          </div>

          {/* Right Column: 3D Stacking Cards mapped to scroll progress */}
          <div className="lg:w-7/12 relative h-[450px] sm:h-[500px] w-full perspective-[1000px]">
            
            {/* Card 1 - Optimized for performance (Removed backdrop-blur, added willChange) */}
            <motion.div 
              style={{ scale: card1Scale, opacity: card1Opacity, y: card1Y, willChange: "transform, opacity" }}
              className="absolute inset-0 w-full bg-[#fbfaf8] border border-neutral-200/50 rounded-[2.5rem] p-8 sm:p-12 shadow-xl origin-top z-10 flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-white flex items-center justify-center mb-8 shadow-inner">
                <Zap className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Unprecedented Speed</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-lg">
                Our proprietary infrastructure allows for model deployment and scaling in milliseconds. We remove the bottlenecks entirely, closing the gap between prototype and production.
              </p>
            </motion.div>

            {/* Card 2 - Optimized */}
            <motion.div 
              style={{ scale: card2Scale, opacity: card2Opacity, y: card2Y, willChange: "transform, opacity" }}
              className="absolute inset-0 w-full bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl origin-top z-20 overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-8 shadow-inner">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Infinite Scale</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-lg">
                  From stealth startups to Fortune 500 enterprises, our cloud architecture dynamically allocates resources perfectly, ensuring zero downtime even under extreme load.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Optimized */}
            <motion.div 
              style={{ y: card3Y, willChange: "transform" }}
              className="absolute inset-0 w-full bg-white border border-neutral-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] origin-top z-30 flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center mb-8 shadow-sm">
                <Cpu className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Autonomous Systems</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-lg">
                We believe in software that manages itself. Our platform utilizes advanced agentic models to self-heal, self-optimize, and continuously improve code performance.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
