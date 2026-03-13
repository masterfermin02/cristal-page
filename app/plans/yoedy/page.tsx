import Script from "next/script";
import { Menu } from "@/app/Components/Menu";
import YoedyPlansSection from "@/app/Components/YoedyPlansSection";
import ContactMe from "@/app/Components/ContactMe";
import { DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL } from "@/lib/constants";

export default function Page() {
  return (
    <div>
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
      <div className="pb-12">
        <section className="bg-[#080808] pt-28">
          <div className="section-shell pb-6">
            <a
              href="/#our-team"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#d2c6c3] transition hover:text-[#fe0000]"
            >
              <span aria-hidden="true">←</span>
              Volver al equipo
            </a>
          </div>
        </section>
        <YoedyPlansSection whatsAppUrl="https://wa.me/+18493766655?text=" />
        <ContactMe />
      </div>
    </div>
  );
}
