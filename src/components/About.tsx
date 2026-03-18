"use client";

import AnimatedSection, { itemVariants } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 border-b border-[#1e1208]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Bio */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6">
            <h2 className="font-clash text-3xl md:text-4xl text-textPrimary font-semibold tracking-tight">
              Behind the <span className="text-primary italic font-normal">Intelligence</span>
            </h2>
            
            <p className="font-jakarta text-[13px] text-[#8a5a40] leading-[1.8] max-w-lg">
              I&apos;m a Data Engineering Consultant at <strong className="text-[#cc8866] font-semibold">EY GDS</strong>, Hyderabad, working within a specialist <strong className="text-[#cc8866] font-semibold">Databricks Solutions</strong> team that delivers data platforms for enterprise clients. Currently architecting a Retail Agentic Recommendation Engine using the latest Databricks stack — <strong className="text-[#cc8866] font-semibold">AgentBricks</strong>, <strong className="text-[#cc8866] font-semibold">Mosaic AI</strong>, Genie, Lakebase, and Lakeflow Connect. 
              <br /><br />
              Previously at <strong className="text-[#cc8866] font-semibold">Accenture</strong> for 2+ years building medallion pipelines, IoT digital twin platforms, and real-time streaming infrastructure on Azure. I hold <strong className="text-[#cc8866] font-semibold">10 cloud and data engineering certifications</strong> across Databricks, Azure, AWS, Snowflake, and GitHub.
            </p>
          </motion.div>

          {/* Right: Current Project Card */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-surface rounded-[10px] border border-border border-t-2 border-t-primary p-6 lg:p-8 relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.08)]">
              {/* Decorative Corner subtle glow array */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col relative z-10">
                <span className="font-mono text-[8px] text-[#ff6b3566] uppercase tracking-widest mb-3">
                  Current Project
                </span>
                
                <h3 className="font-jakarta text-[14px] lg:text-[15px] text-textPrimary font-semibold mb-1 lg:mb-2">
                  Retail Agentic Recommendation Engine
                </h3>
                
                <p className="font-jakarta text-[10px] text-[#6b4030] tracking-wide uppercase mb-6">
                  EY GDS · 2025–Present
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {[
                    "AgentBricks",
                    "Mosaic AI",
                    "Genie",
                    "Lakebase",
                    "Lakeflow",
                    "Databricks Apps",
                    "SDP Pipelines"
                  ].map((tag) => (
                    <span 
                      key={tag}
                      className="bg-background border border-border text-[#a3705a] font-mono text-[9px] uppercase px-2.5 py-1 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </AnimatedSection>
      </div>
    </section>
  );
}
