/**
 * Sections 7-10:
 * 7. Retailer Dashboard UI
 * 8. Consumer App Preview
 * 9. Full-width Luxury Brand Image
 * 10. Authentication Counters
 */
import { motion } from "framer-motion";
import { useInView, useCounter } from "@/hooks/use-in-view";
import dashboardImg from "@/assets/dashboard-preview.jpg";
import appPreviewImg from "@/assets/app-preview.jpg";
import luxuryStore from "@/assets/luxury-store.jpg";

/* ─── Section 7: Retailer Dashboard ─── */
export const RetailerDashboard = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="dashboard" ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
          >
            Command Center
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            Retailer <span className="text-gold-gradient">Dashboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Real-time monitoring, analytics, and threat intelligence — all in one elegant interface.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative glow-gold"
        >
          <img
            src={dashboardImg}
            alt="VerifyLux Retailer Dashboard"
            className="w-full border border-border"
            loading="lazy"
          />
          {/* Gold corner decorations */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary" />
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Section 8: Consumer App Preview ─── */
export const ConsumerApp = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="section-padding bg-noir-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] md:w-[320px]">
            <div className="rounded-[2rem] border-2 border-border overflow-hidden bg-card shadow-2xl">
              <img
                src={appPreviewImg}
                alt="VerifyLux Consumer App"
                className="w-full"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -right-4 top-1/4 bg-primary text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase font-body font-semibold shadow-lg"
            >
              Verified ✓
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            In Your Hands
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            Consumer <span className="text-gold-gradient">App</span>
          </h2>
          <div className="space-y-6 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              Scan. Verify. Own with confidence. Our consumer app puts authentication
              power directly in buyers' hands — instant results, product history, and
              digital certificates of ownership.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {["Instant Scan", "Product History", "Digital Certificate", "Resale Verification"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary" />
                  <span className="text-xs tracking-widest uppercase">{feat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <div className="px-6 py-3 border border-border text-xs tracking-widest uppercase font-body hover:border-primary transition-colors cursor-pointer">
              App Store
            </div>
            <div className="px-6 py-3 border border-border text-xs tracking-widest uppercase font-body hover:border-primary transition-colors cursor-pointer">
              Google Play
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Section 9: Full-width Luxury Brand Image ─── */
export const FullWidthImage = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${luxuryStore})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Where Luxury Meets Certainty
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Every Detail <span className="text-gold-gradient">Matters</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

/* ─── Section 10: Authentication Counters ─── */
const counterData = [
  { target: 48, suffix: "M+", label: "Products Authenticated" },
  { target: 320, suffix: "+", label: "Brand Partners" },
  { target: 96, suffix: "", label: "Countries Covered" },
  { target: 2, suffix: "B+", label: "Consumer Scans" },
];

const CounterItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { ref, isInView } = useInView();
  const count = useCounter(target, 2000, isInView);
  return (
    <div ref={ref} className="text-center py-8">
      <div className="counter-number">{count}{suffix}</div>
      <p className="text-muted-foreground text-xs tracking-widest uppercase mt-4 font-body">{label}</p>
    </div>
  );
};

export const AuthCounters = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="section-padding border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          {counterData.map((item) => (
            <CounterItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
