import { Hero } from "@/app/Components/Hero";
import { Menu } from "@/app/Components/Menu";
import WhatOfferSection from "@/app/Components/WhatOfferSection";
import ContactMe from "@/app/Components/ContactMe";
import {DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL} from "@/lib/constants";
import Script from 'next/script';
import { useState } from 'react';
import ContentSection from "./Components/ContentSection";
import RentOurLocal from "./Components/RentOurLocal";

const HomePage = () => {
  return (
      <div>
        <Hero />
        <WhatOfferSection />
        <ContentSection />
        <RentOurLocal />
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
