import { PriceTicker } from './components/PriceTicker';
import { HackerBanner } from './components/HackerBanner';
import { HeroSection } from './components/HeroSection';
import { VideoPrizeBanner } from './components/VideoPrizeBanner';
import { MissionSection } from './components/MissionSection';
import { IntelligenceTerminal } from './components/IntelligenceTerminal';
import { BattleMap } from './components/BattleMap';
import { CommunityArsenal } from './components/CommunityArsenal';
import { NFTArsenal } from './components/NFTArsenal';
import { MediaVault } from './components/MediaVault';
import { EpisodesSection } from './components/EpisodesSection';
import { DocumentVault } from './components/DocumentVault';
import { JMailPortal } from './components/JMailPortal';
import { WarningBanner } from './components/WarningBanner';
import { Footer } from './components/Footer';
import { FloatingMissile, FloatingTank, FloatingJet } from './components/MilitaryAssets';
import { AmericanFlagRocketsBackground } from './components/AmericanFlagRocketsBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
      {/* Background: American flag + rockets */}
      <AmericanFlagRocketsBackground />

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

      {/* Content below fixed ticker */}
      <div className="pt-20">
        {/* Hacker / fighter-for-good banner */}
        <HackerBanner />

        {/* Main Content */}
        <main className="pt-6 relative z-10">
        <HeroSection />
        <VideoPrizeBanner />
        <MissionSection />
        <IntelligenceTerminal />
        <BattleMap />
        <CommunityArsenal />
        <NFTArsenal />
        <MediaVault />
        <EpisodesSection />
        <DocumentVault />
        <JMailPortal />
        <WarningBanner />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}