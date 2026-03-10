/**
 * VerifyLux — Luxury Brand Authentication Landing Page
 * 14-section single-page design: noir, white, gold
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ProtectedBrands, AIScanningTech, BlockchainSection, DetectionMetrics } from "@/components/UpperSections";
import { RetailerDashboard, ConsumerApp, FullWidthImage, AuthCounters } from "@/components/MiddleSections";
import { BrandProtectionNews, GlobalCompliance, Reviews, PartnerCTA, Footer } from "@/components/LowerSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Header */}
      <Header />
      {/* 2. Hero */}
      <HeroSection />
      {/* 3. Protected Brands */}
      <ProtectedBrands />
      {/* 4. AI Scanning Tech */}
      <AIScanningTech />
      {/* 5. NFC/Blockchain */}
      <BlockchainSection />
      {/* 6. Counterfeit Detection Metrics */}
      <DetectionMetrics />
      {/* 7. Retailer Dashboard */}
      <RetailerDashboard />
      {/* 8. Consumer App */}
      <ConsumerApp />
      {/* 9. Full-width Image */}
      <FullWidthImage />
      {/* 10. Auth Counters */}
      <AuthCounters />
      {/* 11. Brand Protection News */}
      <BrandProtectionNews />
      {/* 12. Global Compliance */}
      <GlobalCompliance />
      {/* 13. Reviews */}
      <Reviews />
      {/* 14. Partner CTA */}
      <PartnerCTA />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
