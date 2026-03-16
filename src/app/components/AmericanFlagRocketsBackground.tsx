import { motion } from 'motion/react';

const RED = '#B22234';
const WHITE = '#FFFFFF';
const BLUE = '#3C3B6E';

/** 50-star pattern: alternating rows of 6 and 5 stars */
function StarField() {
  const stars: { cx: number; cy: number }[] = [];
  for (let row = 0; row < 9; row++) {
    const count = row % 2 === 0 ? 6 : 5;
    const cy = 6 + row * 7;
    const startX = row % 2 === 0 ? 9 : 18;
    for (let col = 0; col < count; col++) {
      stars.push({ cx: startX + col * 18, cy });
    }
  }
  return (
    <>
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r="2" fill={WHITE} />
      ))}
    </>
  );
}

function ExplosionSprite({ className, delay }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: [0.6, 1, 0.9, 1],
        opacity: [0, 0.2, 0.12, 0.18],
      }}
      transition={{
        duration: 3,
        delay: delay ?? 0,
        repeat: Infinity,
        repeatDelay: 2,
        ease: 'easeOut',
      }}
    >
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Outer glow / smoke */}
        <circle cx="40" cy="40" r="38" fill="#333" opacity="0.5" />
        <circle cx="40" cy="40" r="32" fill="#444" opacity="0.4" />
        {/* Rays */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 40 + Math.cos(a) * 15;
          const y1 = 40 + Math.sin(a) * 15;
          const x2 = 40 + Math.cos(a) * 36;
          const y2 = 40 + Math.sin(a) * 36;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FF6600"
              strokeWidth="2"
              opacity="0.6"
            />
          );
        })}
        {/* Core */}
        <circle cx="40" cy="40" r="8" fill="#FFD700" opacity="0.7" />
        <circle cx="40" cy="40" r="4" fill="#FFF" opacity="0.9" />
      </svg>
    </motion.div>
  );
}

export function AmericanFlagRocketsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      {/* American flag — detailed stripes + canton */}
      <div className="absolute inset-0">
        {/* 13 stripes (7 red, 6 white) */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${RED} 0%, ${RED} 7.69%, ${WHITE} 7.69%, ${WHITE} 15.38%, ${RED} 15.38%, ${RED} 23.07%, ${WHITE} 23.07%, ${WHITE} 30.76%, ${RED} 30.76%, ${RED} 38.45%, ${WHITE} 38.45%, ${WHITE} 46.14%, ${RED} 46.14%, ${RED} 53.83%, ${WHITE} 53.83%, ${WHITE} 61.52%, ${RED} 61.52%, ${RED} 69.21%, ${WHITE} 69.21%, ${WHITE} 76.9%, ${RED} 76.9%, ${RED} 84.59%, ${WHITE} 84.59%, ${WHITE} 92.28%, ${RED} 92.28%, ${RED} 100%)`,
          }}
        />
        {/* Canton with 50 stars (proper pattern) */}
        <div className="absolute top-0 left-0 w-[40%] min-w-[200px] h-[52%] opacity-[0.22]">
          <svg className="w-full h-full" viewBox="0 0 110 70" preserveAspectRatio="xMinYMin slice">
            <defs>
              <linearGradient id="canton-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={BLUE} />
                <stop offset="100%" stopColor="#2a2960" />
              </linearGradient>
            </defs>
            <rect width="110" height="70" fill="url(#canton-blue)" />
            <StarField />
          </svg>
        </div>
      </div>

      {/* Discrete explosions — scattered, low opacity */}
      <ExplosionSprite className="absolute top-[8%] left-[12%] w-24 h-24 opacity-30" delay={0} />
      <ExplosionSprite className="absolute top-[22%] right-[15%] w-20 h-20 opacity-25" delay={0.8} />
      <ExplosionSprite className="absolute top-[45%] left-[8%] w-16 h-16 opacity-20" delay={1.6} />
      <ExplosionSprite className="absolute top-[65%] right-[10%] w-28 h-28 opacity-25" delay={0.4} />
      <ExplosionSprite className="absolute top-[80%] left-[18%] w-18 h-18 opacity-22" delay={2} />
      <ExplosionSprite className="absolute top-[35%] right-[28%] w-14 h-14 opacity-18" delay={1.2} />
      <ExplosionSprite className="absolute top-[12%] right-[5%] w-20 h-20 opacity-20" delay={2.4} />

      {/* Emotional: For the children — discrete, dignified */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <p className="font-mono text-sm md:text-base text-white/90 tracking-[0.3em] uppercase text-center max-w-xl">
          For the children. We remember.
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-4 md:left-8 max-w-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <p className="font-mono text-[10px] md:text-xs text-white/80 leading-relaxed">
          Don&apos;t forget them. Justice for every child.
        </p>
      </motion.div>
    </div>
  );
}
