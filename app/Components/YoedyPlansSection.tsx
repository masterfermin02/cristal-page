"use client";

import { forwardRef } from "react";
import SingleFeature from "@/app/Components/SingleFeature";
import { createMessage } from "@/lib/whatsapp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const YoedyPlansSection = forwardRef<HTMLElement, { whatsAppUrl: string }>(({ whatsAppUrl }, ref) => {
  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      gsap.from("[data-gsap=yoedy-plan-card]", {
        y: 56,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-gsap=yoedy-plans-root]",
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section id="planes" ref={ref} data-gsap="yoedy-plans-root" className="bg-[#080808] py-20">
      <div className="section-shell">
        <div className="mb-12">
          <span className="section-kicker">Planes Yoedy</span>
          <h2 className="mt-5 font-display text-4xl uppercase italic leading-none text-white md:text-5xl">
            OPCION <span className="text-[#fe0000]">DIRECTA</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article data-gsap="yoedy-plan-card" className="flex flex-col rounded-[28px] border border-[#fe0000] bg-gradient-to-b from-[#1a0a0a] to-[#0d0d0d] p-7 shadow-[0_0_24px_rgba(254,0,0,0.16)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#fe0000]">
              Intensivo
            </p>
            <h3 className="mt-3 font-display text-3xl uppercase italic text-white">3 dias a la semana</h3>
            <p className="mt-5 border-t border-white/10 pt-5 font-display text-5xl font-black uppercase italic text-white">
              $9,000 <span className="text-base font-medium not-italic text-[#efe2de]">(por mes)</span>
            </p>
            <div className="mt-6 flex flex-1 flex-col gap-3">
              <SingleFeature label="Entrenamiento 3 dias a la semana" />
            </div>
            <a href={whatsAppUrl + createMessage("plan de Yoedy de 3 dias a la semana")} target="_blank" className="primary-cta mt-8">
              Ver disponibilidad
            </a>
          </article>
        </div>
      </div>
    </section>
  );
});

YoedyPlansSection.displayName = "YoedyPlansSection";

export default YoedyPlansSection;
