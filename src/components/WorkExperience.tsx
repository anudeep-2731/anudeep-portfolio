"use client";

import AnimatedSection, { itemVariants } from "./AnimatedSection";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
  {
    id: "ey-gds",
    company: "EY GDS",
    role: "Data Engineering Consultant",
    period: "Sep 2025 – Present",
    description: "Working in the Databricks Solutions Team building enterprise data platforms. Leading a Retail AI Platform project using SDP pipelines, Lakeflow Connect, Genie, AgentBricks, Databricks Apps, Lakebase, and Mosaic AI to create an agentic recommendation engine.",
    tags: ["AgentBricks", "Mosaic AI", "Genie", "Lakebase", "Lakeflow", "Databricks Apps", "SDP Pipelines", "Retail AI"],
    isActive: true,
  },
  {
    id: "accenture",
    company: "Accenture",
    role: "Data Engineering Analyst",
    period: "Jan 2023 – Sep 2025",
    description: "Designed ETL/ELT pipelines on Azure (ADF, Databricks, ADLS Gen2). Implemented Medallion Architecture with Delta Lake. Built real-time streaming with Azure Event Hub. Created Flask microservices for IoT dashboards. Integrated Azure Digital Twins and IoT Hub for AI-driven anomaly detection.",
    tags: ["Azure", "Databricks", "PySpark", "Scala", "Delta Lake", "ADF", "Event Hub", "IoT", "Digital Twins", "Flask"],
    isActive: false,
    isHollow: true,
  },
  {
    id: "cognizant",
    company: "Cognizant",
    role: "Programmer Analyst Intern",
    period: "Mar 2022 – Aug 2022",
    description: null,
    tags: ["Spring Boot", "Angular", "Java"],
    isActive: false,
    isDim: true,
  }
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-32 relative z-10 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-clash text-3xl md:text-4xl text-textPrimary font-semibold tracking-tight">
              Experience
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-primary via-[#3a1f10] to-transparent md:left-[23px]" />

            {/* Timeline Entries */}
            <div className="flex flex-col space-y-16">
              {EXPERIENCE_DATA.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1.5 md:left-[8px] flex justify-center items-center w-[30px] h-[30px]">
                    {item.isActive ? (
                      <div className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-[0_0_15px_#ff6b35]"></span>
                      </div>
                    ) : item.isHollow ? (
                      <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-primary bg-background" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full border border-textDim bg-background" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col ${item.isDim ? 'opacity-60' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 gap-2 md:gap-0">
                      <div>
                        <h3 className="font-clash text-[18px] text-textPrimary font-medium tracking-wide">
                          {item.company}
                        </h3>
                        <p className="font-mono text-[11px] text-primary uppercase tracking-widest mt-1">
                          {item.role}
                        </p>
                      </div>
                      <span className="font-jakarta text-[9px] text-[#4a2e1e] uppercase tracking-wider md:mb-1">
                        {item.period}
                      </span>
                    </div>

                    {item.description && (
                      <p className="font-jakarta text-[13px] text-[#8a5a40] leading-relaxed mb-5">
                        {item.description}
                      </p>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className={`font-mono text-[9px] uppercase px-2.5 py-1 rounded-[4px] ${
                              item.isActive 
                                ? 'bg-primary/10 border border-primary/20 text-[#e8c4a8]' 
                                : 'bg-[#110d08] border border-[#2a1a10] text-[#8a5a40]'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
