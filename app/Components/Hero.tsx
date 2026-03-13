"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-gsap=hero-bg]", { scale: 1.12, opacity: 0.4, duration: 1.3 })
        .from("[data-gsap=hero-kicker]", { y: 24, opacity: 0, duration: 0.5 }, "-=0.85")
        .from("[data-gsap=hero-title]", { y: 56, opacity: 0, duration: 0.85 }, "-=0.35")
        .from("[data-gsap=hero-copy]", { y: 24, opacity: 0, duration: 0.5 }, "-=0.45")
        .from("[data-gsap=hero-cta]", { y: 18, opacity: 0, stagger: 0.12, duration: 0.45 }, "-=0.22")
        .from("[data-gsap=hero-metric]", { y: 18, opacity: 0, stagger: 0.1, duration: 0.42 }, "-=0.18");

      gsap.to("[data-gsap=hero-bg]", {
        yPercent: 10,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="hero" ref={root} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          data-gsap="hero-bg"
          src="/assets/img/hero/hero2.jpg"
          alt="Good Shape hero"
          className="h-full w-full object-cover opacity-55 grayscale transition-all duration-700 hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60" />
      </div>
      <div className="relative z-10 px-6 text-center">
        <span data-gsap="hero-kicker" className="section-kicker mb-6">
          Good Shape Santiago
        </span>
        <h1 data-gsap="hero-title" className="font-display text-6xl uppercase italic leading-none tracking-tighter text-white md:text-8xl">
          TRANSFORMA <br />
          <span className="text-accent-gradient">TU FUERZA</span>
        </h1>
        <p data-gsap="hero-copy" className="mx-auto mt-6 max-w-xs text-lg font-medium text-[#ddd1ce] md:max-w-md">
          Entrenamiento asistido, nutricion y online coaching para quienes exigen una
          evolucion real.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a data-gsap="hero-cta" href="/#our-team" className="primary-cta">
            Ver planes
          </a>
          <a data-gsap="hero-cta" href="/#our-team" className="secondary-cta">
            Conocer coaches
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px animate-bounce bg-gradient-to-b from-[#fe0000] to-transparent" />
      </div>
      <div className="section-shell absolute bottom-10 hidden lg:block">
        <div className="grid max-w-md gap-4 sm:grid-cols-3">
          <div data-gsap="hero-metric" className="metric-card">
            <p className="text-3xl font-black text-white">3</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#fe0000]">Coaches</p>
          </div>
          <div data-gsap="hero-metric" className="metric-card">
            <p className="text-3xl font-black text-white">+50</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#fe0000]">Eventos</p>
          </div>
          <div data-gsap="hero-metric" className="metric-card">
            <p className="text-3xl font-black text-white">1:1</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#fe0000]">Seguimiento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
