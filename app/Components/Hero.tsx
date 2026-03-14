"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const HERO_VIDEO_MIN_HOLD_MS = 1000;

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadStartRef = useRef<number>(0);
  const revealTimeoutRef = useRef<number | null>(null);
  const [useStaticPoster, setUseStaticPoster] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  registerGsap();

  useEffect(() => {
    const prefersReduced = shouldReduceMotion();
    const prefersStaticHero = window.matchMedia("(max-width: 767px)").matches;

    if (prefersReduced || prefersStaticHero) {
      setUseStaticPoster(true);
      setVideoReady(true);
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    loadStartRef.current = performance.now();

    void video.play().catch(() => {
      setUseStaticPoster(true);
      setVideoReady(true);
    });

    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const revealVideo = () => {
    if (videoReady) {
      return;
    }

    const elapsed = performance.now() - loadStartRef.current;
    const remaining = Math.max(HERO_VIDEO_MIN_HOLD_MS - elapsed, 0);

    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
    }

    revealTimeoutRef.current = window.setTimeout(() => {
      setVideoReady(true);
      revealTimeoutRef.current = null;
    }, remaining);
  };

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-gsap=hero-media-wrap]", { scale: 1.06, opacity: 0.4, duration: 1.3 })
        .from("[data-gsap=hero-flare-left]", { xPercent: -12, opacity: 0, duration: 0.9 }, "-=1.05")
        .from("[data-gsap=hero-flare-right]", { xPercent: 8, opacity: 0, duration: 0.9 }, "-=0.8")
        .from("[data-gsap=hero-kicker]", { y: 24, opacity: 0, duration: 0.5 }, "-=0.85")
        .from("[data-gsap=hero-title]", { y: 56, opacity: 0, duration: 0.85 }, "-=0.35")
        .from("[data-gsap=hero-copy]", { y: 24, opacity: 0, duration: 0.5 }, "-=0.45")
        .from("[data-gsap=hero-cta]", { y: 18, opacity: 0, stagger: 0.12, duration: 0.45 }, "-=0.22")
        .from("[data-gsap=hero-metric]", { y: 18, opacity: 0, stagger: 0.1, duration: 0.42 }, "-=0.18");

      gsap.to("[data-gsap=hero-media-wrap]", {
        yPercent: 10,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to("[data-gsap=hero-flare-left]", {
        xPercent: 6,
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="hero" ref={root} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div data-gsap="hero-media-wrap" className="absolute inset-0">
          {useStaticPoster ? (
            <img
              data-gsap="hero-bg"
              src="/assets/img/hero/hero2.jpg"
              alt="Good Shape hero"
              className="h-full w-full object-cover opacity-55 grayscale"
            />
          ) : (
            <>
              <video
                ref={videoRef}
                data-gsap="hero-bg"
                className={`h-full w-full object-cover grayscale transition-opacity duration-700 ${
                  videoReady ? "opacity-55" : "opacity-0"
                }`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/assets/img/hero/hero2.jpg"
                onCanPlayThrough={revealVideo}
                onError={() => {
                  setUseStaticPoster(true);
                  setVideoReady(true);
                }}
              >
                <source src="/assets/video/Hero_animation_for_landing_page.mp4" type="video/mp4" />
              </video>
              <img
                src="/assets/img/hero/hero2.jpg"
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-700 ${
                  videoReady ? "opacity-0" : "opacity-55"
                }`}
              />
              {!videoReady && (
                <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden bg-white/10">
                  <div className="loader-bar absolute inset-y-0 left-0 w-1/3" />
                </div>
              )}
            </>
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_38%)]" />
          <div
            data-gsap="hero-flare-left"
            className="pointer-events-none absolute left-[-8%] top-[44%] h-[2px] w-[52%] -translate-y-1/2 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.42)_16%,rgba(120,150,255,0.12)_42%,transparent_100%)] opacity-70 blur-[1px]"
          />
          <div className="pointer-events-none absolute left-[-3%] top-[44%] h-20 w-20 -translate-y-1/2 rounded-full bg-white/45 blur-2xl" />
          <div
            data-gsap="hero-flare-right"
            className="pointer-events-none absolute right-[18%] top-[46%] h-[1px] w-[14%] -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.26)_38%,rgba(255,175,140,0.55)_58%,transparent_100%)] opacity-65 blur-[0.5px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/25 to-black/60" />
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
            <p className="text-3xl font-black text-white">+200</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#fe0000]">Miembros</p>
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
