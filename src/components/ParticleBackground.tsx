"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ff6b35",
          },
          links: {
            enable: false, // No lines between particles as requested
          },
          move: {
            direction: "top", // Upward drift
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.6, // Slow drift
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1200,
            },
            value: 40, // Sparse density
          },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Small dots
          },
        },
        detectRetina: true,
      }}
    />
  );
}
