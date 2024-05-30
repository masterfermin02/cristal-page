import { draftMode } from 'next/headers'

import { getAllPosts } from '@/lib/api'
import { Hero } from "@/app/Components/Hero";
import { Menu } from "@/app/Components/Menu";
import WhatOfferSection from "@/app/Components/WhatOfferSection";
import PricingSection from "@/app/Components/PricingSection";
import AboutSection from "@/app/Components/AboutSection";
import ContactMe from "@/app/Components/ContactMe";
import {DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL} from "@/lib/constants";
import Script from 'next/script';
import OurTeam from "@/app/Components/OurTeam";

const HomePage = () => {
  return (
      <div>
        <Hero />
        <PricingSection whatsAppUrl={DEFAULT_WHATSAPP_URL} />
        <ContactMe />
      </div>
  );
};


export default async function Page() {
  return (
    <div >
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GGH6RKNP9W" />
        <Script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-GGH6RKNP9W');
            `}
        </Script>
      <Menu whatsAppUrl={DEFAULT_WHATSAPP_URL} message={DEFAULT_WHATSAPP_MESSAGE} />
      <HomePage />
    </div>
  )
}