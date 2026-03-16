import { motion } from 'motion/react';
import { Shield, Target, Lock } from 'lucide-react';

export function IntelligenceTerminal() {
  const stats = [
    {
      icon: Target,
      label: 'TOTAL AMMUNITION',
      value: '1,000,000,000',
      unit: 'ROUNDS',
      color: '#39FF14'
    },
    {
      icon: Shield,
      label: 'WAR TAX',
      value: '0% / 0%',
      unit: 'BUY/SELL',
      color: '#FF00FF'
    },
    {
      icon: Lock,
      label: 'BUNKER SECURITY',
      value: 'LOCKED',
      unit: 'FOREVER',
      color: '#FFD700'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#39FF14] mb-4 relative inline-block">
            <span className="relative z-10">INTELLIGENCE TERMINAL</span>
            <div className="absolute inset-0 bg-[#39FF14] blur-lg opacity-30" />
          </h2>
          <p className="font-mono text-xs text-[#39FF14]/70 tracking-widest uppercase mb-2">
            [ ACCESS GRANTED — SECURE CHANNEL ]
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-[#39FF14] animate-pulse" />
            <div className="w-2 h-2 bg-[#FF00FF] animate-pulse delay-100" />
            <div className="w-2 h-2 bg-[#FFD700] animate-pulse delay-200" />
          </div>
        </motion.div>

        {/* Military Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Cracked Military Tablet Effect */}
                <div className="relative bg-[#1a1a1a] border-8 border-[#2a2a2a] p-6
                              shadow-[inset_0_0_20px_rgba(0,0,0,0.8),8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                  {/* Inner screen effect */}
                  <div className="absolute inset-2 border-4 pointer-events-none"
                       style={{ borderColor: stat.color, opacity: 0.3 }} />
                  
                  {/* Crack effect */}
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="relative p-4 border-4" style={{ borderColor: stat.color }}>
                      <Icon className="w-12 h-12" style={{ color: stat.color }} />
                      <div className="absolute inset-0 blur-md opacity-50" 
                           style={{ backgroundColor: stat.color }} />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-center mb-3">
                    <p className="text-xs font-pixel text-gray-400 mb-2">{stat.label}</p>
                    <p className="text-2xl md:text-3xl font-pixel mb-1" 
                       style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                    <p className="text-xs font-mono text-gray-500">[{stat.unit}]</p>
                  </div>

                  {/* Scanline effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-10"
                       style={{
                         backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                       }} />
                </div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4" 
                     style={{ borderColor: stat.color }} />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4" 
                     style={{ borderColor: stat.color }} />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4" 
                     style={{ borderColor: stat.color }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4" 
                     style={{ borderColor: stat.color }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
