"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const offers = [
  {
    title: "Entrenamiento asistido",
    image: "/assets/img/gallery/cristal-pelota.png",
  },
  {
    title: "Nutricion",
    image: "/assets/img/gallery/cristal-cables.png",
  },
  {
    title: "Online coaching",
    image: "/assets/img/gallery/cristal-goma.png",
  },
];

const TeamSection = () => {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>("[data-gsap=offer-card]");

      cards.forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0, scale: 1 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 92%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              card,
              { y: 28, scale: 0.98 },
              {
                y: 0,
                scale: 1,
                duration: 0.65,
                delay: index * 0.08,
                ease: "power3.out",
                clearProps: "transform",
              },
            );
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="what-we-offer" ref={root} className="scroll-mt-24 bg-[#0a0a0a] py-20">
      <div className="section-shell">
        <div className="mb-12">
          <h2 className="font-display text-4xl uppercase italic leading-none text-white md:text-5xl">
            EL <br />
            <span className="text-[#fe0000]">ECOSISTEMA</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-[#fe0000]" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <a
              key={offer.title}
              href="/#our-team"
              data-gsap="offer-card"
              className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-[24px] border border-white/5 bg-[#121212] p-6"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover opacity-40 transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              <div className="relative z-10">
                <h3 className="font-display text-3xl uppercase italic text-white">{offer.title}</h3>
                <p className="mt-2 text-sm text-[#d6c9c6]">
                  Good Shape adapta este servicio a tu condicion fisica y objetivo.
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
