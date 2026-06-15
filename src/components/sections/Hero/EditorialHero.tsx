import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Activity, Shield, Zap, Menu, X, MoveRight } from 'lucide-react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

export default function EditorialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll Spy for active navigation state
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "services", "works", "feedback", "contact"];
      let current = "home";
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "AI Services", href: "#services" },
    { name: "My Works", href: "#works" },
    { name: "Feedback", href: "#feedback" },
    { name: "Contact Us", href: "#contact" }
  ];

  // Mouse Parallax Effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // max 30px movement
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-[#Fdfbf7] flex flex-col justify-between font-sans selection:bg-neutral-900 selection:text-white"
    >
      {/* Subtle Noise Texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Abstract AI Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Ambient Lighting Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.5, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-orange-100/30 via-amber-50/20 to-transparent blur-3xl z-0 pointer-events-none"
      />

      {/* Premium Floating Navigation - Now Fixed and Active */}
      <div className="fixed top-0 left-0 z-[100] w-full px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none">
        <nav className="w-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-5 py-3.5 sm:px-6 sm:py-4 flex justify-between items-center transition-all relative pointer-events-auto">
          
          {/* Circuit Elements Injected into the Pill */}
          <div className="absolute left-[80px] -bottom-[1px] w-2 h-2 bg-neutral-900 rounded-full translate-y-1/2 z-10 shadow-sm" />
          <div className="absolute right-10 -bottom-[1px] w-2 h-2 bg-neutral-900 rotate-45 translate-y-1/2 z-10 shadow-sm" />
          <div className="absolute top-full left-[80px] w-[50px] h-[30px] pointer-events-none hidden sm:block">
             <svg viewBox="0 0 50 30" fill="none" className="w-full h-full overflow-visible text-neutral-300">
               <path d="M 0,0 C 0,20 10,30 20,30 L 50,30" stroke="currentColor" strokeWidth="1.5" />
             </svg>
             <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-neutral-900 rotate-45" />
          </div>

          <div className="flex items-center gap-2.5 relative z-20">
            <div className="w-7 h-7 bg-neutral-900 rounded-[0.6rem] flex items-center justify-center shadow-md">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="text-sm font-black tracking-widest uppercase text-neutral-900">Zip Foundry</div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`relative transition-colors duration-300 ${isActive ? 'text-neutral-900' : 'hover:text-neutral-900'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavDot"
                      className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" 
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:flex text-[10px] font-bold tracking-widest uppercase bg-neutral-900 px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all text-white shadow-md items-center gap-2">
              Start Project <ArrowRight className="w-3 h-3" />
            </a>
            <button onClick={() => setMenuOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-sm active:scale-95 transition-transform">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>

      {/* --- PREMIUM MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#Fdfbf7]/90 overflow-hidden"
          >
            {/* Mobile Header Inside Menu */}
            <div className="w-full px-4 pt-4 flex justify-between items-center relative z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-neutral-900 rounded-[0.8rem] flex items-center justify-center shadow-xl">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-black tracking-widest uppercase text-neutral-900">Zip Foundry</div>
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-xl active:scale-95 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Huge Staggered Mobile Links with Active State */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 z-20 relative">
              {links.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 40, rotateX: -20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className={`text-[12vw] sm:text-6xl font-black tracking-tighter border-b border-neutral-200/50 py-6 sm:py-8 flex items-center justify-between group transition-colors duration-300 ${isActive ? 'text-amber-500' : 'text-neutral-900'}`}
                  >
                    <div className="flex items-center gap-4">
                      {isActive && <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500 shrink-0" />}
                      {link.name}
                    </div>
                    <MoveRight className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors ${isActive ? 'text-amber-500' : 'text-neutral-300 group-hover:text-amber-500'}`} />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Abstract Background Elements for Mobile Menu */}
            <div className="absolute bottom-0 right-0 w-[100vw] h-[100vw] bg-amber-100/40 rounded-tl-full blur-[100px] pointer-events-none z-10" />
            <div className="absolute top-1/4 left-0 w-[80vw] h-[80vw] bg-blue-100/30 rounded-tr-full blur-[100px] pointer-events-none z-10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP HERO (Hidden on Mobile) --- */}
      <div className="hidden sm:flex flex-1 flex-col justify-between w-full relative">
        {/* Visual Framing - Giant Circular Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vh] h-[90vh] z-10 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border-[1px] border-neutral-300/30 border-t-neutral-400/60 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-400 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
            <div className="absolute bottom-[15%] right-[10%] translate-x-1/2 w-1.5 h-1.5 bg-neutral-300 rounded-full" />
          </motion.div>
        </div>

        {/* MAIN COMPOSITION - CENTERPIECE */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Typography Desktop */}
          <div className="absolute inset-0 flex items-center justify-center z-10 whitespace-nowrap pointer-events-none w-full px-4">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[12.5vw] font-black tracking-[-0.03em] text-neutral-900/95 leading-none select-none text-center"
            >
              ZIP FOUNDRY
            </motion.h1>
          </div>

          {/* Floating AI Agent Image */}
          <motion.div
            style={{ x: springX, y: springY }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-30 w-full h-[85vh] flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)] mt-[4vh]"
          >
            <motion.div
              animate={{ scale: [1, 0.85, 1], opacity: [0.3, 0.15, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 w-[40vh] h-6 bg-neutral-900/30 blur-2xl rounded-[100%]"
            />
            <img
              src="/premium_ai_agent_1781501333073.png"
              alt="Zip Foundry Premium AI Agent"
              className="w-full h-full object-contain pointer-events-auto scale-110"
            />
          </motion.div>
        </div>

        {/* DESKTOP INFORMATION BLOCKS */}
        <div className="relative z-30 px-8 pb-12 w-full grid grid-cols-12 gap-8 items-end pointer-events-none h-full justify-items-stretch content-end">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-4 flex flex-col gap-6 pointer-events-auto"
          >
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 tracking-wide">Zip Foundry</h3>
              <p className="text-sm text-neutral-500 mt-2 max-w-xs leading-relaxed font-light">
                AI-powered software, cloud infrastructure, and intelligent automation built for the scale of tomorrow.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="group relative overflow-hidden rounded-full bg-neutral-900 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white transition-all hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start Project <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="rounded-full border border-neutral-300 bg-white/40 backdrop-blur-md px-6 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-800 transition-all hover:bg-neutral-100/80 hover:scale-105">
                Explore Solutions
              </button>
            </div>
          </motion.div>

          {/* Center: Scroll Indicator */}
          <div className="flex col-span-4 justify-center pb-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-neutral-400"
            >
              <span className="text-[9px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </motion.div>
          </div>

          {/* Right Side: Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex col-span-4 justify-end pointer-events-auto"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-right w-auto">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5 text-neutral-400 mb-1">
                  <Zap className="w-3 h-3" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider">Projects</span>
                </div>
                <div className="text-2xl font-light text-neutral-900">50+</div>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5 text-neutral-400 mb-1">
                  <Shield className="w-3 h-3" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider">Uptime</span>
                </div>
                <div className="text-2xl font-light text-neutral-900">99.9%</div>
              </div>
              <div className="col-span-2 mt-2 pt-4 border-t border-neutral-200/50 text-right">
                <div className="flex items-center justify-end gap-1.5 text-neutral-400 mb-1">
                  <Activity className="w-3 h-3" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider">Automated Tasks</span>
                </div>
                <div className="text-3xl font-light text-neutral-900">10M+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- MOBILE REDESIGN HERO (Totally different UI) --- */}
      <div className="sm:hidden flex-1 w-full px-4 pb-4 flex flex-col gap-3 relative z-30">

        {/* Main Bento Card: Brand Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex-1 bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col justify-center px-8"
        >
          {/* Internal Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Ambient Lighting Gradient */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-[60vw] h-[60vw] bg-amber-500/10 blur-3xl rounded-full z-0 pointer-events-none"
          />

          {/* System Status Pill */}
          <div className="absolute top-6 right-6 z-30 flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/80 px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[8px] font-bold tracking-widest uppercase text-neutral-700">Online</span>
          </div>
          {/* Mobile Orbit Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] z-0 pointer-events-none opacity-50">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full border-[1px] border-neutral-300/80 border-t-neutral-400 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-400 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
              <div className="absolute bottom-[15%] right-[10%] translate-x-1/2 w-1.5 h-1.5 bg-neutral-300 rounded-full" />
            </motion.div>
          </div>

          {/* Background AI Agent (Centered, Oversized via Scale) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-90">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src="/premium_ai_agent_1781501333073.png" 
                alt="" 
                className="w-full h-full object-contain drop-shadow-xl scale-[2.2]"
              />
            </motion.div>
          </div>

          <div className="relative z-20 text-left">
            <span className="inline-block px-3 py-1 bg-neutral-100/80 backdrop-blur-md border border-neutral-200 text-neutral-600 rounded-full text-[9px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              Platform Overview
            </span>
            <h1 className="text-[12vw] font-black tracking-tight text-neutral-900 leading-[0.9]">
              ZIP<br />FOUNDRY
            </h1>
            <p className="text-sm text-neutral-600 mt-6 leading-relaxed font-light">
              We are a next-generation AI platform providing intelligent automation, scalable cloud infrastructure, and autonomous agents for modern enterprises. Built for speed. Designed for scale.
            </p>
          </div>

          {/* Bottom Action Area */}
          <div className="absolute bottom-6 left-6 right-6 z-30 flex flex-col gap-4">
            <div className="flex justify-between items-end w-full px-1">
              <div className="flex flex-col gap-1 bg-white/40 backdrop-blur-md border border-white/50 px-3 py-2 rounded-xl shadow-sm">
                <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-neutral-500">Core Engine</div>
                <div className="text-xs font-black text-neutral-900 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  Active
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="bg-white/80 backdrop-blur-xl border border-white px-4 py-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex flex-col items-end"
              >
                <span className="text-[7px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-0.5">Latency</span>
                <span className="text-sm font-black text-neutral-900 leading-none">12<span className="text-[10px] font-medium text-neutral-500">ms</span></span>
              </motion.div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-neutral-900 text-white rounded-2xl py-4 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase shadow-lg active:scale-[0.98] transition-transform">
                Start Project <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button className="w-[3.5rem] bg-white/80 backdrop-blur-md border border-white rounded-2xl flex items-center justify-center shadow-sm active:scale-[0.98] transition-transform">
                <ChevronDown className="w-4 h-4 text-neutral-900 animate-bounce" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
