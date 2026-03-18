"use client";

import { useEffect, useState } from "react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Contact() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> anudeep.basva --status available --location hyderabad --open-to remote|hybrid";

  // Typing effect for terminal
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTerminalText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="contact" className="py-40 relative z-10 overflow-hidden">
      {/* Mirrored Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#ff2200]/10 blur-[100px]" />
        
        {/* Concentric rings (off-screen left mirrored) */}
        <div className="absolute top-1/2 left-[-20%] -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-primary/20 opacity-40" style={{ strokeWidth: "0.4px" }} />
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-primary/20 opacity-40" style={{ strokeWidth: "0.4px" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            
            <h2 className="font-clash text-5xl md:text-[64px] text-textPrimary font-semibold tracking-tight mb-6">
              Let's Build Something.
            </h2>
            
            <p className="font-jakarta text-[14px] md:text-[16px] text-[#6b4030] max-w-xl mx-auto mb-16 px-4">
              Open to senior data engineering roles, consulting opportunities, and Databricks platform projects.
            </p>

            {/* Link Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-20 w-full px-4">
              <a 
                href="#"
                className="w-full sm:w-auto bg-surface border border-border px-8 py-3.5 rounded-[6px] font-jakarta text-[12px] text-textPrimary uppercase tracking-widest hover:border-primary/50 hover:bg-primary/5 transition-all text-center"
              >
                LinkedIn →
              </a>
              <a 
                href="mailto:basvaanu9125@gmail.com"
                className="w-full sm:w-auto bg-primary text-background px-8 py-3.5 rounded-[6px] font-jakarta text-[12px] font-bold uppercase tracking-widest hover:bg-[#e55a28] transition-colors shadow-[0_0_20px_rgba(255,107,53,0.15)] hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] text-center"
              >
                Email →
              </a>
              <a 
                href="#"
                className="w-full sm:w-auto border border-border px-8 py-3.5 rounded-[6px] font-jakarta text-[12px] text-textPrimary uppercase tracking-widest hover:border-primary/50 hover:bg-surface transition-all text-center"
              >
                Download Resume →
              </a>
            </div>

            {/* Terminal Animation */}
            <div className="w-full max-w-2xl bg-[#0a0705] border border-[#1e1208] rounded-md p-4 flex items-center text-left shadow-2xl">
              <span className="font-mono text-[10px] md:text-[12px] text-[#ff6b3544]">
                {terminalText}<span className="animate-pulse ml-0.5 w-[8px] h-[14px] inline-block bg-[#ff6b35] opacity-60 translate-y-[2px]" />
              </span>
            </div>

          </motion.div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center font-mono text-[9px] text-textDim uppercase tracking-[3px]">
        © 2026 Anudeep Basva
      </div>
    </section>
  );
}
