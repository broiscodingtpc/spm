import { motion } from 'motion/react';
import { FileText, ShieldAlert, ExternalLink, Calendar, TrendingDown, Swords } from 'lucide-react';

/** Working PDF links — court unsealed / DOJ / DocumentCloud. Local /documents/ files were HTML from onion, not real PDFs. */
const RELEVANT_DOCUMENTS = [
  {
    id: 'Manifesto',
    label: 'War, Epstein & the Children — Memoire & Manifesto (essay)',
    url: '/WAR_EPSTEIN_MEMOIRE.md',
  },
  {
    id: 'EFTA00009116',
    label: 'Epstein unsealed docs (DocumentCloud)',
    url: 'https://s3.documentcloud.org/documents/24351995/1824-epstein-documents.pdf',
  },
  {
    id: 'Full release',
    label: 'Epstein documents full (Newsweek)',
    url: 'https://assets.newsweek.com/wp-content/uploads/2025/08/468909-jeffrey-epstein-documents-full.pdf',
  },
  {
    id: 'DOJ',
    label: 'DOJ Epstein disclosures',
    url: 'https://www.justice.gov/epstein/doj-disclosures',
  },
];

export function DocumentVault() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#FFD700] mb-4">
            THE DOCUMENT VAULT
          </h2>
          <p className="font-mono text-[#39FF14]">
            {'>'} CLASSIFIED_INTEL_EPSTEIN_PUBLIC_RECORD.txt
          </p>
        </motion.div>

        <motion.div
          className="relative bg-[#1a1a1a] border-8 border-[#FF00FF] p-6 md:p-8
                     shadow-[12px_12px_0px_0px_#39FF14,inset_0_0_30px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-4 border-4 border-[#2a2a2a] pointer-events-none" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#39FF14]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#39FF14]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#39FF14]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#39FF14]" />

          <div className="relative space-y-6">
            {/* Headline */}
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-8 h-8 text-[#FFD700] flex-shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-pixel text-xl text-[#FFD700] mb-2">
                  WE GOT HOLD OF THE EPSTEIN FILES
                </h3>
                <p className="font-mono text-sm text-gray-300 leading-relaxed">
                  For the common good: don&apos;t forget the children. Don&apos;t forget what leaders did. Public court documents and DOJ releases name world leaders, billionaires, and politicians. Epstein&apos;s network—flight logs, emails, island visits—is in the public record. They use war to mask everything; when the files drop, headlines switch to conflict and interest in the documents drops. We remember. We demand justice. Epstein is alive — not dead.
                </p>
              </div>
            </div>

            {/* Relevant files — direct PDF / DOJ links that load in browser */}
            <div>
              <h4 className="font-pixel text-sm text-[#39FF14] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                RELEVANT FILES — OPEN IN BROWSER
              </h4>
              <p className="font-mono text-xs text-gray-500 mb-3">
                Local copies from the onion server were HTML, not PDFs. Use these verified sources so documents actually load.
              </p>
              <div className="space-y-2">
                {RELEVANT_DOCUMENTS.map((doc, index) => (
                  <motion.a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 bg-[#0D0D0D] border-2 border-[#2a2a2a] px-4 py-3 font-mono text-sm text-gray-300 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-[#FFD700]">{doc.id}</span>
                    <span className="truncate flex-1 mx-2">{doc.label}</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 text-[#39FF14]" aria-hidden />
                  </motion.a>
                ))}
              </div>
              <p className="font-mono text-xs text-gray-500 mt-3">
                DocumentCloud: 2024 unsealed batch. Newsweek: full document set. DOJ: official Epstein Files Transparency Act disclosures.
              </p>
              <p className="font-mono text-xs text-gray-500 mt-2">
                Browse the Gmail-style Epstein email portal in the <strong className="text-[#39FF14]">JMAIL PORTAL</strong> section below.
              </p>
            </div>

            {/* War connection timeline */}
            <div className="border-2 border-[#FF00FF] bg-[#0D0D0D]/80 p-4 rounded">
              <h4 className="font-pixel text-base text-[#FF00FF] mb-4 flex items-center gap-2">
                <Swords className="w-5 h-5" />
                THE WAR CONNECTION — DOCUMENTED TIMELINE
              </h4>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#39FF14] flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-[#FFD700]">Jan 30, 2026</strong> — DOJ releases millions of Epstein pages (EFTA / court docs). Headlines focus on names, flight logs, evidence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#39FF14] flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-[#FFD700]">Feb 28, 2026</strong> — US–Israel military strikes on Iran. News cycle flips to war.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 text-[#FF00FF] flex-shrink-0 mt-0.5" aria-hidden />
                  <span><strong className="text-[#FFD700]">Result (Google Trends)</strong> — Interest in &quot;Epstein files&quot; drops <strong className="text-[#FF00FF]">~95%</strong>; Iran conflict searches spike <strong className="text-[#FF00FF]">~1,200%</strong>. Same pattern every time: documents drop, then war.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span><strong className="text-[#FFD700]">Newsweek poll (Mar 2026)</strong> — <strong className="text-[#39FF14]">52%</strong> of likely voters believe the Iran war was at least partly launched to distract from the Epstein scandal (81% Democrats, 52% independents).</span>
                </li>
              </ul>
              <p className="font-mono text-xs text-gray-500 mt-3">
                Sources: IBTimes, Newsweek, Al Jazeera, NPR, CBS. The documents above (EFTA00009116 and the rest) are part of this story — when they surface, conflict follows.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="https://www.ibtimes.co.uk/epstein-files-interest-drops-amid-us-israel-strikes-1784056" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-[#39FF14] hover:text-[#FFD700]">
                  <ExternalLink className="w-3 h-3" /> IBTimes: 95% drop
                </a>
                <a href="https://www.newsweek.com/epstein-files-linked-to-donald-trumps-iran-war-most-voters-say-11663251" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-[#39FF14] hover:text-[#FFD700]">
                  <ExternalLink className="w-3 h-3" /> Newsweek: 52% poll
                </a>
                <a href="https://www.aljazeera.com/news/2026/3/4/analyst-says-interest-in-epstein-files-plummeted-after-war-on-iran-launched" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-[#39FF14] hover:text-[#FFD700]">
                  <ExternalLink className="w-3 h-3" /> Al Jazeera: analyst
                </a>
              </div>
            </div>

            {/* Sources */}
            <div className="pt-4 border-t-2 border-[#2a2a2a]">
              <p className="font-mono text-xs text-gray-500 mb-2">
                Read the public record: court unsealed docs (Guardian, TIME), DOJ releases, flight logs.
                War as distraction narrative: Newsweek, IBTimes, Reuters.
              </p>
              <a
                href="https://www.theguardian.com/us-news/2024/jan/03/jeffrey-epstein-documents-list-pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#39FF14] hover:text-[#FFD700] transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Epstein documents (Guardian)
              </a>
            </div>
          </div>

          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
