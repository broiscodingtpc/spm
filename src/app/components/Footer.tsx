import { Twitter, Send, ExternalLink } from 'lucide-react';
import { AnimatedWarLogo } from './AnimatedWarLogo';
import { CONTRACT_ADDRESS, hasContractAddress } from '../constants';

const X_COMMUNITY_URL = 'https://x.com/i/communities/2033304930375586293';
const TELEGRAM_URL = 'https://t.me/TINYDWAR';

export function Footer() {
  return (
    <footer className="relative border-t-8 border-[#39FF14] bg-[#0D0D0D] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="mb-4">
              <AnimatedWarLogo variant="footer" />
            </div>
            <p className="font-mono text-xs text-gray-400 leading-relaxed">
              A satirical meme coin on the blockchain battlefield.
              Maximum chaos, minimum seriousness.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="w-3 h-3 bg-[#39FF14] animate-pulse" />
              <div className="w-3 h-3 bg-[#FF00FF] animate-pulse delay-100" />
              <div className="w-3 h-3 bg-[#FFD700] animate-pulse delay-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-pixel text-sm text-[#39FF14] mb-4">QUICK ACCESS</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">
                {'>'} WHITEPAPER.PDF
              </li>
              <li className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">
                {'>'} AUDIT_REPORT.TXT
              </li>
              <li className="text-gray-400 flex flex-col gap-0.5">
                <span>{'>'} CONTRACT_ADDRESS</span>
                {hasContractAddress() ? (
                  <span className="text-[#39FF14] text-[10px] font-mono break-all">{CONTRACT_ADDRESS.slice(0, 12)}…{CONTRACT_ADDRESS.slice(-8)}</span>
                ) : (
                  <span className="text-[#FFD700] text-[10px] font-pixel">POSTING SOON</span>
                )}
              </li>
              <li className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">
                {'>'} DEXTOOLS_CHART
              </li>
              <li>
                <a
                  href="https://www.jmail.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-400 hover:text-[#39FF14] transition-colors"
                  title="Gmail-style portal with real Epstein emails"
                >
                  {'>'} JMAIL.WORLD <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-pixel text-sm text-[#FF00FF] mb-4">JOIN THE WAR</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={X_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-4 border-[#39FF14] bg-[#1a1a1a] 
                               flex items-center justify-center hover:bg-[#39FF14] 
                               hover:text-[#0D0D0D] transition-all duration-200
                               shadow-[4px_4px_0px_0px_#2a2a2a]
                               hover:shadow-[6px_6px_0px_0px_#2a2a2a]
                               hover:translate-x-[-2px] hover:translate-y-[-2px]"
                aria-label="X Community"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-4 border-[#39FF14] bg-[#1a1a1a] 
                               flex items-center justify-center hover:bg-[#39FF14] 
                               hover:text-[#0D0D0D] transition-all duration-200
                               shadow-[4px_4px_0px_0px_#2a2a2a]
                               hover:shadow-[6px_6px_0px_0px_#2a2a2a]
                               hover:translate-x-[-2px] hover:translate-y-[-2px]"
                aria-label="TINY D WAR on Telegram"
                title="Join TINY D WAR on Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-[#2a2a2a] pt-6">
          <div className="font-mono text-xs text-center space-y-2">
            <p className="text-gray-500">
              DISCLAIMER: THIS IS A MEME COIN WITH NO INTRINSIC VALUE. DO NOT INVEST MORE THAN YOU CAN AFFORD TO LOSE.
            </p>
            <p className="text-gray-600">
              © 2026 TINY D WAR | ALL RIGHTS RESERVED | CONTRACT: 0x...DEPLOYING
            </p>
            <p className="text-[#39FF14] animate-pulse">
              {'>'} SYSTEM_ONLINE | CHAOS_LEVEL: MAXIMUM
            </p>
            <p className="font-mono text-[#39FF14]/70 text-[10px] md:text-xs tracking-widest uppercase mt-2">
              For the greater good. Decentralized. By the people.
            </p>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#39FF14]" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#FF00FF]" />
    </footer>
  );
}