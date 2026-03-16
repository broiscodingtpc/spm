import { motion } from 'motion/react';

export function HackerBanner() {
  return (
    <div className="relative z-40 border-b-2 border-[#39FF14]/50 bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-xs md:text-sm">
        <span className="text-[#39FF14] tracking-widest uppercase">
          For the common good.
        </span>
        <span className="text-gray-500 hidden sm:inline">|</span>
        <span className="text-gray-400">
          Don&apos;t forget the children. Don&apos;t forget what leaders did. Justice.
        </span>
        <span className="text-gray-500 hidden sm:inline">|</span>
        <span className="text-[#39FF14]/90">
          We remember. We demand accountability. Epstein is alive — not dead.
        </span>
        <span className="terminal-cursor-blink text-[#39FF14] ml-0.5" aria-hidden />
      </div>
      {/* Subtle scan line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"
        aria-hidden
      />
    </div>
  );
}
