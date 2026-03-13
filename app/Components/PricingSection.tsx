"use client";

import { forwardRef, useRef } from "react";
import SingleFeature from "@/app/Components/SingleFeature";
import { createMessage } from "@/lib/whatsapp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const plans = [
  { name: "Plan Basico", price: "$6,500", subtitle: "(8 clases)", tier: "Entrada", features: ["8 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO", "ASISTENCIA PERSONALIZADA", "PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICION FISICA Y SU OBJETIVO", "ACCESO A LA APLICACION DE SEGUIMIENTO", "INCLUYE 2 REPOSICIONES DE CLASE O CAMBIOS DE HORARIO", "EVALUACION FISICA AL COMPLETAR EL MES", "GUIA DE SUPLEMENTACION"] },
  { name: "Plan Good Shape", price: "$8,500", subtitle: "(12 clases)", tier: "Mas pedido", featured: true, features: ["12 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO", "ASISTENCIA PERSONALIZADA", "PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICION FISICA Y SU OBJETIVO", "ACCESO A LA APLICACION DE SEGUIMIENTO", "ACCESO A LAS INSTALACIONES DEL GYM FUERA DE SU HORARIO CON CITA PREVIA SEGUN DISPONIBILIDAD", "INCLUYE 2 REPOSICIONES DE CLASE", "INCLUYE 2 CAMBIOS DE HORARIO", "EVALUACION FISICA AL COMPLETAR EL MES", "GUIA DE SUPLEMENTACION"] },
  { name: "Plan Premium", price: "$12,000", subtitle: "(16 clases)", tier: "Avanzado", features: ["16 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO", "ASISTENCIA PERSONALIZADA", "PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICION FISICA Y SU OBJETIVO", "ACCESO A LA APLICACION DE SEGUIMIENTO", "PLAN NUTRICIONAL PERSONALIZADO", "HORARIO FLEXIBLE: INCLUYE 2 CAMBIOS DE HORARIO A LA SEMANA", "1 EVALUACION FISICA AL COMPLETAR EL MES", "GUIA DE SUPLEMENTACION"] },
  { name: "Plan Elite", price: "$16,000", subtitle: "(16 clases)", tier: "Maximo nivel", features: ["16 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES", "ASISTENCIA PERSONALIZADA", "PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICION FISICA Y SU OBJETIVO", "ACCESO A LA APLICACION DE SEGUIMIENTO", "PLAN NUTRICIONAL PERSONALIZADO", "HORARIO FLEXIBLE: INCLUYE CAMBIO DE HORA ILIMITADO", "1 EVALUACION FISICA AL COMPLETAR EL MES", "1 ACOMPANANTE 1 VEZ A LA SEMANA OPCIONAL", "1 DESCARGA MUSCULAR POR MES", "GUIA DE SUPLEMENTACION"] },
  { name: "Plan Yo Perreo Sol@", price: "$3,000", tier: "Libre", features: ["EVALUACION INICIAL", "ACCESO A LAS INSTALACIONES RESPETANDO SU HORARIO ASIGNADO, EN CASO DE NECESITAR CAMBIO DE HORARIO DURANTE EL MES CONFIRMAR DISPONIBILIDAD", "GUIA O AYUDA DEL PERSONAL CAPACITADO SI LO REQUIERE", "1 EVALUACION DE SEGUIMIENTO GRATIS A LOS 3 MESES CONSECUTIVOS"] },
  { name: "Kids & Teens", price: "$6,500", subtitle: "(8 clases)", priceSecondary: "$8,500", subtitleSecondary: "(12 clases)", tier: "Juvenil", features: ["8 O 12 CLASES QUE DEBEN SER TOMADAS DENTRO DEL MES, RESPETANDO SU HORARIO ASIGNADO", "PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU EDAD", "PLAN NUTRICIONAL PERSONALIZADO", "AMBIENTE SANO", "GRUPO LIMITADO", "INCLUYE 2 REPOSICIONES DE CLASE", "INCLUYE 2 CAMBIOS DE HORARIO", "1 EVALUACION FISICA AL COMPLETAR EL MES", "PUEDE LLEVAR UN ACOMPANANTE ADULTO DURANTE LA HORA DE CLASE"] },
  { name: "Online Coaching", price: "$120", subtitle: "dolares (4 semanas)", priceSecondary: "$300", subtitleSecondary: "dolares (12 semanas)", tier: "Remoto", features: ["EVALUACION INICIAL", "PLAN NUTRICIONAL PERSONALIZADO", "PROGRAMA DE ENTRENAMIENTO ADAPATADO A SU CONDICION FISICA Y SU OBJETIVO", "ACCESO A LA APLICACION DE SEGUIMIENTO", "RUTINAS CON VIDEOS DE EJEMPLO", "GUIA DE SUPLEMENTACION", "ATENCION DIARIA AL CLIENTE VIA WHATSAPP", "SEGUIMIENTO 1 VEZ A LA SEMANA VIA WHATSAPP", "EVALUACION DE SEGUIMIENTO 1 VEZ AL MES"] },
];

const otherServices = [
  ["CLASE DE PRUEBA - GRATIS", "CLASE SIN INSCRIPCION - RD$1,000", "PROGRAMA DE ENTRENAMIENTO ADAPTADO A SU CONDICION FISICA Y SU OBJETIVO (INCLUYE ACCESO A LA APP DE SEGUIMIENTO) - RD$3,500"],
  ["PLAN DE NUTRICION PERSONALIZADO - RD$3,500", "EVALUACION DE SEGUIMIENTO INBODY - RD$500", "REPOSICION/CAMBIO DE HORARIO - RD$500"],
  ["MASAJE DE DESCARGA MUSCULAR - RD$2,000", "TERAPIA DE CUPPING/VENTOSAS - RD$2,000"],
  ["READAPTACION DEPORTIVA - RD$2,000", "TERAPIA VIBRATORIA - RD$2,000"],
];

const PricingSection = forwardRef<HTMLElement, { whatsAppUrl: string }>(({ whatsAppUrl }, ref) => {
  const root = useRef<HTMLElement | null>(null);

  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      gsap.from("[data-gsap=plan-card]", {
        y: 64,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-gsap=plans-root]",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-gsap=other-service-card]", {
        y: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-gsap=other-services-root]",
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  const setSectionRef = (node: HTMLElement | null) => {
    root.current = node;

    if (typeof ref === "function") {
      ref(node);
      return;
    }

    if (ref) {
      ref.current = node;
    }
  };

  return (
    <section id="planes" ref={setSectionRef} data-gsap="plans-root" className="bg-[#080808] py-20">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Planes Good Shape</span>
            <h2 className="mt-5 font-display text-4xl uppercase italic leading-none text-white md:text-5xl">
              ELIGE TU <br />
              <span className="text-[#fe0000]">RITMO</span>
            </h2>
          </div>
          <p className="max-w-md text-sm uppercase tracking-[0.2em] text-[#d2c6c3]">
            Programas con seguimiento, estructura y acceso segun tu objetivo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              data-gsap="plan-card"
              className={`relative flex flex-col overflow-hidden rounded-[28px] border p-7 ${
                plan.featured
                  ? "border-[#fe0000] bg-gradient-to-b from-[#1a0a0a] to-[#0d0d0d] shadow-[0_0_28px_rgba(254,0,0,0.18)]"
                  : "border-white/10 bg-[#121212]"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-[#fe0000] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  Destacado
                </div>
              )}
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#fe0000]">{plan.tier}</p>
              <h3 className="mt-3 font-display text-3xl uppercase italic text-white">{plan.name}</h3>
              <div className="mt-5 space-y-2 border-t border-white/10 pt-5">
                <p className="font-display text-5xl font-black uppercase italic text-white">
                  {plan.price}{" "}
                  {plan.subtitle && <span className="text-base font-medium not-italic text-[#dfd2cf]">{plan.subtitle}</span>}
                </p>
                {plan.priceSecondary && (
                  <p className="text-lg font-semibold text-[#eee2de]">
                    {plan.priceSecondary}{" "}
                    {plan.subtitleSecondary && <span className="text-sm font-medium">{plan.subtitleSecondary}</span>}
                  </p>
                )}
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <SingleFeature key={feature} label={feature} />
                ))}
              </div>
              <a href={whatsAppUrl + createMessage(plan.name)} target="_blank" className="primary-cta mt-8">
                Ver disponibilidad
              </a>
            </article>
          ))}
        </div>
        <div data-gsap="other-services-root" className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="section-kicker">Otros servicios</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {otherServices.map((features, index) => (
              <div data-gsap="other-service-card" key={index} className="rounded-[24px] border border-white/10 bg-[#111111] p-6 space-y-4">
                {features.map((feature) => (
                  <SingleFeature key={feature} label={feature} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = "PricingSection";

export default PricingSection;
