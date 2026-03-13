"use client";

import { forwardRef } from "react";
import SingleFeature from "@/app/Components/SingleFeature";
import { createMessage } from "@/lib/whatsapp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const plans = [
  { name: "2 dias a la semana", price: "$5,500", tier: "Base", features: ["Entrenamiento 2 dias a la semana"] },
  { name: "3 dias a la semana", price: "$8,500", tier: "Mas pedido", featured: true, features: ["Entrenamiento 3 dias a la semana"] },
  { name: "4 dias a la semana", price: "$9,500", tier: "Competencia", features: ["Entrenamiento 4 dias a la semana"] },
];

const JoanPlansSection = forwardRef<HTMLElement, { whatsAppUrl: string }>(({ whatsAppUrl }, ref) => {
  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      gsap.from("[data-gsap=joan-plan-card]", {
        y: 56,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-gsap=joan-plans-root]",
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section id="planes" ref={ref} data-gsap="joan-plans-root" className="bg-[#080808] py-20">
      <div className="section-shell">
        <div className="mb-12">
          <span className="section-kicker">Planes Joan</span>
          <h2 className="mt-5 font-display text-4xl uppercase italic leading-none text-white md:text-5xl">
            RENDIMIENTO <span className="text-[#fe0000]">DEPORTIVO</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              data-gsap="joan-plan-card"
              className={`relative flex flex-col rounded-[28px] border p-7 ${
                plan.featured
                  ? "border-[#fe0000] bg-gradient-to-b from-[#1a0a0a] to-[#0d0d0d] shadow-[0_0_24px_rgba(254,0,0,0.16)]"
                  : "border-white/10 bg-[#121212]"
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#fe0000]">{plan.tier}</p>
              <h3 className="mt-3 font-display text-3xl uppercase italic text-white">{plan.name}</h3>
              <p className="mt-5 border-t border-white/10 pt-5 font-display text-5xl font-black uppercase italic text-white">
                {plan.price}
              </p>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <SingleFeature key={feature} label={feature} />
                ))}
              </div>
              <a href={whatsAppUrl + createMessage(`plan de Joan de ${plan.name}`)} target="_blank" className="primary-cta mt-8">
                Ver disponibilidad
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

JoanPlansSection.displayName = "JoanPlansSection";

export default JoanPlansSection;
