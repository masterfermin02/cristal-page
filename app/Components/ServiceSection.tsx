"use client";

import SingleFeature from "@/app/Components/SingleFeature";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const serviceColumns = [
  {
    title: "Acceso",
    eyebrow: "Inicio",
    features: [
      "CLASE DE PRUEBA - GRATIS",
      "CLASE SIN INSCRIPCION - RD$1,000",
      "PROGRAMA DE ENTRENAMIENTO ADAPATADO A SU CONDICION FISICA Y SU OBJETIVO (INCLUYE ACCESO A LA APP DE SEGUIMIENTO) - RD$3,500",
    ],
  },
  {
    title: "Nutricion",
    eyebrow: "Control",
    features: [
      "PLAN DE NUTRICION PERSONALIZADO - RD$3,500",
      "EVALUACION DE SEGUIMIENTO INBODY - RD$500",
      "REPOSICION/CAMBIO DE HORARIO - RD$500",
    ],
  },
  {
    title: "Recuperacion",
    eyebrow: "Recovery",
    features: [
      "MASAJE DE DESCARGA MUSCULAR - RD$2,000",
      "TERAPIA DE CUPPING/VENTOSAS - RD$2,000",
    ],
  },
  {
    title: "Readaptacion",
    eyebrow: "Performance",
    features: [
      "READAPTACION DEPORTIVA - RD$2,000",
      "TERAPIA VIBRATORIA - RD$2,000",
    ],
  },
];

const ServicesSection = () => {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      gsap.from("[data-gsap=service-card]", {
        y: 54,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="services" ref={root} className="bg-[#0b0b0b] py-20">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Servicios</span>
            <h2 className="mt-5 font-display text-4xl uppercase italic leading-none text-white md:text-5xl">
              SOPORTE PARA <br />
              <span className="text-[#fe0000]">SEGUIR AVANZANDO</span>
            </h2>
          </div>
          <p className="max-w-md text-sm uppercase tracking-[0.2em] text-[#d2c6c3]">
            Complementos que elevan el entrenamiento, la recuperacion y el seguimiento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceColumns.map((column) => (
            <article
              key={column.title}
              data-gsap="service-card"
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121212] p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#fe0000] to-transparent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#fe0000]">
                {column.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-3xl uppercase italic text-white">
                {column.title}
              </h3>
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="space-y-4 text-[#d2c6c3]">
                  {column.features.map((feature) => (
                    <SingleFeature key={feature} label={feature} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
