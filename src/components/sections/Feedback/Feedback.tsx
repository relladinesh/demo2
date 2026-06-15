import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { 
    quote: "Zip Foundry didn't just build us an LLM. They completely re-architected our data pipeline. The speed is unprecedented.", 
    author: "Sarah Jenkins", 
    role: "CTO, Nexus Analytics" 
  },
  { 
    quote: "The autonomous agents deployed by their team saved us 40,000 hours of manual data entry in Q1 alone. Absolute magic.", 
    author: "David Chen", 
    role: "VP Engineering, Aura Health" 
  },
  { 
    quote: "Their edge AI implementation runs flawlessly on our hardware. Latency dropped to sub-millisecond levels.", 
    author: "Marcus Thorne", 
    role: "Director, Zenith Aerospace" 
  },
  { 
    quote: "The only AI infrastructure team I trust with our military-grade encrypted environments. Truly world-class.", 
    author: "Elena Rodriguez", 
    role: "Head of Security, Quantum" 
  },
  { 
    quote: "From concept to deployment in 4 weeks. The intelligence engines they built for our internal agents are beautiful.", 
    author: "James Wilson", 
    role: "Founder, Nova Robotics" 
  },
  { 
    quote: "We scaled from 10k to 1M daily inference requests without a single dropped packet. The architecture is flawless.", 
    author: "Anita Patel", 
    role: "Lead Architect, Polymath" 
  },
];

// Duplicate arrays for infinite smooth scrolling
const topRow = [...testimonials, ...testimonials];
const bottomRow = [...testimonials].reverse();
const bottomRowInfinite = [...bottomRow, ...bottomRow];

export default function Feedback() {
  return (
    <section id="feedback" className="relative w-full bg-[#Fdfbf7] py-32 sm:py-48 overflow-hidden font-sans border-t border-neutral-100">
      
      {/* Massive Abstract Glow Behind the Marquees */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vw] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="inline-block px-4 py-1.5 bg-white border border-neutral-200 text-neutral-900 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
            Client Feedback
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9]">
            Trusted by<br/>Visionaries.
          </h2>
        </div>
        <p className="text-neutral-500 text-base sm:text-lg max-w-sm font-light leading-relaxed pb-2">
          We don't build standard apps. We engineer mission-critical intelligence infrastructure for industry leaders.
        </p>
      </div>

      {/* Infinite Marquee Containers */}
      <div className="relative w-full flex flex-col gap-6 sm:gap-8 overflow-hidden mask-fade-edges">
        
        {/* Top Marquee (Scrolling Left) */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[200vw]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-6 sm:gap-8 px-3 sm:px-4 w-full"
          >
            {topRow.map((t, i) => (
              <div 
                key={i} 
                className="w-[300px] sm:w-[450px] shrink-0 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500"
              >
                <Quote className="w-8 h-8 text-amber-200 mb-6 group-hover:text-amber-400 transition-colors duration-500" />
                <p className="text-neutral-700 text-lg sm:text-xl font-medium leading-relaxed tracking-tight mb-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-neutral-400 text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900">{t.author}</div>
                    <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee (Scrolling Right) */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[200vw]">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            className="flex gap-6 sm:gap-8 px-3 sm:px-4 w-full"
          >
            {bottomRowInfinite.map((t, i) => (
              <div 
                key={i} 
                className="w-[300px] sm:w-[450px] shrink-0 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500"
              >
                <Quote className="w-8 h-8 text-blue-100 mb-6 group-hover:text-blue-300 transition-colors duration-500" />
                <p className="text-neutral-700 text-lg sm:text-xl font-medium leading-relaxed tracking-tight mb-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-neutral-400 text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900">{t.author}</div>
                    <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  );
}
