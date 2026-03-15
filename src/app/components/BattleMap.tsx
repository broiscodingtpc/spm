import { motion } from 'motion/react';
import { Bomb, Flag, Mountain, Rocket, Shield, Skull, Target, Trophy } from 'lucide-react';
import { useRef } from 'react';

export function BattleMap() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { icon: Bomb, title: 'BOOTCAMP', status: 'COMPLETE', color: '#39FF14' },
    { icon: Target, title: 'RECRUITMENT', status: 'COMPLETE', color: '#39FF14' },
    { icon: Shield, title: 'FORTIFICATION', status: 'IN PROGRESS', color: '#FFD700' },
    { icon: Rocket, title: 'AIR STRIKE', status: 'LOCKED', color: '#FF00FF' },
    { icon: Mountain, title: 'TERRITORY CLAIM', status: 'LOCKED', color: '#FF00FF' },
    { icon: Skull, title: 'ANNIHILATION', status: 'LOCKED', color: '#FF00FF' },
    { icon: Flag, title: 'OCCUPATION', status: 'LOCKED', color: '#FF00FF' },
    { icon: Trophy, title: 'GLOBAL DOMINATION', status: 'LOCKED', color: '#FF00FF' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#FF00FF] mb-4">
            THE BATTLE MAP
          </h2>
          <p className="font-mono text-[#39FF14]">
            {'>'} MISSION OBJECTIVES_INITIALIZED...
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-20 h-full 
                         bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-20 h-full 
                         bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />

          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-8 scrollbar-custom"
          >
            <div className="flex gap-8 min-w-max px-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isComplete = milestone.status === 'COMPLETE';
                const isInProgress = milestone.status === 'IN PROGRESS';

                return (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Connection Line */}
                    {index < milestones.length - 1 && (
                      <div className="absolute top-16 left-1/2 w-32 h-1 bg-[#2a2a2a]">
                        <motion.div
                          className="h-full bg-[#39FF14]"
                          initial={{ width: 0 }}
                          whileInView={{ width: isComplete ? '100%' : '0%' }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    )}

                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div 
                        className="w-32 h-32 border-8 flex items-center justify-center relative
                                   shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
                        style={{ 
                          borderColor: milestone.color,
                          backgroundColor: '#1a1a1a'
                        }}
                      >
                        <Icon 
                          className="w-16 h-16 relative z-10" 
                          style={{ color: milestone.color }}
                        />
                        
                        {/* Glow effect */}
                        {(isComplete || isInProgress) && (
                          <motion.div
                            className="absolute inset-0 blur-xl opacity-50"
                            style={{ backgroundColor: milestone.color }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}

                        {/* Scanlines */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                             style={{
                               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                             }} />

                        {/* Status indicator */}
                        {isInProgress && (
                          <motion.div
                            className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD700] border-2 border-[#0D0D0D]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Corner brackets */}
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#FFD700]" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#FFD700]" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#FFD700]" />
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#FFD700]" />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                      <p className="font-pixel text-sm mb-2" style={{ color: milestone.color }}>
                        {milestone.title}
                      </p>
                      <div className="px-3 py-1 border-2 border-[#2a2a2a] bg-[#1a1a1a]">
                        <p className="font-mono text-xs text-gray-400">
                          [{milestone.status}]
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
