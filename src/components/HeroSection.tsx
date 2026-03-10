/**
 * Section 2: Hero — Cinematic luxury product with scanning laser animation
 */
import { motion } from "framer-motion";
import heroWatch from "@/assets/hero-watch.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroWatch}
          alt="Luxury timepiece — brand authentication"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Scanning laser effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 right-0 h-[2px] animate-scan"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(43 74% 49% / 0.6), hsl(43 74% 49%), hsl(43 74% 49% / 0.6), transparent)",
            boxShadow: "0 0 20px 4px hsl(43 74% 49% / 0.3)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6 font-body"
        >
          AI-Powered Authentication
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          Protecting the World's
          <br />
          <span className="text-gold-gradient">Most Coveted Brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body font-light"
        >
          Unassailable authentication powered by artificial intelligence, NFC, and blockchain.
          Zero tolerance for counterfeits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Request Demo
          </a>
          <a
            href="#technology"
            className="px-8 py-4 border border-border text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Explore Technology
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
