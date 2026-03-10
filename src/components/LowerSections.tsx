/**
 * Sections 11-14:
 * 11. Brand Protection News
 * 12. Global Compliance
 * 13. CEO/Brand Manager Reviews
 * 14. Partner CTA & Footer
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Globe, Shield, Scale, Award, ArrowRight } from "lucide-react";
import ceo1 from "@/assets/ceo-1.jpg";
import ceo2 from "@/assets/ceo-2.jpg";
import ceo3 from "@/assets/ceo-3.jpg";

/* ─── Section 11: Brand Protection News ─── */
const newsItems = [
  {
    date: "Mar 2026",
    title: "VerifyLux Partners with European Luxury Conglomerate",
    excerpt: "A landmark agreement to authenticate over 5 million products annually across 12 luxury houses.",
  },
  {
    date: "Feb 2026",
    title: "AI Model Achieves 99.97% Accuracy Milestone",
    excerpt: "Our latest neural network surpasses all industry benchmarks in counterfeit detection.",
  },
  {
    date: "Jan 2026",
    title: "Blockchain Integration Goes Live in Asia-Pacific",
    excerpt: "Full NFC and blockchain provenance tracking now available across 14 APAC markets.",
  },
];

export const BrandProtectionNews = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="section-padding bg-noir-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
          >
            Latest Updates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            Protection <span className="text-gold-gradient">News</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="border border-border p-8 hover:border-primary/40 transition-all duration-500 group cursor-pointer"
            >
              <p className="text-xs tracking-widest uppercase text-primary mb-4 font-body">{item.date}</p>
              <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">{item.excerpt}</p>
              <span className="text-xs tracking-widest uppercase text-primary font-body flex items-center gap-2">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Section 12: Global Compliance ─── */
const complianceItems = [
  { icon: Globe, title: "96 Countries", desc: "Active authentication services across every major luxury market." },
  { icon: Scale, title: "EU & US Regulatory", desc: "Fully compliant with EU Digital Product Passport and US STOP Act requirements." },
  { icon: Shield, title: "ISO 27001 Certified", desc: "Enterprise-grade security and data protection for every transaction." },
  { icon: Award, title: "LVMH Approved", desc: "Certified technology partner for the world's leading luxury groups." },
];

export const GlobalCompliance = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="compliance" ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
          >
            Worldwide Standards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            Global <span className="text-gold-gradient">Compliance</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className="text-center p-8 border border-border hover:border-primary/40 transition-all duration-500"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-5" />
              <h3 className="font-display text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Section 13: CEO/Brand Manager Reviews ─── */
const reviews = [
  {
    img: ceo1,
    name: "Alexandre Beaumont",
    role: "CEO, Maison Beaumont",
    quote: "VerifyLux has fundamentally transformed how we protect our heritage. The technology is as refined as our craftsmanship.",
  },
  {
    img: ceo2,
    name: "Isabella Chen",
    role: "VP Brand Protection, Global Luxury Group",
    quote: "The accuracy is extraordinary. We've seen a 94% reduction in counterfeit incidents since deploying their AI platform.",
  },
  {
    img: ceo3,
    name: "Richard Thornton",
    role: "Managing Director, Thornton & Partners",
    quote: "In the world of luxury, trust is everything. VerifyLux provides that trust with unmatched technological elegance.",
  },
];

export const Reviews = () => {
  const { ref, isInView } = useInView();
  return (
    <section ref={ref} className="section-padding bg-noir-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            Voices of <span className="text-gold-gradient">Trust</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="border border-border p-8 md:p-10"
            >
              <div className="text-primary text-4xl font-display mb-6">"</div>
              <p className="text-foreground/90 font-body text-sm leading-relaxed italic mb-8">{r.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Section 14: Partner CTA & Footer ─── */
export const PartnerCTA = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="contact" ref={ref} className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body"
        >
          Join The Standard
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
          Partner <span className="text-gold-gradient">With Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-12"
        >
          Elevate your brand protection with the world's most sophisticated authentication platform.
          Inquire about enterprise integration today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:partners@verifylux.com"
            className="px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Schedule Consultation
          </a>
          <a
            href="#technology"
            className="px-10 py-4 border border-border text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Technology
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Logo & tagline */}
        <div className="md:col-span-2">
          <a href="#" className="font-display text-2xl font-bold tracking-wider text-gold-gradient">
            VERIFYLUX
          </a>
          <p className="text-muted-foreground text-sm font-body mt-4 max-w-sm leading-relaxed">
            The global standard in luxury brand authentication. AI-powered protection for the world's most prestigious brands.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest uppercase mb-6">Platform</h4>
          <nav className="space-y-3">
            {["AI Technology", "NFC Integration", "Blockchain", "Dashboard", "Consumer App"].map((link) => (
              <a
                key={link}
                href="#technology"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest uppercase mb-6">Company</h4>
          <nav className="space-y-3">
            {["About", "Careers", "Press", "Compliance", "Contact"].map((link) => (
              <a
                key={link}
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-body">
          © 2026 VerifyLux. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
