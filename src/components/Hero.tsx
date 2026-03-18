"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import AnimatedSection, { itemVariants } from "./AnimatedSection";

const TYPING_WORDS = [
  "Data Engineer",
  "Databricks Expert",
  "AI Platform Builder",
  "Pipeline Architect",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = TYPING_WORDS[currentWordIndex];

    const type = () => {
      if (!isDeleting && currentText === currentWord) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, currentText.length - 1)
          : currentWord.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        {/* Large radial glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-primary/18 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#ff2200]/10 blur-[100px]" />

        {/* Diagonal thin lines (fanning from top-right) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="100%" y1="0" x2="20%" y2="100%" stroke="#ff6b35" strokeWidth="0.5" strokeOpacity="0.07" />
          <line x1="100%" y1="0" x2="40%" y2="100%" stroke="#ff6b35" strokeWidth="0.5" strokeOpacity="0.07" />
          <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#ff6b35" strokeWidth="0.5" strokeOpacity="0.07" />
          <line x1="100%" y1="0" x2="80%" y2="100%" stroke="#ff6b35" strokeWidth="0.5" strokeOpacity="0.07" />
          <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#ff6b35" strokeWidth="0.5" strokeOpacity="0.07" />
        </svg>

        {/* Concentric rings (off-screen right) */}
        <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-primary/20 opacity-80" style={{ strokeWidth: "0.4px" }} />
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-primary/30 opacity-80" style={{ strokeWidth: "0.4px" }} />
        <div className="absolute top-1/2 right-[0%] -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-primary/40 opacity-80" style={{ strokeWidth: "0.4px" }} />

        {/* Particles rendering */}
        <ParticleBackground />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Side: Content (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col space-y-6 lg:pr-10 lg:pt-0 pt-10">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <div className="w-6 h-[1px] bg-primary" />
              <span className="font-mono text-[9px] uppercase tracking-[3px] text-secondary">
                Data Engineering Consultant · EY GDS
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <h1 className="font-clash text-5xl md:text-[64px] font-bold tracking-[-2px] text-primary leading-[1.1]">
                Anudeep
              </h1>
              <h1 className="font-clash text-5xl md:text-[64px] font-bold tracking-[-2px] text-primary leading-[1.1]">
                Basva
              </h1>
            </motion.div>

            {/* One-liner */}
            <motion.p variants={itemVariants} className="font-jakarta text-[14px] text-textMuted leading-relaxed max-w-lg">
              Building agentic AI platforms on Databricks. Turning raw data into
              enterprise intelligence — at scale, in real time.
            </motion.p>
            
            {/* Typing dynamic text */}
            <motion.div variants={itemVariants} className="h-6 font-mono text-primary/80 text-sm">
              &gt; {currentText}<span className="animate-pulse">_</span>
            </motion.div>

            {/* Pill Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {["Databricks", "Azure", "AWS", "Mosaic AI", "PySpark", "Delta Lake"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-primary/15 border border-primary/30 text-[#ff8c52] font-mono text-[9px] uppercase px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="bg-primary text-background px-8 py-3.5 rounded-[4px] font-jakarta text-[13px] font-bold tracking-wide hover:bg-[#e55a28] transition-colors flex items-center"
              >
                Hire Me <span className="ml-2">→</span>
              </a>
              <a
                href="#projects"
                className="border border-primary/50 text-textPrimary px-8 py-3.5 rounded-[4px] font-jakarta text-[13px] font-semibold tracking-wide hover:border-primary hover:bg-primary/5 transition-all"
              >
                View Work
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center space-x-5 pt-4">
              <a href="#" className="text-textDim hover:text-primary transition-colors">
                {/* LinkedIn SVG */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="mailto:basvaanu9125@gmail.com" className="text-textDim hover:text-primary transition-colors">
                {/* Email SVG */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Profile Card (45%) */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end pb-20 lg:pb-0"
          >
            <div className="relative w-full max-w-[360px] bg-surface rounded-2xl border border-border shadow-[0_0_40px_rgba(255,107,53,0.1)] p-6 z-10 animate-[float_6s_ease-in-out_infinite]">
              {/* CSS inline keyframes for floating since it wasn't explicitly added to tailwind config */}
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-15px); }
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .conic-gradient-spin {
                  background: conic-gradient(from 0deg, #ff6b35, #ffd166, #ff4d1a, #ff6b35);
                  animation: spin 4s linear infinite;
                }
              `}</style>

              <div className="flex flex-col items-center">
                {/* Avatar with Spinning Ring */}
                <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-4">
                  <div className="absolute inset-0 rounded-full conic-gradient-spin opacity-80" />
                  <div className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center overflow-hidden z-10">
                    {/* // REPLACE WITH REAL PHOTO — 400x400px, face centered. Fallback shows "AB" initials */}
                    {/* <Image src="/photo.jpg" alt="Anudeep Profile" layout="fill" objectFit="cover" /> */}
                    <span className="font-clash text-4xl text-primary font-bold tracking-widest pl-2">AB</span>
                  </div>
                  {/* Status Dot */}
                  <div className="absolute bottom-1 right-2 w-3.5 h-3.5 bg-[#39ff14] rounded-full border-2 border-surface z-20 shadow-[0_0_10px_#39ff14]" />
                </div>

                {/* Name & Role */}
                <h3 className="font-jakarta text-[16px] text-textPrimary font-semibold mb-1">
                  Anudeep Basva
                </h3>
                <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-5">
                  Data Engineering Consultant
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#1e1208] mb-4" />

                <div className="w-full flex flex-col">
                  <span className="font-mono text-[8px] text-primary/55 uppercase mb-3">
                    Active Stack
                  </span>
                  
                  {/* Stack List */}
                  <ul className="flex flex-col space-y-2.5 w-full">
                    {[
                      { name: "AgentBricks", status: "green" },
                      { name: "Lakeflow Connect", status: "green" },
                      { name: "Mosaic AI", status: "green" },
                      { name: "Genie", status: "yellow" },
                      { name: "Lakebase", status: "green" },
                      { name: "Databricks Apps", status: "green" },
                    ].map((item) => (
                      <li key={item.name} className="flex items-center space-x-3">
                        <span 
                          className={`w-1.5 h-1.5 rounded-full ${item.status === 'green' ? 'bg-[#39ff14] shadow-[0_0_5px_#39ff1480]' : 'bg-[#ffd166] shadow-[0_0_5px_#ffd16680]'}`}
                        />
                        <span className="font-jakarta text-[11px] text-textPrimary/80">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
