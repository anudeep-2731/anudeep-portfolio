"use client";

import AnimatedSection, { itemVariants } from "./AnimatedSection";
import { motion } from "framer-motion";

const CERTIFICATIONS = [
  { name: "Databricks Certified Data Engineer Professional", issuer: "Databricks", color: "#ff6b35" },
  { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks", color: "#ff6b35" },
  { name: "Databricks Generative AI Associate", issuer: "Databricks", color: "#ff6b35" },
  { name: "DP-203 Azure Data Engineer", issuer: "Azure", color: "#0088ff" },
  { name: "DP-700 Fabric Data Engineer", issuer: "Azure", color: "#0088ff" },
  { name: "AZ-900 Azure Fundamentals", issuer: "Azure", color: "#0088ff" },
  { name: "DP-900 Azure Data Fundamentals", issuer: "Azure", color: "#0088ff" },
  { name: "AWS Certified Data Engineer Associate", issuer: "AWS", color: "#ff9900" },
  { name: "Snowflake SnowPro Core", issuer: "Snowflake", color: "#29b5e8" },
  { name: "GH-300 GitHub Advanced Security", issuer: "GitHub", color: "#aaaaaa" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
            <h2 className="font-clash text-4xl md:text-5xl text-primary font-bold tracking-tight mb-4">
              10 Certifications
            </h2>
            <p className="font-jakarta text-[14px] text-textMuted max-w-lg">
              Validated across Databricks, Azure, AWS, Snowflake & GitHub
            </p>
          </motion.div>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {CERTIFICATIONS.map((cert) => (
              <motion.div 
                key={cert.name} 
                variants={itemVariants}
              >
                <div 
                  className="group relative h-full bg-[#110d08] border border-[#2a1a10] rounded-lg p-3 lg:p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:z-10"
                  style={{
                    // CSS variable for dynamic hover color
                    '--hover-glow': `${cert.color}40`,
                    '--border-color': cert.color
                  } as React.CSSProperties}
                >
                  {/* Left Border Strip */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ backgroundColor: cert.color }} 
                  />
                  
                  {/* Border wrapper for hover effect */}
                  <div 
                    className="absolute inset-0 rounded-lg border border-transparent transition-colors duration-300"
                    style={{
                      // We can't easily hover-border with inline styles in Tailwind without a wrapper or complex plugins, 
                      // so we use a CSS technique: The wrapper gets a border on hover
                    } as any}
                  />
                  {/* Tailwind classes for the hover glow we injected via style tag below */}
                  
                  <div className="flex flex-col relative z-10 pl-2 h-full justify-center">
                    <span 
                      className="font-mono text-[8px] uppercase tracking-widest mb-1.5 opacity-80"
                      style={{ color: cert.color }}
                    >
                      {cert.issuer}
                    </span>
                    <h3 className="font-jakarta text-[11px] lg:text-[12px] text-textPrimary leading-snug font-medium">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Dynamic Hover Styles for Cards */}
      <style dangerouslySetInnerHTML={{__html: `
        #certifications .group:hover {
          border-color: var(--border-color);
          box-shadow: 0 0 15px var(--hover-glow);
        }
      `}} />
    </section>
  );
}
