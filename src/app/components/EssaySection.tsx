import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ESSAY_MARKDOWN } from '../content/essay';

export function EssaySection() {
  return (
    <section className="py-20 px-4 relative" id="essay">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#FFD700] mb-2">
            THE ESSAY
          </h2>
          <p className="font-mono text-[#39FF14] text-sm md:text-base">
            War, Epstein & the Children — Memoire & Manifesto
          </p>
        </motion.div>

        <motion.div
          className="relative bg-[#0D0D0D] border-8 border-[#39FF14] p-6 md:p-10
                     shadow-[12px_12px_0px_0px_#FF00FF,inset_0_0_30px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FFD700]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FFD700]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FFD700]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FFD700]" />

          <article className="essay-prose relative font-mono text-sm md:text-base text-gray-200 leading-relaxed [&_h1]:font-pixel [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:text-[#39FF14] [&_h1]:mt-8 [&_h1]:mb-3 [&_h1]:border-b [&_h1]:border-[#39FF14]/50 [&_h1]:pb-2 [&_h2]:font-pixel [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:text-[#FFD700] [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:font-pixel [&_h3]:text-lg [&_h3]:text-[#FF00FF] [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:my-3 [&_ul]:my-3 [&_li]:my-1 [&_strong]:text-[#39FF14] [&_em]:text-gray-400 [&_table]:border-collapse [&_th]:border [&_th]:border-[#39FF14]/50 [&_th]:bg-[#1a1a1a] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border [&_td]:border-[#2a2a2a] [&_td]:px-3 [&_td]:py-2 [&_a]:text-[#39FF14] [&_a]:underline hover:[&_a]:text-[#FFD700] [&_hr]:border-[#2a2a2a] [&_hr]:my-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {ESSAY_MARKDOWN}
            </ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
