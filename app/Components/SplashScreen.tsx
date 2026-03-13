"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap } from "@/lib/gsap";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [readyToExit, setReadyToExit] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const exitStarted = useRef(false);

  registerGsap();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-loader=panel]", {
        opacity: 0,
        duration: 0.2,
      })
        .from(
          "[data-loader=eyebrow]",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.05",
        )
        .from(
          "[data-loader=wordmark-left], [data-loader=wordmark-right]",
          {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.65,
          },
          "-=0.2",
        )
        .from(
          "[data-loader=divider]",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.6,
          },
          "-=0.25",
        )
        .from(
          "[data-loader=subcopy]",
          {
            y: 14,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.25",
        )
        .to(
          "[data-loader=bar-fill]",
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=0.2",
        );
    },
    { scope: root },
  );

  useEffect(() => {
    let minimumElapsed = false;
    let pageLoaded = document.readyState === "complete";

    const maybeExit = () => {
      if (!minimumElapsed || !pageLoaded || exitStarted.current || !root.current) {
        return;
      }

      exitStarted.current = true;
      setReadyToExit(true);

      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);

          const hash = window.location.hash;
          if (hash) {
            window.requestAnimationFrame(() => {
              const target = document.querySelector(hash);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            });
          }
        },
      });

      tl.to("[data-loader=content]", {
        y: -18,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      }).to(
        "[data-loader=panel]",
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.05",
      );
    };

    const timeout = window.setTimeout(() => {
      minimumElapsed = true;
      maybeExit();
    }, 2000);

    const handleLoad = () => {
      pageLoaded = true;
      maybeExit();
    };

    if (!pageLoaded) {
      window.addEventListener("load", handleLoad);
    } else {
      maybeExit();
    }

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={root}
      data-loader="panel"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#070707] px-6 ${
        readyToExit ? "pointer-events-none" : ""
      }`}
    >
      <div data-loader="content" className="flex w-full max-w-md flex-col items-center text-center">
        <p
          data-loader="eyebrow"
          className="text-[11px] font-bold uppercase tracking-[0.38em] text-[#d2c6c3]"
        >
          Good Shape Santiago
        </p>
        <div className="mt-5 overflow-hidden">
          <h1 className="font-display text-5xl uppercase italic leading-none tracking-tight text-white md:text-7xl">
            <span data-loader="wordmark-left">GOOD</span>
            <span data-loader="wordmark-right" className="ml-2 text-[#fe0000]">
              SHAPE
            </span>
          </h1>
        </div>
        <div
          data-loader="divider"
          className="mt-6 h-[2px] w-24 bg-gradient-to-r from-[#fe0000] to-transparent"
        />
        <p data-loader="subcopy" className="mt-5 text-sm uppercase tracking-[0.28em] text-[#d2c6c3]">
          Cargando experiencia
        </p>
        <div className="relative mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            data-loader="bar-fill"
            className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#fe0000] via-white to-[#fe0000]"
          />
        </div>
      </div>
    </div>
  );
}
