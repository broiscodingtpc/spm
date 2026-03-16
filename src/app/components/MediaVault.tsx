import { motion } from 'motion/react';
import { Film, Gamepad2, Tv } from 'lucide-react';
const poster1 = '/images/parodieseriescomming%20soon.jpg';
const poster2 = '/images/gamecommingsoon.jpg';
const poster3 = '/images/seriesimage.jpg';

export function MediaVault() {
  const posters = [
    {
      image: poster1,
      title: 'PARODY SERIES',
      type: 'TV SERIES',
      icon: Tv,
      tagline: 'COMING TO A VAULT NEAR YOU',
      color: '#FF00FF'
    },
    {
      image: poster2,
      title: 'TINY D OF DUTY',
      type: 'VIDEO GAME',
      icon: Gamepad2,
      tagline: 'SOLANA BLOCKCHAIN PREMIERE',
      color: '#39FF14'
    },
    {
      image: poster3,
      title: 'ARE YOU A PUPPET?',
      type: 'TV SERIES',
      icon: Film,
      tagline: '#TINYDW',
      color: '#FFD700'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(#39FF14 2px, transparent 2px), linear-gradient(90deg, #39FF14 2px, transparent 2px)',
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 bg-[#0D0D0D] border-8 border-[#FF00FF] px-8 py-4
                          shadow-[0_0_30px_rgba(255,0,255,0.5)]">
              <Film className="w-8 h-8 text-[#FF00FF]" />
              <h2 className="text-3xl md:text-5xl font-pixel text-[#FF00FF]">
                MEDIA VAULT
              </h2>
              <Film className="w-8 h-8 text-[#FF00FF]" />
            </div>
          </div>
          
          <p className="font-mono text-gray-400 text-sm md:text-base">
            {'>'} CLASSIFIED_ENTERTAINMENT.exe
          </p>
          <p className="font-mono text-[#39FF14] text-xs md:text-sm mt-2">
            [PARODY PRODUCTIONS - FOR SATIRICAL PURPOSES ONLY]
          </p>
        </motion.div>

        {/* Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posters.map((poster, index) => {
            const Icon = poster.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Poster Frame */}
                <div className="relative bg-[#0D0D0D] border-8 border-[#2a2a2a] p-4
                              shadow-[0_0_40px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(0,0,0,0.8)]
                              group-hover:border-opacity-100 transition-all duration-300"
                     style={{ borderColor: poster.color, borderOpacity: 0.5 }}>
                  
                  {/* Corner Brackets */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4"
                       style={{ borderColor: poster.color }} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4"
                       style={{ borderColor: poster.color }} />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4"
                       style={{ borderColor: poster.color }} />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4"
                       style={{ borderColor: poster.color }} />

                  {/* Poster Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent
                                  opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* "CLASSIFIED" stamp */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <div className="border-4 px-4 py-2 rotate-12 font-pixel text-xs"
                           style={{ 
                             borderColor: poster.color,
                             color: poster.color,
                             backgroundColor: 'rgba(13, 13, 13, 0.8)'
                           }}>
                        COMING SOON
                      </div>
                    </motion.div>
                  </div>

                  {/* Info Panel */}
                  <div className="mt-4 bg-[#1a1a1a] border-4 border-[#0D0D0D] p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6" style={{ color: poster.color }} />
                      <div className="flex-1">
                        <p className="font-pixel text-xs text-gray-400 mb-1">
                          {poster.type}
                        </p>
                        <p className="font-mono text-xs" style={{ color: poster.color }}>
                          {poster.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: poster.color }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <p className="font-mono text-xs text-gray-500">
                        STATUS: IN_PRODUCTION
                      </p>
                    </div>
                  </div>

                  {/* Scanlines effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-10"
                       style={{
                         backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                       }} />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      boxShadow: `inset 0 0 50px ${poster.color}`
                    }}
                  />
                </div>

                {/* Floating label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                              bg-[#0D0D0D] border-4 px-6 py-2 whitespace-nowrap
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ borderColor: poster.color }}>
                  <p className="font-pixel text-xs" style={{ color: poster.color }}>
                    {poster.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block">
            <div className="bg-[#1a1a1a] border-8 border-[#FFD700] px-8 py-6
                          shadow-[0_0_30px_rgba(255,215,0,0.3),inset_0_0_20px_rgba(0,0,0,0.8)]">
              <p className="font-mono text-sm text-gray-300 mb-2">
                <span className="text-[#FFD700]">{'>'} DISCLAIMER:</span> All media is PARODY and SATIRE.
              </p>
              <p className="font-mono text-xs text-gray-500">
                Not affiliated with any actual productions, studios, or franchises.
              </p>
              <motion.div
                className="mt-4 flex justify-center gap-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-[#FF00FF]" />
                <div className="w-2 h-2 bg-[#39FF14]" />
                <div className="w-2 h-2 bg-[#FFD700]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
