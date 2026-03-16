import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';

const API = 'https://api.rss2json.com/v1/api.json';

// Real RSS feeds: war (Middle East, Europe), world news (Epstein coverage when it hits headlines)
const FEEDS_BY_CATEGORY: { category: string; label: string; color: string; feeds: string[] }[] = [
  {
    category: 'epstein',
    label: 'Epstein & documents',
    color: '#FF00FF',
    feeds: [
      'https://feeds.bbci.co.uk/news/world/rss.xml',
      'https://feeds.npr.org/1001/rss.xml',
      'https://www.aljazeera.com/xml/rss/all.xml',
    ],
  },
  {
    category: 'war',
    label: 'War & conflict',
    color: '#FFD700',
    feeds: [
      'https://feeds.bbci.co.uk/news/world/middle_east/rss.xml',
      'https://feeds.bbci.co.uk/news/world/europe/rss.xml',
      'https://feeds.bbci.co.uk/news/world/rss.xml',
      'https://www.aljazeera.com/xml/rss/all.xml',
    ],
  },
  {
    category: 'justice',
    label: 'Justice & victims',
    color: '#39FF14',
    feeds: [
      'https://feeds.bbci.co.uk/news/world/rss.xml',
      'https://feeds.npr.org/1001/rss.xml',
    ],
  },
];

type NewsItem = { title: string; link: string; date: string; category: string; categoryLabel: string; color: string };

function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent ?? tmp.innerText ?? html;
}

function formatDate(pubDate: string | undefined): string {
  if (!pubDate) return '';
  try {
    const d = new Date(pubDate);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  } catch {
    return '';
  }
}

async function fetchNews(): Promise<NewsItem[]> {
  const items: NewsItem[] = [];

  for (const group of FEEDS_BY_CATEGORY) {
    for (const feedUrl of group.feeds) {
      try {
        const url = `${API}?rss_url=${encodeURIComponent(feedUrl)}&count=5`;
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        if (data.status !== 'ok' || !Array.isArray(data.items)) continue;
        data.items.forEach((item: { title?: string; link?: string; pubDate?: string }) => {
          if (item.title) {
            items.push({
              title: stripHtml(item.title).trim(),
              link: item.link ?? '#',
              date: formatDate(item.pubDate),
              category: group.category,
              categoryLabel: group.label,
              color: group.color,
            });
          }
        });
      } catch {
        // skip
      }
    }
  }

  const seen = new Set<string>();
  return items.filter((i) => {
    const key = i.title.slice(0, 60);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 24);
}

const FALLBACK_ITEMS: NewsItem[] = [
  { title: 'Epstein court documents unsealed — names of world leaders revealed', link: '#', date: '', category: 'epstein', categoryLabel: 'Epstein & documents', color: '#FF00FF' },
  { title: 'DOJ releases millions of Epstein investigation pages', link: '#', date: '', category: 'epstein', categoryLabel: 'Epstein & documents', color: '#FF00FF' },
  { title: 'War headlines eclipse Epstein files — interest drops when conflict starts', link: '#', date: '', category: 'war', categoryLabel: 'War & conflict', color: '#FFD700' },
  { title: 'Epstein victims demand justice as documents expose powerful figures', link: '#', date: '', category: 'justice', categoryLabel: 'Justice & victims', color: '#39FF14' },
  { title: 'Child trafficking case: court records link elites to Epstein network', link: '#', date: '', category: 'justice', categoryLabel: 'Justice & victims', color: '#39FF14' },
];

export function CommunityArsenal() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetchNews()
      .then((data) => setItems(data.length ? data : FALLBACK_ITEMS))
      .catch(() => setItems(FALLBACK_ITEMS))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 1000 * 60 * 5);
    return () => clearInterval(t);
  }, []);

  const displayItems = items.length > 0 ? items : FALLBACK_ITEMS;

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-pixel text-[#39FF14] mb-4">
            REAL-TIME NEWS
          </h2>
          <p className="font-mono text-gray-400">
            {'>'} Epstein · War · Justice — live headlines
          </p>
        </motion.div>

        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={load}
            disabled={loading}
            className="flex items-center gap-2 font-mono text-xs text-[#39FF14] hover:text-[#FFD700] disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading…' : 'Refresh'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayItems.map((item, index) => (
            <motion.a
              key={`${item.category}-${index}-${item.title.slice(0, 30)}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative bg-[#0D0D0D] border-4 p-4 hover:border-opacity-100 transition-all group"
              style={{ borderColor: item.color, borderOpacity: 0.6 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.03, 0.3) }}
            >
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: item.color }} />
              <div className="pl-3">
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: item.color }}>
                  {item.categoryLabel}
                </span>
                {item.date && (
                  <span className="font-mono text-[10px] text-gray-500 ml-2">{item.date}</span>
                )}
                <p className="font-mono text-sm text-gray-200 mt-1 line-clamp-3 group-hover:text-white transition-colors">
                  {item.title}
                </p>
                <span className="inline-flex items-center gap-1 font-mono text-xs mt-2 text-gray-500 group-hover:text-[#39FF14]">
                  <ExternalLink className="w-3 h-3" /> Read
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
