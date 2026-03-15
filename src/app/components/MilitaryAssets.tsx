import { motion } from 'motion/react';

export function FloatingMissile({ delay = 0, direction = 'left' }: { delay?: number; direction?: 'left' | 'right' }) {
  return (
    <motion.div
      className="absolute"
      initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
      animate={{ 
        x: direction === 'left' ? 100 : -100,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 8,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 10
      }}
    >
      <svg width="64" height="24" viewBox="0 0 64 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        {/* Missile body */}
        <rect x="8" y="8" width="48" height="8" fill="#808080" />
        {/* Nose cone */}
        <polygon points="56,8 64,12 56,16" fill="#606060" />
        {/* Fins */}
        <polygon points="8,8 8,4 16,8" fill="#505050" />
        <polygon points="8,16 8,20 16,16" fill="#505050" />
        {/* Fire trail */}
        <rect x="0" y="10" width="8" height="4" fill="#FF6600" />
        <rect x="2" y="11" width="6" height="2" fill="#FFD700" />
      </svg>
    </motion.div>
  );
}

export function FloatingTank({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute"
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" style={{ imageRendering: 'pixelated' }}>
        {/* Tank body */}
        <rect x="8" y="16" width="32" height="12" fill="#4a4a4a" />
        {/* Turret */}
        <rect x="16" y="8" width="16" height="8" fill="#3a3a3a" />
        {/* Barrel */}
        <rect x="32" y="10" width="16" height="4" fill="#2a2a2a" />
        {/* Treads */}
        <rect x="4" y="24" width="40" height="4" fill="#1a1a1a" />
        <rect x="6" y="26" width="4" height="2" fill="#39FF14" />
        <rect x="14" y="26" width="4" height="2" fill="#39FF14" />
        <rect x="22" y="26" width="4" height="2" fill="#39FF14" />
        <rect x="30" y="26" width="4" height="2" fill="#39FF14" />
        <rect x="38" y="26" width="4" height="2" fill="#39FF14" />
      </svg>
    </motion.div>
  );
}

export function FloatingJet({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute"
      initial={{ x: -100, y: 0 }}
      animate={{ 
        x: window.innerWidth + 100,
        y: [0, -20, 0, -15, 0]
      }}
      transition={{
        duration: 12,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 15
      }}
    >
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" style={{ imageRendering: 'pixelated' }}>
        {/* Fuselage */}
        <rect x="16" y="12" width="24" height="8" fill="#505050" />
        {/* Nose */}
        <polygon points="40,12 48,16 40,20" fill="#404040" />
        {/* Wings */}
        <polygon points="20,12 20,4 28,12" fill="#3a3a3a" />
        <polygon points="20,20 20,28 28,20" fill="#3a3a3a" />
        {/* Tail */}
        <polygon points="16,12 16,8 20,12" fill="#3a3a3a" />
        <polygon points="16,20 16,24 20,20" fill="#3a3a3a" />
        {/* Engine glow */}
        <rect x="12" y="14" width="4" height="4" fill="#FF6600" />
        <rect x="14" y="15" width="2" height="2" fill="#FFD700" />
      </svg>
    </motion.div>
  );
}
