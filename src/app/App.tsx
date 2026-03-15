import { PriceTicker } from './components/PriceTicker';
import { HeroSection } from './components/HeroSection';
import { IntelligenceTerminal } from './components/IntelligenceTerminal';
import { BattleMap } from './components/BattleMap';
import { CommunityArsenal } from './components/CommunityArsenal';
import { NFTArsenal } from './components/NFTArsenal';
import { MediaVault } from './components/MediaVault';
import { Armory } from './components/Armory';
import { WarningBanner } from './components/WarningBanner';
import { Footer } from './components/Footer';
import { FloatingMissile, FloatingTank, FloatingJet } from './components/MilitaryAssets';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
      {/* CRT Flicker Effect */}
      <div className="crt-flicker" />
      
      {/* Scanline Overlay */}
      <div className="scanlines" />
      
      {/* Vignette Effect */}
      <div className="vignette" />

      {/* Floating Military Assets */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <FloatingMissile delay={0} direction="left" />
        <FloatingMissile delay={4} direction="right" />
        <FloatingJet delay={2} />
        <div className="absolute top-20 left-10">
          <FloatingTank delay={0} />
        </div>
        <div className="absolute top-40 right-20">
          <FloatingTank delay={1.5} />
        </div>
      </div>

      {/* Price Ticker */}
      <PriceTicker />

      {/* Main Content */}
      <main className="pt-16 relative z-10">
        <HeroSection />
        <IntelligenceTerminal />
        <BattleMap />
        <CommunityArsenal />
        <NFTArsenal />
        <MediaVault />
        <Armory />
        <WarningBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}