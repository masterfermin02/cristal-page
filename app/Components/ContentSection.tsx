"use client";

import React, { use, useEffect, useState } from "react";
import PricingSection from "@/app/Components/PricingSection";
import JoanPlansSection from "@/app/Components/JoanPlansSection";
import YoedyPlansSection from "@/app/Components/YoedyPlansSection";
import ServiceSection from "@/app/Components/ServiceSection";
import AboutSection from "@/app/Components/AboutSection";
import OurTeam from "@/app/Components/OurTeam";
import { DEFAULT_WHATSAPP_URL } from "@/lib/constants";

export default function ContentSection() {
  const [selectedPlans, setSelectedPlans] = useState<null | 'cristal' | 'yoedy' | 'joan'>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const teamRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedPlans && sectionRef.current) {
      sectionRef.current.scrollIntoView({behavior: "smooth"});
    }

    if (!selectedPlans && teamRef.current) {
      teamRef.current.scrollIntoView({behavior: "smooth"});
    }

  }, [selectedPlans]);

  return (
    <>
      {!selectedPlans && (
        <OurTeam
          ref={teamRef}
          seePlanCristalClick={() => setSelectedPlans('cristal')}
          seePlanYoedyClick={() => setSelectedPlans('yoedy')}
          seePlanJoanClick={() => setSelectedPlans('joan')}
        />
      )}
        {!selectedPlans && <ServiceSection />}
        {selectedPlans === 'cristal' && <PricingSection ref={sectionRef} whatsAppUrl={DEFAULT_WHATSAPP_URL} />}
        {selectedPlans === 'yoedy' && <YoedyPlansSection ref={sectionRef} whatsAppUrl={'https://wa.me/+18493766655?text='} />}
        {selectedPlans === 'joan' && <JoanPlansSection ref={sectionRef} whatsAppUrl={'https://wa.me/+18297803248?text='} />}
        {selectedPlans && <section id={'planes'} className="pricing-area section-padding40 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                        <button type="button" onClick={() => setSelectedPlans(null)} className="btn btn-sm btn-outline-secondary">Ver equipo</button>
                        </div>
                    </div>
                </div>
            </div>
          </section>}
        {!selectedPlans && <AboutSection />}
    </>
  );
}