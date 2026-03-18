"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

export default function StatsBar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <AnimatedSection className="w-full bg-[#0e0a07] border-y border-[#1e1208] relative z-20">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1e1208]"
      >
        {/* Stat 1 */}
        <div className="py-8 flex flex-col items-center justify-center text-center px-4">
          <h4 className="font-clash text-4xl lg:text-5xl font-semibold text-textPrimary tracking-tight mb-2">
            {inView ? <CountUp end={3} duration={2.5} /> : "0"}+
          </h4>
          <p className="font-jakarta text-[11px] uppercase tracking-widest text-[#6b4030]">
            Years Experience
          </p>
        </div>

        {/* Stat 2 */}
        <div className="py-8 flex flex-col items-center justify-center text-center px-4">
          <h4 className="font-clash text-4xl lg:text-5xl font-semibold text-textPrimary tracking-tight mb-2">
            {inView ? <CountUp end={10} duration={3} /> : "0"}
          </h4>
          <p className="font-jakarta text-[11px] uppercase tracking-widest text-[#6b4030]">
            Certifications
          </p>
        </div>

        {/* Stat 3 */}
        <div className="py-8 flex flex-col items-center justify-center text-center px-4 border-t lg:border-t-0 border-[#1e1208] lg:-ml-[1px]">
          <h4 className="font-clash text-4xl lg:text-5xl font-semibold text-textPrimary tracking-tight mb-2">
            {inView ? <CountUp end={4} duration={2} /> : "0"}
          </h4>
          <p className="font-jakarta text-[11px] uppercase tracking-widest text-[#6b4030]">
            Cloud Platforms
          </p>
        </div>

        {/* Stat 4 */}
        <div className="py-8 flex flex-col items-center justify-center text-center px-4 border-t lg:border-t-0 border-[#1e1208]">
          <h4 className="font-clash text-4xl lg:text-5xl font-semibold text-primary tracking-tight mb-2">
            EY
          </h4>
          <p className="font-jakarta text-[11px] uppercase tracking-widest text-[#6b4030]">
            Current Employer
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
