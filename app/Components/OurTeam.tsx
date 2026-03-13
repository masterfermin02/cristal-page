"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerGsap, shouldReduceMotion } from "@/lib/gsap";

const coaches = [
  {
    name: "Cristal Lopez",
    role: "Entrenadora principal",
    image: "/assets/img/team/cristal.jpeg",
    href: "/plans/cristal",
    bio: [
      "Entrenadora personal certificada (FDFF)",
      "Certificacion nutricion y dietetica aplicada al deporte (FDFF)",
      "Atleta campeona fisiculturismo bikini wellness (2022)",
      "Taller sistemas de entrenamiento",
      "Taller suplementarios y farmacologia",
      "Taller peak week management",
    ],
  },
  {
    name: "Yoedy Bernard",
    role: "Coach internacional",
    image: "/assets/img/team/joedy_natasha.jpeg",
    href: "/plans/yoedy",
    bio: [
      "Coach internacional en competencion de culturismo y fitness (IFBB Academy)",
      "Certificado en nutricion, ejercicios y deportes (Wageningen University and Research)",
      "Estudiante de maestria en nutricion (Escuela de Postgrado de Medicina y Sanidad, Grupo Esneca)",
    ],
  },
  {
    name: "Joan Guzman",
    role: "Performance specialist",
    image: "/assets/img/team/joan-2.jpeg",
    href: "/plans/joan",
    bio: [
      "MLB player performance specialist",
      "Sport nutrition",
      "FMS level 1",
    ],
  },
];

export default function OurTeam() {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      if (shouldReduceMotion()) {
        return;
      }

      gsap.from("[data-gsap=coach-card]", {
        y: 56,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 76%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="our-team" ref={root} className="scroll-mt-24 bg-[#0f0f0f] py-20">
      <div className="section-shell">
        <h2 className="mb-12 text-center font-display text-4xl uppercase italic text-white md:text-5xl">
          LOS <span className="text-[#fe0000]">COACHES</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <article data-gsap="coach-card" key={coach.name} className="rounded-[28px] border border-white/10 bg-[#121212] p-6">
              <div className="mb-6 flex items-center gap-5">
                <div className="relative h-24 w-24 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#fe0000] blur-md opacity-30" />
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="relative rounded-full border-2 border-[#fe0000] object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase italic text-white">{coach.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-[#fe0000]">
                    {coach.role}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {coach.bio.map((line) => (
                  <p key={line} className="text-sm leading-6 text-[#e5d8d5]">
                    {line}
                  </p>
                ))}
              </div>
              <Link href={coach.href} className="primary-cta mt-6 w-full">
                Ver planes
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
