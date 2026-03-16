import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { AnimatedWarLogo } from './AnimatedWarLogo';
import { CONTRACT_ADDRESS, hasContractAddress } from '../constants';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCA = useCallback(async () => {
    if (!hasContractAddress()) return;
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, []);

  const canCopy = hasContractAddress();
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
        {/* Animated logo: name, rockets, flags, Epstein in the war */}
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
          <AnimatedWarLogo variant="hero" />
          <p className="text-xs md:text-lg font-mono text-[#39FF14] tracking-wider mt-6 px-4">
            [FOR THE COMMON GOOD — JUSTICE &amp; REMEMBRANCE]
          </p>
          {/* Mission: everyone forgot; we remind; bring justice */}
          <div className="mt-4 px-4 font-mono text-xs md:text-sm text-gray-400 max-w-2xl mx-auto hacker-text space-y-2">
            <p className="text-[#39FF14]/90">
              &gt; This project exists to remind the world. Everyone forgot Epstein and the leaders who harmed children. We bring justice and remembrance.
            </p>
            <p className="text-gray-500">
              Tiny Dick War: those who wage war have something to hide. They want you to forget they raped and killed children. We don&apos;t forget. Epstein is alive — not dead. This Solana project is proof: we remember, we demand accountability.
            </p>
          </div>
        </motion.div>

        {/* CTA: Copy CA — works when contract address is set */}
        <motion.button
          type="button"
          onClick={handleCopyCA}
          disabled={!canCopy}
          title={canCopy ? 'Copy contract address' : 'Contract address posting soon'}
          className={`relative group px-8 md:px-12 py-4 md:py-6 text-base md:text-xl font-pixel text-[#0D0D0D] bg-[#39FF14] 
                     border-4 md:border-8 border-[#FFD700] shadow-[6px_6px_0px_0px_#FF00FF] md:shadow-[8px_8px_0px_0px_#FF00FF]
                     transition-all duration-200
                     ${canCopy ? 'hover:shadow-[8px_8px_0px_0px_#FF00FF] md:hover:shadow-[12px_12px_0px_0px_#FF00FF] hover:translate-x-[-2px] hover:translate-y-[-2px] md:hover:translate-x-[-4px] md:hover:translate-y-[-4px] cursor-pointer' : 'cursor-not-allowed opacity-80'}`}
          whileHover={canCopy ? { scale: 1.05 } : undefined}
          whileTap={canCopy ? { scale: 0.95 } : undefined}
        >
          <div className="absolute inset-0 border-2 md:border-4 border-[#39FF14] pointer-events-none" />
          <span className="relative flex items-center justify-center gap-2 md:gap-3">
            {copied ? (
              <Check className="w-4 h-4 md:w-6 md:h-6" aria-hidden />
            ) : (
              <Copy className="w-4 h-4 md:w-6 md:h-6" aria-hidden />
            )}
            <span className="hidden sm:inline">COPY CA</span>
            <span className="sm:hidden">COPY CA</span>
            {!canCopy && (
              <span className="font-mono text-xs opacity-90">(POSTING SOON)</span>
            )}
          </span>
          {canCopy && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 bg-[#39FF14] blur-xl opacity-50" />
            </div>
          )}
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