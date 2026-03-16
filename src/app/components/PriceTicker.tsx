import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const RSS_FEEDS = [
  'https://news.google.com/rss/search?q=epstein+documents+court+unsealed&hl=en-US&gl=US&ceid=US:en',
  'https://news.google.com/rss/search?q=Jeffrey+Epstein+victims+trafficking&hl=en-US&gl=US&ceid=US:en',
  'https://news.google.com/rss/search?q=epstein+war+distraction+iran&hl=en-US&gl=US&ceid=US:en',
  'https://news.google.com/rss/search?q=DOJ+epstein+files+release&hl=en-US&gl=US&ceid=US:en',
  'https://news.google.com/rss/search?q=epstein+names+leaders+prince&hl=en-US&gl=US&ceid=US:en',
  'https://news.google.com/rss/search?q=child+trafficking+elite+investigation&hl=en-US&gl=US&ceid=US:en',
];

const FALLBACK_HEADLINES = [
  'Epstein court documents unsealed — names of world leaders and billionaires revealed',
  'DOJ releases millions of Epstein investigation pages; flight logs and emails public',
  'Epstein victims demand justice as documents expose network of powerful figures',
  'War headlines eclipse Epstein files — interest drops 95% when conflict starts',
  'Jeffrey Epstein: questions remain over death in custody; many believe he is alive',
  'Leaders and elites named in Epstein documents — accountability still missing',
  'Child trafficking case: court records link politicians and businessmen to Epstein',
  'Epstein island, flight logs, and the cover-up the world is being made to forget',
];

function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent ?? tmp.innerText ?? html;
}

async function fetchHeadlines(): Promise<string[]> {
  const all: string[] = [];
  const api = 'https://api.rss2json.com/v1/api.json';

  for (const feedUrl of RSS_FEEDS) {
    try {
      const url = `${api}?rss_url=${encodeURIComponent(feedUrl)}&count=6`;
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (data.status === 'ok' && Array.isArray(data.items)) {
        data.items.forEach((item: { title?: string }) => {
          if (item.title) all.push(stripHtml(item.title).trim());
        });
      }
    } catch {
      // skip feed on error
    }
  }

  return all.length > 0 ? [...new Set(all)] : FALLBACK_HEADLINES;
}

export function PriceTicker() {
  const [headlines, setHeadlines] = useState<string[]>([]);

  useEffect(() => {
    fetchHeadlines().then(setHeadlines);
    const refetch = setInterval(() => fetchHeadlines().then(setHeadlines), 1000 * 60 * 10);
    return () => clearInterval(refetch);
  }, []);

  const items = headlines.length > 0 ? headlines : FALLBACK_HEADLINES;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D] border-b-4 border-[#39FF14] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />
      <div className="flex items-center gap-2 py-1.5 px-2 border-b border-[#39FF14]/30 font-mono text-[10px] text-[#39FF14]/80 uppercase tracking-widest">
        <span className="animate-pulse">●</span> Real news — Epstein, justice, victims, documents, war &amp; distraction
      </div>
      <motion.div
        className="flex gap-8 py-2.5 font-mono text-sm"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((text, index) => (
          <div key={`${index}-${text.slice(0, 25)}`} className="flex items-center gap-2 whitespace-nowrap shrink-0">
            <span className="text-[#FFD700]">▸</span>
            <span className="text-[#FF00FF] max-w-[300px] md:max-w-[420px] truncate" title={text}>
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
