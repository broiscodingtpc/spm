import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import logo from 'figma:asset/3f2a2c68445c8264ea8097c75701cf27e5ac9013.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Pixelated Character Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 relative">
          {/* Pixelated character placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14] to-[#FF00FF] opacity-30" 
               style={{ 
                 imageRendering: 'pixelated',
                 clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
               }} />
        </div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Logo Image with Glitch Effect */}
        <motion.div 
          className="mb-12"
          animate={{ 
            filter: [
              'drop-shadow(0 0 20px #39FF14)',
              'drop-shadow(4px 4px 0px #FF00FF) drop-shadow(-4px -4px 0px #39FF14)',
              'drop-shadow(0 0 20px #39FF14)'
            ]
          }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        >
          <img 
            src={logo} 
            alt="TINY D WAR Logo" 
            className="w-full max-w-2xl md:max-w-4xl mx-auto px-4"
            style={{ imageRendering: 'pixelated' }}
          />
          <p className="text-xs md:text-lg font-mono text-[#39FF14] tracking-wider mt-6 px-4">
            [MAXIMUM CHAOS PROTOCOL INITIATED]
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="relative group px-8 md:px-12 py-4 md:py-6 text-base md:text-xl font-pixel text-[#0D0D0D] bg-[#39FF14] 
                     border-4 md:border-8 border-[#FFD700] shadow-[6px_6px_0px_0px_#FF00FF] md:shadow-[8px_8px_0px_0px_#FF00FF]
                     hover:shadow-[8px_8px_0px_0px_#FF00FF] md:hover:shadow-[12px_12px_0px_0px_#FF00FF] 
                     transition-all duration-200
                     hover:translate-x-[-2px] hover:translate-y-[-2px] md:hover:translate-x-[-4px] md:hover:translate-y-[-4px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 border-2 md:border-4 border-[#39FF14] pointer-events-none" />
          <span className="relative flex items-center gap-2 md:gap-3">
            <Zap className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" />
            <span className="hidden sm:inline">DEPLOY CAPITAL</span>
            <span className="sm:hidden">DEPLOY</span>
            <Zap className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" />
          </span>
          {/* Glowing effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-[#39FF14] blur-xl opacity-50" />
          </div>
        </motion.button>

        {/* Crosshair decoration */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 border-2 border-[#FF00FF]" />
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#FF00FF]" />
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#FF00FF]" />
          </div>
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 border-2 border-[#39FF14]" />
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#39FF14]" />
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#39FF14]" />
          </div>
        </div>
      </div>
    </section>
  );
}