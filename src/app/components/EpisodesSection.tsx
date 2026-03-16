import { motion } from 'motion/react';
import { Film, Play } from 'lucide-react';

const PINATA_BASE = 'https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs';

const episodes = [
  { src: `${PINATA_BASE}/bafybeiau4lemulyiqgitpayjgxwwxwlaywxbkgkmqv4zchs7k2svwxbpzy`, title: 'Intro Trailer', color: '#39FF14' },
  { src: `${PINATA_BASE}/bafybeiasn3xkdfdfvd32zwggqggo5kkbxltwvdmrbjdtx3c2uw7eyyzbbu`, title: 'Pilot Episode', color: '#FF00FF' },
  { src: `${PINATA_BASE}/bafybeihlktwb4muwj7pv5ej5j6wdny7553msbp4uwkkkoilqz4k457vg2i`, title: 'Episode 1', color: '#FFD700' },
  { src: `${PINATA_BASE}/bafybeifdkp6lzwrxn4zenl3x474qicztwbxwwvsehnxvcdmtwt62zacdx4`, title: 'Episode 2', color: '#39FF14' },
];

export function EpisodesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#FF00FF 2px, transparent 2px), linear-gradient(90deg, #FF00FF 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 bg-[#0D0D0D] border-8 border-[#39FF14] px-8 py-4 shadow-[0_0_30px_rgba(57,255,20,0.5)]">
              <Film className="w-8 h-8 text-[#39FF14]" />
              <h2 className="text-3xl md:text-5xl font-pixel text-[#39FF14]">
                EPISODES
              </h2>
              <Film className="w-8 h-8 text-[#39FF14]" />
            </div>
          </div>
          <p className="font-mono text-gray-400 text-sm md:text-base">
            {'>'} PARODY_SERIES_ARCHIVE.exe
          </p>
          <p className="font-mono text-[#39FF14] text-xs md:text-sm mt-2">
            [WATCH THE SERIES - FOR SATIRICAL PURPOSES ONLY]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.src}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="relative bg-[#0D0D0D] border-8 border-[#2a2a2a] p-4 shadow-[0_0_40px_rgba(0,0,0,0.9)] group-hover:border-opacity-100 transition-all duration-300"
                style={{ borderColor: episode.color }}
              >
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4" style={{ borderColor: episode.color }} />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4" style={{ borderColor: episode.color }} />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4" style={{ borderColor: episode.color }} />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4" style={{ borderColor: episode.color }} />

                <div className="relative overflow-hidden bg-[#1a1a1a] border-4 border-[#2a2a2a]">
                  <video
                    src={episode.src}
                    controls
                    className="w-full aspect-video object-contain bg-black"
                    preload="metadata"
                    playsInline
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0D0D] to-transparent p-3 flex items-center gap-2">
                    <Play className="w-5 h-5 shrink-0" style={{ color: episode.color }} />
                    <span className="font-pixel text-sm" style={{ color: episode.color }}>
                      {episode.title}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="font-mono text-xs text-gray-500">EPISODE_{String(index + 1).padStart(2, '0')}</p>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: episode.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
