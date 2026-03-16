import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

export function VideoPrizeBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative bg-[#1a1a1a] border-4 border-[#FFD700] p-6 md:p-8 text-center
                     shadow-[8px_8px_0px_0px_#FF00FF,inset_0_0_30px_rgba(255,215,0,0.08)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-2 border-2 border-[#FFD700]/30 pointer-events-none" />
          <div className="flex justify-center mb-4">
            <div className="overflow-hidden rounded-xl border-2 border-[#FFD700]/60 bg-[#1a1a1a] p-1 shadow-[0_0_20px_rgba(255,215,0,0.25),inset_0_0_15px_rgba(0,0,0,0.5)]">
              <video
                src="https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs/bafybeid4yu632e5hyv25e4xhoq532vgjttekc7ooa5nzcckmyzkzyiwnvy"
                autoPlay
                loop
                muted
                playsInline
                className="block w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg bg-[#1a1a1a]"
                aria-hidden
              />
            </div>
          </div>
          <Trophy className="w-10 h-10 text-[#FFD700] mx-auto mb-3" aria-hidden />
          <h2 className="font-pixel text-lg md:text-xl text-[#FFD700] mb-2">
            VIDEO CONTEST
          </h2>
          <p className="font-mono text-sm md:text-base text-gray-200 leading-relaxed">
            Most viewed video by <strong className="text-[#39FF14]">March 31st</strong> wins{' '}
            <strong className="text-[#FFD700]">$1,000 in Solana</strong>.
          </p>
          <p className="font-mono text-sm text-[#39FF14] mt-3">
            Post with <span className="text-[#FF00FF] font-bold">#tinydwar</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
