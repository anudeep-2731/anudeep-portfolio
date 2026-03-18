"use client";

import { useEffect, useRef } from "react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

const PROJECTS = [
  {
    id: "retail-agentic",
    title: "Retail Agentic Recommendation Engine",
    description: "Multi-agent agentic recommendation system for a retail client using the latest Databricks AI stack",
    tags: ["AgentBricks", "Mosaic AI", "Genie", "Lakebase", "Databricks Apps"],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="80" fill="#2a1a10" opacity="0.3" />
        <path d="M 50,40 Q 150,10 200,40 T 350,40" fill="none" stroke="url(#gradOrange)" strokeWidth="2" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <circle cx="50" cy="40" r="8" fill="#ff6b35">
          <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="40" r="12" fill="#ff8c42" />
        <circle cx="350" cy="40" r="6" fill="#ffd166" />
        <circle cx="125" cy="25" r="4" fill="#ff6b35" opacity="0.6" />
        <circle cx="275" cy="55" r="5" fill="#ff8c42" opacity="0.5" />
        <path d="M 50,40 L 125,25 L 200,40 L 275,55 L 350,40" fill="none" stroke="#ff6b35" opacity="0.2" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "medallion",
    title: "Medallion Architecture Pipeline",
    description: "End-to-end medallion pipeline on Azure Databricks with SCD2, metadata-driven orchestration, ADF",
    tags: ["ADF", "PySpark", "Scala", "Delta Lake", "Azure SQL", "ADLS"],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0078d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="80" fill="#1e293b" opacity="0.3" />
        
        {/* Bronze layer */}
        <rect x="40" y="20" width="80" height="40" rx="4" fill="#6c4e31" opacity="0.8" />
        <text x="80" y="44" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6">Bronze</text>
        
        {/* Arrow 1 */}
        <path d="M 130,40 L 160,40" fill="none" stroke="#0078d4" strokeWidth="2" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <polygon points="160,36 168,40 160,44" fill="#0078d4" />
        
        {/* Silver layer */}
        <rect x="180" y="20" width="80" height="40" rx="4" fill="#a0aab2" opacity="0.8" />
        <text x="220" y="44" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6">Silver</text>
        
        {/* Arrow 2 */}
        <path d="M 270,40 L 300,40" fill="none" stroke="#00b4d8" strokeWidth="2" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <polygon points="300,36 308,40 300,44" fill="#00b4d8" />

        {/* Gold layer */}
        <rect x="320" y="20" width="60" height="40" rx="4" fill="#d4af37" opacity="0.8" />
        <text x="350" y="44" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6">Gold</text>
      </svg>
    ),
  },
  {
    id: "batch-integration",
    title: "Batch Source Integration",
    description: "Multi-source batch ingestion with schema evolution into Redshift via Databricks Delta tables on AWS",
    tags: ["AWS S3", "Redshift", "PySpark", "Scala", "Databricks"],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="80" fill="#064e3b" opacity="0.1" />
        
        <circle cx="40" cy="20" r="5" fill="#10b981" />
        <circle cx="40" cy="40" r="5" fill="#10b981" />
        <circle cx="40" cy="60" r="5" fill="#10b981" />
        
        <path d="M 50,20 C 100,20 120,40 180,40" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
        <path d="M 50,40 L 180,40" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
        <path d="M 50,60 C 100,60 120,40 180,40" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
        
        <rect x="180" y="25" width="40" height="30" rx="4" fill="#059669" />
        <path d="M 220,40 L 360,40" fill="none" stroke="url(#gradGreen)" strokeWidth="6" strokeLinecap="round" />
        
        <circle cx="360" cy="40" r="8" fill="#34d399" opacity="0.8">
          <animate attributeName="r" values="6;9;6" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
  {
    id: "iot-twin",
    title: "IoT Digital Twin Platform",
    description: "Azure Digital Twins + IoT Hub + JanusGraph for AI-driven anomaly detection and real-time telemetry",
    tags: ["Azure Digital Twins", "IoT Hub", "Event Hub", "JanusGraph", "Flask"],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="400" height="80" fill="#3b0764" opacity="0.15" />
        
        {/* Central Node */}
        <circle cx="200" cy="40" r="16" fill="#a855f7" />
        <circle cx="200" cy="40" r="24" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="24;32;24" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Satellites */}
        <circle cx="120" cy="20" r="6" fill="#c084fc" />
        <circle cx="100" cy="60" r="8" fill="#c084fc" />
        <circle cx="280" cy="15" r="7" fill="#c084fc" />
        <circle cx="300" cy="65" r="5" fill="#c084fc" />
        <circle cx="260" cy="80" r="6" fill="#c084fc" />
        <circle cx="160" cy="75" r="4" fill="#c084fc" />
        
        {/* Connections */}
        <path d="M 200,40 L 120,20 M 200,40 L 100,60 M 200,40 L 280,15 M 200,40 L 300,65 M 200,40 L 260,80 M 200,40 L 160,75" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
        
        {/* Network points active */}
        <circle cx="120" cy="20" r="2" fill="#fff">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="65" r="2" fill="#fff">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </svg>
    ),
  },
];

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  visual: React.ReactNode;
};

const TiltCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 4,
        speed: 400,
        glare: true,
        "max-glare": 0.05,
        scale: 1.02,
      });
    }
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group bg-surface border border-border rounded-xl overflow-hidden cursor-none transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(255,107,53,0.15)] flex flex-col h-full"
    >
      {/* Visual Header Zone */}
      <div className="w-full h-[80px] bg-background border-b border-border/50 relative overflow-hidden">
        {project.visual}
        {/* Overlay subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
      </div>
      
      {/* Body Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-clash text-[16px] text-textPrimary font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="font-jakarta text-[12px] text-[#8a5a40] leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tags.map((tag: string) => (
            <span 
              key={tag}
              className="bg-background border border-[#2a1a10] text-[#6b4030] font-mono text-[9px] uppercase px-2 py-1 rounded-[3px] group-hover:border-primary/20 group-hover:text-[#8a5a40] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* View Link */}
        <a 
          href="#" 
          className="font-mono text-[10px] text-primary uppercase tracking-widest flex items-center mt-auto opacity-70 group-hover:opacity-100 transition-opacity"
        >
          View Project <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-clash text-3xl md:text-4xl text-textPrimary font-semibold tracking-tight">
              Selected Work
            </h2>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <TiltCard project={project} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
