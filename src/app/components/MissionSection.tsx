import { motion } from 'motion/react';
import { Scale, Calendar, AlertCircle } from 'lucide-react';

const REAL_FACTS = [
  { date: 'Jul 2019', fact: 'Jeffrey Epstein arrested on federal sex trafficking charges; victims were minors.' },
  { date: 'Aug 2019', fact: 'Epstein found dead in jail; official ruling: suicide. Many question the narrative — witnesses, cameras, and evidence remain disputed. We believe he is alive.' },
  { date: 'Dec 2023 – Jan 2024', fact: 'Court orders unsealing of Epstein documents (Giuffre v. Maxwell). Hundreds of names: world leaders, billionaires, politicians, royalty.' },
  { date: 'Jan 2026', fact: 'DOJ releases millions of Epstein investigation pages under the Epstein Files Transparency Act. Flight logs, emails, and evidence go public.' },
  { date: 'Ongoing', fact: 'War and conflict repeatedly dominate headlines when documents drop. Interest in Epstein and victims drops; the world is distracted. We don\'t forget.' },
];

export function MissionSection() {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-pixel text-[#FFD700] mb-2">
            WHY TINY DICK WAR
          </h2>
          <p className="font-mono text-[#39FF14] text-sm">
            {'>'} FOR THE COMMON GOOD — JUSTICE & REMEMBRANCE
          </p>
        </motion.div>

        <motion.div
          className="relative bg-[#1a1a1a] border-8 border-[#39FF14] p-6 md:p-8
                     shadow-[8px_8px_0px_0px_#FF00FF,inset_0_0_20px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-4 border-4 border-[#2a2a2a] pointer-events-none" />

          <div className="relative space-y-6">
            <div className="flex items-start gap-3">
              <Scale className="w-8 h-8 text-[#FF00FF] flex-shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-pixel text-lg text-[#FFD700] mb-2">
                  Those with small dicks wage war so you forget.
                </h3>
                <p className="font-mono text-sm text-gray-300 leading-relaxed">
                  They raped and killed children. They use war and chaos to bury the truth. This project is on Solana to prove we remember: we don&apos;t forget the victims, we don&apos;t forget the names in the documents, and we don&apos;t accept that Epstein is dead. He is alive. Accountability is due.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-pixel text-sm text-[#39FF14] mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                REAL DATES — EPSTEIN, DOCUMENTS, VICTIMS
              </h4>
              <ul className="space-y-3">
                {REAL_FACTS.map((item, index) => (
                  <li key={index} className="flex gap-3 font-mono text-sm">
                    <span className="text-[#FFD700] shrink-0">{item.date}</span>
                    <span className="text-gray-400">{item.fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t-2 border-[#2a2a2a]">
              <AlertCircle className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-0.5" aria-hidden />
              <p className="font-mono text-xs text-gray-500">
                This site is for the common good. We are not Anonymous. We are people who remember the children, demand justice, and use this project to keep the truth visible. Support the token to keep the message alive.
              </p>
            </div>
          </div>

          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
