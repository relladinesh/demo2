
import { motion } from 'framer-motion';
import { Brain, Bot, Network, Shield, Activity, Eye } from 'lucide-react';

const services = [
  {
    title: "LLM Fine-Tuning",
    description: "We customize large language models on your proprietary data to create domain-specific intelligence with zero hallucination.",
    icon: <Brain className="w-8 h-8 text-neutral-900" />,
    color: "bg-amber-100"
  },
  {
    title: "Autonomous Agents",
    description: "Deploy self-healing, goal-oriented agents that can execute complex multi-step workflows without human intervention.",
    icon: <Bot className="w-8 h-8 text-neutral-900" />,
    color: "bg-blue-100"
  },
  {
    title: "Edge AI Networks",
    description: "Ultra-low latency AI inference deployed directly to edge devices, ensuring immediate response times for critical systems.",
    icon: <Network className="w-8 h-8 text-neutral-900" />,
    color: "bg-emerald-100"
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and secure enclaves for all AI operations, guaranteeing your data never leaks to public models.",
    icon: <Shield className="w-8 h-8 text-neutral-900" />,
    color: "bg-rose-100"
  },
  {
    title: "Predictive Analytics",
    description: "Advanced forecasting models that process millions of data points in real-time to predict market trends before they happen.",
    icon: <Activity className="w-8 h-8 text-neutral-900" />,
    color: "bg-purple-100"
  },
  {
    title: "Computer Vision",
    description: "State-of-the-art visual processing systems capable of sub-millisecond defect detection and spatial awareness mapping.",
    icon: <Eye className="w-8 h-8 text-neutral-900" />,
    color: "bg-teal-100"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#Fdfbf7] py-24 sm:py-32 px-4 sm:px-8 font-sans overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-amber-50/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Sticky Header Column */}
        <div className="lg:w-1/3 flex flex-col items-start relative z-20">
          <div className="sticky top-32">
            <span className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-900 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              Capabilities
            </span>
            <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9] mb-6">
              AI<br/>Services.
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-base sm:text-lg">
              Scroll through our infrastructure stack. We don't just use APIs. We build core intelligence infrastructure.
            </p>
          </div>
        </div>

        {/* Internal Scrollable Grid */}
        <div className="lg:w-2/3 relative w-full">
          
          {/* Top/Bottom Fade Masks to indicate more content */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

          {/* Fixed height container with hidden/custom scrollbar */}
          {/* On mobile it shows 1 column, on desktop it shows 2 columns. Height is set so exactly 1 row (2 cards) loads initially. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 h-[420px] sm:h-[450px] overflow-y-auto pr-2 sm:pr-6 custom-scrollbar pb-16 pt-6 scroll-smooth">
            
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="w-full bg-white border border-neutral-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-lg hover:shadow-xl flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 h-[340px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-3">{service.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* Global Style for Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e5e5; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4d4d4; 
        }
      `}} />
    </section>
  );
}
