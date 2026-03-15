import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function PriceTicker() {
  const [price, setPrice] = useState('0.00000420');
  const [change, setChange] = useState('+69.00');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPrice = (Math.random() * 0.00001).toFixed(8);
      const randomChange = ((Math.random() - 0.5) * 100).toFixed(2);
      setPrice(randomPrice);
      setChange(randomChange);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    `TINY-D: $${price}`,
    `24H: ${change}%`,
    `VOL: $420,690`,
    `MCAP: $6.9M`,
    `HOLDERS: 13,337`,
    `TINY-D: $${price}`,
    `24H: ${change}%`,
    `VOL: $420,690`,
    `MCAP: $6.9M`,
    `HOLDERS: 13,337`,
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D] border-b-4 border-[#39FF14] overflow-hidden">
      <motion.div
        className="flex gap-8 py-3 font-mono text-sm"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#FFD700]">▸</span>
            <span className="text-[#39FF14]">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
