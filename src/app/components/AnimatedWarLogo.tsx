import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const RED = '#B22234';
const WHITE = '#FFFFFF';
const BLUE = '#3C3B6E';

type Variant = 'hero' | 'footer';

interface AnimatedWarLogoProps {
  variant?: Variant;
}

/** Types out text character by character with a cursor, then keeps cursor blinking. */
function TypewriterLine({
  fullText,
  className,
  delay = 0,
  speed = 60,
}: {
  fullText: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = window.setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (visibleLength >= fullText.length) return;
    const t = window.setTimeout(() => setVisibleLength((n) => n + 1), speed);
    return () => clearTimeout(t);
  }, [started, visibleLength, fullText.length, speed]);

  const visible = fullText.slice(0, visibleLength);
  const isComplete = visibleLength >= fullText.length;

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center gap-x-0.5 ${className ?? ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000, duration: 0.3 }}
    >
      {visible.split('').map((char, i) => {
        const isEpstein = i < 7;
        const isDot = char === '·';
        return (
          <span
            key={`${i}-${char}`}
            className={
              isDot ? 'text-gray-500' : isEpstein ? 'text-[#FF00FF]' : 'text-[#FFD700]'
            }
            style={
              isEpstein ? { textShadow: '0 0 10px rgba(255,0,255,0.5)' } : undefined
            }
          >
            {char}
          </span>
        );
      })}
      {isComplete ? (
        <span
          className="inline-block w-0.5 h-[1em] bg-[#39FF14] animate-pulse ml-0.5 align-middle"
          aria-hidden
        />
      ) : (
        <span className="inline-block ml-0.5 text-[#39FF14] opacity-90" aria-hidden>|</span>
      )}
    </motion.div>
  );
}

function RocketIcon({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 48"
      className={className}
      initial={{ opacity: 0.6, y: 4 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        y: [4, -2, 4],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden
    >
      {/* Flame */}
      <path
        d="M12 44 L8 38 L10 32 L12 28 L14 32 L16 38 Z"
        fill="#FF6600"
        opacity="0.9"
      />
      <path
        d="M12 40 L10 36 L12 32 L14 36 Z"
        fill="#FFD700"
      />
      {/* Body */}
      <ellipse cx="12" cy="20" rx="4" ry="14" fill="#C0C0C0" />
      <rect x="9" y="6" width="6" height="6" rx="1" fill="#555" />
      <circle cx="12" cy="9" r="1.5" fill="#39FF14" />
      {/* Fins */}
      <path d="M8 26 L4 36 L8 34 Z" fill="#888" />
      <path d="M16 26 L20 36 L16 34 Z" fill="#888" />
    </motion.svg>
  );
}

function AmericanFlagStrip({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity }}
      aria-hidden
    >
      <svg viewBox="0 0 60 40" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="usa-red" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={RED} />
            <stop offset="100%" stopColor="#8B0000" />
          </linearGradient>
        </defs>
        {/* 7 red stripes */}
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={`r-${i}`} x="0" y={i * 3.33} width="60" height="3.33" fill="url(#usa-red)" />
        ))}
        {/* 6 white stripes */}
        {[1, 3, 5, 7, 9, 11].map((i) => (
          <rect key={`w-${i}`} x="0" y={i * 3.33} width="60" height="3.33" fill={WHITE} />
        ))}
        {/* Canton */}
        <rect x="0" y="0" width="24" height="16" fill={BLUE} />
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle
              key={`s-${row}-${col}`}
              cx={4 + col * 6}
              cy={3 + row * 5}
              r="1.2"
              fill={WHITE}
            />
          ))
        )}
      </svg>
    </motion.div>
  );
}

function UkFlagStrip({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      aria-hidden
    >
      <svg viewBox="0 0 60 40" className="w-full h-full" preserveAspectRatio="none">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFF" strokeWidth="6" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0 V40 M0 20 H60" stroke="#FFF" strokeWidth="10" />
        <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </motion.div>
  );
}

function IsraelFlagStrip({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      aria-hidden
    >
      <svg viewBox="0 0 60 40" className="w-full h-full" preserveAspectRatio="none">
        <rect width="60" height="40" fill="#FFF" />
        <rect y="14" width="60" height="12" fill="#0038B8" />
        <rect y="17" width="60" height="6" fill="#FFF" />
        <path
          d="M30 12 L32 18 L38 18 L33 22 L35 28 L30 24 L25 28 L27 22 L22 18 L28 18 Z"
          fill="#0038B8"
        />
      </svg>
    </motion.div>
  );
}

export function AnimatedWarLogo({ variant = 'hero' }: AnimatedWarLogoProps) {
  const isHero = variant === 'hero';

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${
        isHero ? 'max-w-2xl md:max-w-4xl mx-auto' : 'w-full'
      }`}
      aria-label="TINY D WAR — Rockets, flags, Epstein in the war"
    >
      {/* Flags row */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className={`overflow-hidden rounded border border-[#FFD700]/50 ${
            isHero ? 'w-16 h-10 md:w-20 md:h-12' : 'w-10 h-6'
          }`}
        >
          <AmericanFlagStrip className="w-full h-full" />
        </div>
        <div
          className={`overflow-hidden rounded border border-[#FFD700]/50 ${
            isHero ? 'w-16 h-10 md:w-20 md:h-12' : 'w-10 h-6'
          }`}
        >
          <UkFlagStrip className="w-full h-full" />
        </div>
        <div
          className={`overflow-hidden rounded border border-[#FFD700]/50 ${
            isHero ? 'w-16 h-10 md:w-20 md:h-12' : 'w-10 h-6'
          }`}
        >
          <IsraelFlagStrip className="w-full h-full" />
        </div>
      </motion.div>

      {/* Rockets around title (hero only) */}
      {isHero && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute left-[5%] top-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <RocketIcon className="w-8 h-16 md:w-10 md:h-20 text-[#39FF14]" delay={0} />
          </motion.div>
          <motion.div
            className="absolute right-[5%] top-1/2 -translate-y-1/2 scale-x-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <RocketIcon className="w-8 h-16 md:w-10 md:h-20 text-[#FF00FF]" delay={0.4} />
          </motion.div>
        </div>
      )}

      {/* Main title */}
      <motion.h1
        className={`font-pixel text-center tracking-wider relative z-10 ${
          isHero
            ? 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl'
            : 'text-xl md:text-2xl'
        }`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          color: '#39FF14',
          textShadow: '0 0 20px rgba(57, 255, 20, 0.6), 0 0 40px rgba(57, 255, 20, 0.3)',
        }}
      >
        <motion.span
          animate={{
            textShadow: [
              '0 0 20px rgba(57, 255, 20, 0.6), 0 0 40px rgba(57, 255, 20, 0.3)',
              '0 0 28px rgba(57, 255, 20, 0.8), 0 0 50px rgba(255, 215, 0, 0.4)',
              '0 0 20px rgba(57, 255, 20, 0.6), 0 0 40px rgba(57, 255, 20, 0.3)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          TINY D WAR
        </motion.span>
      </motion.h1>

      {/* Typewriter: "Epstein · In the war" — like someone typing it */}
      <TypewriterLine
        fullText="EPSTEIN · IN THE WAR"
        className={`mt-2 font-mono ${isHero ? 'text-sm md:text-base' : 'text-xs'}`}
        delay={800}
        speed={80}
      />

      {/* Footer variant: small rocket */}
      {!isHero && (
        <motion.div
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <RocketIcon className="w-6 h-12 text-[#39FF14]" delay={0.2} />
        </motion.div>
      )}
    </div>
  );
}
