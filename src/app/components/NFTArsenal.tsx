import { motion } from 'motion/react';
import { Sparkles, Trophy, Shield } from 'lucide-react';
const char1 = '/images/nftdonald.jpg';
const char2 = '/images/nftbarackobama.jpg';
const char3 = '/images/nftepstein.jpg';
const char4 = '/images/nftnentanyahoo.jpg';

export function NFTArsenal() {
  const characters = [
    {
      image: char1,
      name: 'DONALD DUMP',
      type: 'COOPERATIVE',
      rarity: 'COMMON',
      color: '#39FF14',
      stats: {
        power: 45,
        defense: 30,
        diplomacy: 85
      }
    },
    {
      image: char2,
      name: "BLOCK O'DRAMA",
      type: 'ELITE GAMER DIPLOMAT',
      rarity: 'LEGENDARY',
      color: '#FFD700',
      stats: {
        power: 95,
        defense: 70,
        diplomacy: 99
      }
    },
    {
      image: char3,
      name: 'JEFF ASPEN',
      type: 'VAULT KEEPER',
      rarity: 'EPIC',
      color: '#FF00FF',
      stats: {
        power: 80,
        defense: 90,
        diplomacy: 60
      }
    },
    {
      image: char4,
      name: 'BENJAMIN YAHOO',
      type: 'INTEL OPERATIVE',
      rarity: 'RARE',
      color: '#39FF14',
      stats: {
        power: 65,
        defense: 55,
        diplomacy: 75
      }
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FFD700]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
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
            <div className="flex items-center gap-4 bg-[#0D0D0D] border-8 border-[#FFD700] px-8 py-4
                          shadow-[0_0_40px_rgba(255,215,0,0.5)]">
              <Sparkles className="w-8 h-8 text-[#FFD700]" />
              <h2 className="text-3xl md:text-5xl font-pixel text-[#FFD700]">
                CHARACTER UNITS
              </h2>
              <Sparkles className="w-8 h-8 text-[#FFD700]" />
            </div>
          </div>
          
          <p className="font-mono text-gray-400 text-sm md:text-base">
            {'>'} RARE_NFT_COLLECTION.exe
          </p>
          <p className="font-mono text-[#39FF14] text-xs md:text-sm mt-2">
            [COLLECTIBLE IN-GAME CHARACTERS - PARODY SATIRE UNITS]
          </p>
        </motion.div>

        {/* Character Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Holographic glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `radial-gradient(circle, ${character.color}40, transparent)`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Card Container */}
              <div className="relative bg-[#0D0D0D] border-8 p-2
                            shadow-[0_0_50px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(0,0,0,0.9)]
                            group-hover:scale-105 transition-all duration-300"
                   style={{ borderColor: character.color }}>
                
                {/* Rarity Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 border-4 font-pixel text-xs"
                    style={{ 
                      backgroundColor: '#0D0D0D',
                      borderColor: character.color,
                      color: character.color 
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${character.color}80`,
                        `0 0 20px ${character.color}`,
                        `0 0 10px ${character.color}80`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Trophy className="w-4 h-4" />
                    {character.rarity}
                  </motion.div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4"
                     style={{ borderColor: character.color }} />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4"
                     style={{ borderColor: character.color }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4"
                     style={{ borderColor: character.color }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4"
                     style={{ borderColor: character.color }} />

                {/* Character Image */}
                <div className="relative overflow-hidden bg-[#1a1a1a] border-4 border-[#2a2a2a]">
                  <motion.img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-auto"
                    style={{ imageRendering: 'pixelated' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Holographic shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${character.color}40 50%, transparent 70%)`
                    }}
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </div>

                {/* Stats Panel */}
                <div className="mt-2 bg-[#1a1a1a] border-4 border-[#2a2a2a] p-4">
                  {/* Character Info */}
                  <div className="mb-3 pb-3 border-b-2 border-[#2a2a2a]">
                    <p className="font-pixel text-sm mb-1" style={{ color: character.color }}>
                      {character.name}
                    </p>
                    <p className="font-mono text-xs text-gray-400">
                      UNIT TYPE: {character.type}
                    </p>
                  </div>

                  {/* Stats Bars */}
                  <div className="space-y-2">
                    {Object.entries(character.stats).map(([stat, value]) => (
                      <div key={stat}>
                        <div className="flex justify-between mb-1">
                          <span className="font-mono text-xs text-gray-400 uppercase">
                            {stat}
                          </span>
                          <span className="font-mono text-xs" style={{ color: character.color }}>
                            {value}
                          </span>
                        </div>
                        <div className="h-2 bg-[#0D0D0D] border-2 border-[#2a2a2a]">
                          <motion.div
                            className="h-full"
                            style={{ backgroundColor: character.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Power Level Indicator */}
                  <div className="mt-3 pt-3 border-t-2 border-[#2a2a2a] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" style={{ color: character.color }} />
                      <span className="font-mono text-xs text-gray-400">COMBAT RATING:</span>
                    </div>
                    <motion.span 
                      className="font-pixel text-sm"
                      style={{ color: character.color }}
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {Math.round((character.stats.power + character.stats.defense + character.stats.diplomacy) / 3)}
                    </motion.span>
                  </div>
                </div>

                {/* Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                     }} />

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{ backgroundColor: character.color }}
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: '100%'
                      }}
                      animate={{
                        y: '-20%',
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Edition Number */}
              <div className="absolute -bottom-4 right-4 bg-[#0D0D0D] border-4 px-3 py-1"
                   style={{ borderColor: character.color }}>
                <p className="font-mono text-xs" style={{ color: character.color }}>
                  #{String(index + 1).padStart(3, '0')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Panel */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block">
            <div className="bg-[#1a1a1a] border-8 border-[#39FF14] px-8 py-6
                          shadow-[0_0_30px_rgba(57,255,20,0.3),inset_0_0_20px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-4 mb-4">
                <Sparkles className="w-6 h-6 text-[#FFD700]" />
                <p className="font-pixel text-sm md:text-base text-[#39FF14]">
                  COLLECT ALL UNITS
                </p>
                <Sparkles className="w-6 h-6 text-[#FFD700]" />
              </div>
              
              <p className="font-mono text-xs text-gray-400 mb-2">
                {'>'} Each character is a unique NFT with randomized stats
              </p>
              <p className="font-mono text-xs text-gray-500">
                [PARODY COLLECTION - FOR ENTERTAINMENT ONLY]
              </p>

              <motion.div
                className="mt-4 flex justify-center gap-3"
              >
                <motion.div
                  className="w-3 h-3 bg-[#39FF14]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 bg-[#FF00FF]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 bg-[#FFD700]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
