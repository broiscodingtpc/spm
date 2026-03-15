import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Armory() {
  const steps = [
    {
      number: '01',
      title: 'ACQUIRE WALLET',
      description: 'Download MetaMask or Phantom wallet extension',
      command: '> INSTALL_DEFENSE_PROTOCOL.exe'
    },
    {
      number: '02',
      title: 'LOAD AMMUNITION',
      description: 'Purchase ETH or SOL from an exchange',
      command: '> TRANSFER_FUNDS_TO_WALLET.bat'
    },
    {
      number: '03',
      title: 'CONNECT TO DEX',
      description: 'Navigate to Uniswap or Raydium',
      command: '> ESTABLISH_TRADING_LINK.sh'
    },
    {
      number: '04',
      title: 'DEPLOY CAPITAL',
      description: 'Swap for TINY D WAR tokens',
      command: '> EXECUTE_SWAP_PROTOCOL.exe'
    },
    {
      number: '05',
      title: 'HOLD THE LINE',
      description: 'Store securely in your wallet and HODL',
      command: '> DIAMOND_HANDS_MODE_ACTIVATED'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#FFD700] mb-4">
            THE ARMORY
          </h2>
          <p className="font-mono text-[#39FF14]">
            {'>'} WEAPONS_ACQUISITION_GUIDE.txt
          </p>
        </motion.div>

        {/* RPG Dialogue Box Container */}
        <motion.div
          className="relative bg-[#1a1a1a] border-8 border-[#FFD700] p-8
                     shadow-[12px_12px_0px_0px_#FF00FF,inset_0_0_30px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Inner border */}
          <div className="absolute inset-4 border-4 border-[#2a2a2a] pointer-events-none" />
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#39FF14]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#39FF14]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#39FF14]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#39FF14]" />

          {/* Steps */}
          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-6 items-start group">
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 border-4 border-[#39FF14] bg-[#0D0D0D] 
                                  flex items-center justify-center
                                  shadow-[4px_4px_0px_0px_#FF00FF]
                                  group-hover:shadow-[6px_6px_0px_0px_#FF00FF]
                                  transition-all duration-200">
                      <span className="font-pixel text-xl text-[#39FF14]">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-pixel text-lg text-[#FFD700] mb-2 flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      {step.title}
                    </h3>
                    <p className="font-mono text-sm text-gray-300 mb-2">
                      {step.description}
                    </p>
                    <div className="bg-[#0D0D0D] border-2 border-[#2a2a2a] p-3 font-mono text-xs">
                      <span className="text-[#FF00FF]">C:\TINYD_WAR{'>'}</span>
                      <span className="text-[#39FF14] ml-2">{step.command}</span>
                      <motion.span
                        className="inline-block w-2 h-4 bg-[#39FF14] ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="ml-8 mt-2 mb-2 h-4 w-0.5 bg-[#2a2a2a]" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10"
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
               }} />

          {/* Bottom navigation prompt */}
          <motion.div
            className="mt-8 pt-6 border-t-2 border-[#2a2a2a] font-mono text-sm text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[#39FF14]">▼ PRESS ANY KEY TO CONTINUE ▼</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
