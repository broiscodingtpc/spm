import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export function WarningBanner() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative bg-[#1a1a1a] border-8 border-[#FF0000] p-8
                     shadow-[0_0_30px_rgba(255,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Danger stripes */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#FFD700,#FFD700_10px,#0D0D0D_10px,#0D0D0D_20px)]" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#FFD700,#FFD700_10px,#0D0D0D_10px,#0D0D0D_20px)]" />

          {/* Blinking Warning Icons */}
          <div className="flex justify-center gap-8 mb-6">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <AlertTriangle className="w-16 h-16 text-[#FF0000]" fill="#FFD700" />
            </motion.div>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            >
              <AlertTriangle className="w-16 h-16 text-[#FF0000]" fill="#FFD700" />
            </motion.div>
          </div>

          {/* Warning Header */}
          <h3 className="font-pixel text-2xl md:text-3xl text-[#FF0000] text-center mb-6">
            ⚠ CRITICAL WARNING ⚠
          </h3>

          {/* Warning Content */}
          <div className="space-y-4 font-mono text-sm md:text-base">
            <div className="bg-[#0D0D0D] border-4 border-[#2a2a2a] p-4">
              <p className="text-[#39FF14] mb-2">
                {'>'} SYSTEM_ALERT: EXTREME_RISK_PROTOCOL
              </p>
              <p className="text-gray-300 leading-relaxed">
                This token is a MEME COIN created for entertainment purposes only. 
                It has NO INTRINSIC VALUE, NO UTILITY, and should be considered 
                HIGHLY SPECULATIVE and EXTREMELY RISKY.
              </p>
            </div>

            <div className="bg-[#0D0D0D] border-4 border-[#2a2a2a] p-4">
              <p className="text-[#FF00FF] mb-2">
                {'>'} FINANCIAL_DISCLAIMER.exe
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Only invest what you can afford to LOSE COMPLETELY</li>
                <li>• This is NOT financial advice - DYOR (Do Your Own Research)</li>
                <li>• Crypto markets are VOLATILE and UNPREDICTABLE</li>
                <li>• No promises of returns or profits - this is PURE SPECULATION</li>
                <li>• Be prepared for TOTAL LOSS of your investment</li>
              </ul>
            </div>

            <div className="bg-[#0D0D0D] border-4 border-[#2a2a2a] p-4">
              <p className="text-[#FFD700] mb-2">
                {'>'} ENGAGEMENT_RULES.txt
              </p>
              <p className="text-gray-300 leading-relaxed">
                By participating in TINY D WAR, you acknowledge that you understand 
                the risks involved and accept FULL RESPONSIBILITY for your decisions. 
                Have fun, stay safe, and remember: IT'S JUST A MEME! 🚀
              </p>
            </div>
          </div>

          {/* Accept Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-4 font-pixel text-sm bg-[#FF0000] text-white
                             border-4 border-[#FFD700]
                             shadow-[6px_6px_0px_0px_#0D0D0D]
                             hover:shadow-[8px_8px_0px_0px_#0D0D0D]
                             hover:translate-x-[-2px] hover:translate-y-[-2px]
                             transition-all duration-200">
              I UNDERSTAND THE RISKS
            </button>
          </motion.div>

          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-10"
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
               }} />
        </motion.div>
      </div>
    </section>
  );
}
