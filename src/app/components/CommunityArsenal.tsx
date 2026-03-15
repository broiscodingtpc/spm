import { motion } from 'motion/react';
import { Users, Rocket, TrendingUp, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CommunityArsenal() {
  const [counts, setCounts] = useState({
    holders: 0,
    volume: 0,
    burned: 0,
    raids: 0
  });

  useEffect(() => {
    // Animate counters
    const targets = {
      holders: 13337,
      volume: 420690,
      burned: 50,
      raids: 999
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        holders: Math.floor(targets.holders * progress),
        volume: Math.floor(targets.volume * progress),
        burned: Math.floor(targets.burned * progress),
        raids: Math.floor(targets.raids * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      label: 'ACTIVE SOLDIERS',
      value: counts.holders.toLocaleString(),
      suffix: 'TROOPS',
      color: '#39FF14',
      glow: 'rgba(57, 255, 20, 0.5)'
    },
    {
      icon: TrendingUp,
      label: '24H WAR FUNDS',
      value: `$${(counts.volume / 1000).toFixed(1)}K`,
      suffix: 'USD',
      color: '#FF00FF',
      glow: 'rgba(255, 0, 255, 0.5)'
    },
    {
      icon: Flame,
      label: 'SUPPLY BURNED',
      value: `${counts.burned}%`,
      suffix: 'DESTROYED',
      color: '#FF6600',
      glow: 'rgba(255, 102, 0, 0.5)'
    },
    {
      icon: Rocket,
      label: 'RAIDS COMPLETED',
      value: counts.raids.toLocaleString(),
      suffix: 'MISSIONS',
      color: '#FFD700',
      glow: 'rgba(255, 215, 0, 0.5)'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#39FF14] mb-4">
            COMMUNITY ARSENAL
          </h2>
          <p className="font-mono text-gray-400">
            {'>'} REAL-TIME_BATTLEFIELD_STATS.exe
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Command Panel */}
                <div className="relative bg-[#0D0D0D] border-8 border-[#2a2a2a] p-6
                              shadow-[inset_0_0_30px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.5)]
                              overflow-hidden group hover:border-opacity-100 transition-all duration-300"
                     style={{ borderColor: stat.color, borderOpacity: 0.5 }}>
                  
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundColor: stat.color }}
                    animate={{
                      boxShadow: [
                        `inset 0 0 20px ${stat.glow}`,
                        `inset 0 0 40px ${stat.glow}`,
                        `inset 0 0 20px ${stat.glow}`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Corner indicators */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
                       style={{ borderColor: stat.color }} />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2"
                       style={{ borderColor: stat.color }} />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2"
                       style={{ borderColor: stat.color }} />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
                       style={{ borderColor: stat.color }} />

                  {/* Icon */}
                  <div className="relative flex justify-center mb-4">
                    <div className="relative">
                      <Icon className="w-12 h-12 relative z-10" style={{ color: stat.color }} />
                      <motion.div
                        className="absolute inset-0 blur-lg"
                        style={{ backgroundColor: stat.color }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-xs font-pixel text-gray-400 mb-3 text-center tracking-tight leading-relaxed">
                    {stat.label}
                  </p>

                  {/* Value */}
                  <div className="relative">
                    <div className="bg-[#1a1a1a] border-4 border-[#0D0D0D] p-3 mb-2">
                      <p className="text-3xl font-pixel text-center" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-xs font-mono text-center text-gray-500">
                      [{stat.suffix}]
                    </p>
                  </div>

                  {/* Status bar */}
                  <div className="mt-4 h-2 bg-[#1a1a1a] border-2 border-[#2a2a2a] overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: stat.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>

                  {/* Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-10"
                       style={{
                         backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                       }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status Line */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-block bg-[#1a1a1a] border-4 border-[#39FF14] px-8 py-4
                         shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <p className="font-mono text-sm">
              <span className="text-[#39FF14]">{'>'} STATUS:</span>
              <motion.span 
                className="ml-2 text-[#FFD700]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ALL SYSTEMS OPERATIONAL
              </motion.span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
