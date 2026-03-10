/**
 * Sections 3-6:
 * 3. Protected Brands
 * 4. AI Scanning Tech
 * 5. NFC/Blockchain Integration
 * 6. Counterfeit Detection Metrics
 */
import { motion } from "framer-motion";
import { useInView, useCounter } from "@/hooks/use-in-view";
import { Shield, Scan, Cpu, Link2, Fingerprint, Eye } from "lucide-react";
import luxuryBag from "@/assets/luxury-bag.jpg";
import luxuryPerfume from "@/assets/luxury-perfume.jpg";
import luxuryShoes from "@/assets/luxury-shoes.jpg";

/* ─── Section 3: Protected Brands ─── */
const brandNames = [
  "HERMÈS", "LOUIS VUITTON", "GUCCI", "CHANEL", "ROLEX",
  "PRADA", "DIOR", "CARTIER", "BURBERRY", "BALENCIAGA",
];

export const ProtectedBrands = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="brands" ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
        >
          Trusted By Excellence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16"
        >
          Protected <span className="text-gold-gradient">Brands</span>
        </motion.h2>

        {/* Brand logos as text (luxury minimalism) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {brandNames.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="flex items-center justify-center py-6 border border-border hover:border-primary/50 transition-colors duration-500"
            >
              <span className="font-display text-sm md:text-base tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Product images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[luxuryBag, luxuryPerfume, luxuryShoes].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
              className="img-hover-scale aspect-[4/5]"
            >
              <img
                src={img}
                alt="Protected luxury product"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Section 4: AI Scanning Tech ─── */
const techFeatures = [
  {
    icon: Scan,
    title: "Visual DNA Mapping",
    desc: "Our AI analyzes 47,000+ micro-patterns invisible to the human eye, creating a unique digital fingerprint for every product.",
  },
  {
    icon: Cpu,
    title: "Neural Authentication",
    desc: "Deep learning models trained on 12M+ authentic products deliver 99.97% accuracy in under 2 seconds.",
  },
  {
    icon: Eye,
    title: "Real-time Analysis",
    desc: "Instant verification through smartphone camera — no specialized equipment required.",
  },
];

export const AIScanningTech = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="technology" ref={ref} className="section-padding bg-noir-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
          >
            Proprietary Intelligence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            AI Scanning <span className="text-gold-gradient">Technology</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="border border-border p-8 md:p-10 hover:border-primary/40 transition-all duration-500 group"
            >
              <feat.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold mb-4">{feat.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Section 5: NFC/Blockchain Integration ─── */
export const BlockchainSection = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Immutable Trust
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            NFC & <span className="text-gold-gradient">Blockchain</span>
          </h2>
          <div className="space-y-6">
            {[
              { icon: Link2, title: "Blockchain Provenance", desc: "Every product's journey from manufacture to consumer is permanently recorded on-chain — tamper-proof and transparent." },
              { icon: Fingerprint, title: "NFC Smart Tags", desc: "Embedded near-field communication chips provide instant tap-to-verify authentication for physical products." },
              { icon: Shield, title: "Digital Certificates", desc: "Immutable NFT-based certificates of authenticity, transferable with ownership and verifiable globally." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                className="flex gap-4"
              >
                <item.icon className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-display text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="border border-border p-8 md:p-12 bg-card">
            {/* Blockchain visualization */}
            <div className="space-y-4">
              {["Manufactured", "Quality Check", "Shipped", "Retailer", "Consumer"].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${i <= 3 ? "bg-primary" : "border border-primary"}`} />
                  <div className="flex-1 h-[1px] bg-border" />
                  <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">{step}</span>
                  {i <= 3 && <Shield className="w-3 h-3 text-primary" />}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs tracking-widest uppercase text-primary mb-2 font-body">Certificate Hash</p>
              <p className="font-mono text-xs text-muted-foreground break-all">
                0x7f4e8c2a1b9d3f6e5c8a7b4d2f1e9c6a3b8d5f2e1c4a7b9d6f3e8c5a2b7d4f
              </p>
            </div>
          </div>
          {/* Decorative gold corner */}
          <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-primary" />
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Section 6: Counterfeit Detection Metrics ─── */
const metrics = [
  { value: 99.97, label: "Detection Accuracy", suffix: "%" },
  { value: 1.8, label: "Avg. Scan Time", suffix: "s" },
  { value: 47, label: "Micro-Patterns Analyzed", suffix: "K+" },
  { value: 12, label: "Products in Database", suffix: "M+" },
];

export const DetectionMetrics = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="section-padding bg-noir-light">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
        >
          Performance Metrics
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl font-bold mb-16"
        >
          Counterfeit <span className="text-gold-gradient">Detection</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className="border border-border p-8"
            >
              <div className="counter-number">{m.value}{m.suffix}</div>
              <p className="text-muted-foreground text-xs tracking-widest uppercase mt-4 font-body">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
