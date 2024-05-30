"use client";

import React, { useState } from "react";
import PricingSection from "@/app/Components/PricingSection";
import ServiceSection from "@/app/Components/ServiceSection";
import AboutSection from "@/app/Components/AboutSection";
import OurTeam from "@/app/Components/OurTeam";
import { DEFAULT_WHATSAPP_URL } from "@/lib/constants";

export default function ContentSection() {
  const [seePlans, setSeePlans] = useState(false);

  return (
    <>
      {!seePlans && <OurTeam seePlanCristalClick={() => setSeePlans(true)} />}
        {!seePlans && <ServiceSection />}
        {seePlans && <PricingSection whatsAppUrl={DEFAULT_WHATSAPP_URL} />}
        {seePlans && <section id={'planes'} className="pricing-area section-padding40 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                        <button type="button" onClick={() => setSeePlans(false)} className="btn btn-sm btn-outline-secondary">Ver equipo</button>
                        </div>
                    </div>
                </div>
            </div>
          </section>}
        {!seePlans && <AboutSection />}
    </>
  );
}