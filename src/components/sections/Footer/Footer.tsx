
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white pt-24 pb-8 px-4 sm:px-8 font-sans overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-rose-500" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-[0.6rem] flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-neutral-900" />
              </div>
              <span className="text-lg font-black tracking-widest uppercase">Zip Foundry</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Engineering autonomous intelligence for the world's most demanding enterprises. Built for speed. Designed for infinite scale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                <span className="text-xs font-bold">IN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
                <span className="text-xs font-bold">GH</span>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase mb-2">Platform</h4>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">AI Services</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Infrastructure</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Security</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase mb-2">Company</h4>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">My Works</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Careers</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
            © 2026 Zip Foundry. All rights reserved.
          </div>
          <div className="flex gap-6 text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
