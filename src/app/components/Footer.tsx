import { Twitter, MessageCircle, Github } from 'lucide-react';
import logo from 'figma:asset/3f2a2c68445c8264ea8097c75701cf27e5ac9013.png';

export function Footer() {
  return (
    <footer className="relative border-t-8 border-[#39FF14] bg-[#0D0D0D] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <img 
              src={logo} 
              alt="TINY D WAR" 
              className="w-48 mb-4"
              style={{ imageRendering: 'pixelated' }}
            />
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
              <li className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">
                {'>'} CONTRACT_ADDRESS
              </li>
              <li className="text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">
                {'>'} DEXTOOLS_CHART
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-pixel text-sm text-[#FF00FF] mb-4">JOIN THE WAR</h4>
            <div className="flex gap-4">
              <button className="w-12 h-12 border-4 border-[#39FF14] bg-[#1a1a1a] 
                               flex items-center justify-center hover:bg-[#39FF14] 
                               hover:text-[#0D0D0D] transition-all duration-200
                               shadow-[4px_4px_0px_0px_#2a2a2a]
                               hover:shadow-[6px_6px_0px_0px_#2a2a2a]
                               hover:translate-x-[-2px] hover:translate-y-[-2px]">
                <Twitter className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 border-4 border-[#FF00FF] bg-[#1a1a1a] 
                               flex items-center justify-center hover:bg-[#FF00FF] 
                               hover:text-[#0D0D0D] transition-all duration-200
                               shadow-[4px_4px_0px_0px_#2a2a2a]
                               hover:shadow-[6px_6px_0px_0px_#2a2a2a]
                               hover:translate-x-[-2px] hover:translate-y-[-2px]">
                <MessageCircle className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 border-4 border-[#FFD700] bg-[#1a1a1a] 
                               flex items-center justify-center hover:bg-[#FFD700] 
                               hover:text-[#0D0D0D] transition-all duration-200
                               shadow-[4px_4px_0px_0px_#2a2a2a]
                               hover:shadow-[6px_6px_0px_0px_#2a2a2a]
                               hover:translate-x-[-2px] hover:translate-y-[-2px]">
                <Github className="w-6 h-6" />
              </button>
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
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#39FF14]" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#FF00FF]" />
    </footer>
  );
}