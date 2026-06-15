import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="relative w-full bg-[#Fdfbf7] py-24 sm:py-32 px-4 sm:px-8 font-sans overflow-hidden">
      
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50 via-[#Fdfbf7] to-[#Fdfbf7] opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Floating Premium Contact Ticket */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-white/60 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Subtle animated background gradient inside the card */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/30 via-transparent to-transparent" />

          {/* Left: Interactive Info */}
          <div className="flex-1 relative z-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-neutral-100 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-8 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-500" /> Open for collaboration
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-neutral-900 leading-[1.1] mb-6">
                Ready to create<br />something magic?
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-md mb-12">
                Drop us a line. We typically respond within 24 hours to discuss how we can engineer your next breakthrough. Let's make it happen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <a href="mailto:hello@zipfoundry.com" className="flex items-center gap-4 group/link">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-neutral-100 shadow-sm group-hover/link:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-neutral-900" />
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Email Us</div>
                  <div className="text-sm font-bold text-neutral-900">hello@zipfoundry.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-neutral-100 shadow-sm">
                  <MapPin className="w-4 h-4 text-neutral-900" />
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Headquarters</div>
                  <div className="text-sm font-bold text-neutral-900">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Quick Form */}
          <div className="w-full lg:w-[400px] shrink-0 bg-white/80 rounded-[2rem] border border-neutral-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] p-6 sm:p-8 relative z-10 flex flex-col gap-6">
            <h3 className="text-sm font-bold text-neutral-900 mb-2">Send a quick message</h3>
            
            <div className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#Fdfbf7] border border-transparent rounded-xl px-5 py-4 text-sm text-neutral-900 outline-none focus:border-neutral-200 focus:bg-white transition-all placeholder:text-neutral-400"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#Fdfbf7] border border-transparent rounded-xl px-5 py-4 text-sm text-neutral-900 outline-none focus:border-neutral-200 focus:bg-white transition-all placeholder:text-neutral-400"
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={3}
                className="w-full bg-[#Fdfbf7] border border-transparent rounded-xl px-5 py-4 text-sm text-neutral-900 outline-none focus:border-neutral-200 focus:bg-white transition-all placeholder:text-neutral-400 resize-none"
              />
              <button className="w-full bg-neutral-900 text-white rounded-xl py-4 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-md mt-2 group/btn">
                Send Message <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
