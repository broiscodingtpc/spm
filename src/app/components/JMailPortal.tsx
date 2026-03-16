import { motion } from 'motion/react';
import { ExternalLink, Mail } from 'lucide-react';

const JMailPortalUrl = 'https://www.jmail.world';

export function JMailPortal() {
  return (
    <section className="py-20 px-4 relative" id="jmail-portal">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#39FF14] mb-2 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 md:w-10 md:h-10" aria-hidden />
            JMAIL
          </h2>
          <p className="font-mono text-[#FFD700] text-sm md:text-base">
            Gmail-style viewer for real Epstein emails from public court releases.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-[#0D0D0D] border-8 border-[#39FF14] p-6 md:p-10 text-center shadow-[12px_12px_0px_0px_#FF00FF,inset_0_0_30px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FFD700] pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FFD700] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FFD700] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FFD700] pointer-events-none" />

          <p className="font-mono text-sm text-gray-300 mb-6 leading-relaxed">
            JMail.world is a Gmail-style archive of Epstein-related emails from unsealed court documents and public releases. Browse, search, and read the correspondence in a familiar inbox layout.
          </p>

          <a
            href={JMailPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-pixel text-lg px-8 py-4 bg-[#39FF14] text-[#0D0D0D] border-4 border-[#FFD700] shadow-[6px_6px_0px_0px_#FF00FF] hover:shadow-[8px_8px_0px_0px_#FF00FF] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <ExternalLink className="w-5 h-5" aria-hidden />
            BROWSE EMAILS
          </a>

          <p className="font-mono text-xs text-gray-500 mt-4">
            Opens jmail.world in a new tab
          </p>
        </motion.div>
      </div>
    </section>
  );
}
