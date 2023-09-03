import { draftMode } from 'next/headers'

import { getAllPosts } from '@/lib/api'
import { Hero } from "@/app/Components/Hero";
import { Menu } from "@/app/Components/Menu";
import WhatOfferSection from "@/app/Components/WhatOfferSection";
import PricingSection from "@/app/Components/PricingSection";
import AboutSection from "@/app/Components/AboutSection";
import ContactMe from "@/app/Components/ContactMe";
import {DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL} from "@/lib/constants";

const HomePage = () => {
  return (
      <div>
        <Hero />
        <WhatOfferSection />
        <PricingSection whatsAppUrl={DEFAULT_WHATSAPP_URL} />
        <AboutSection />
        <ContactMe />
      </div>
  );
};


export default async function Page() {
  return (
    <div >
      <Menu whatsAppUrl={DEFAULT_WHATSAPP_URL} message={DEFAULT_WHATSAPP_MESSAGE} />
      <HomePage />
    </div>
  )
}
