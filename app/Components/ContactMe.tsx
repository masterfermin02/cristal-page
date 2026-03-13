import { DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL } from "@/lib/constants";

export default function ContactMe() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-20">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel p-8 lg:p-10">
          <span className="section-kicker">Contactos</span>
          <h2 className="section-title mt-5">Agenda tu siguiente paso.</h2>
          <p className="mt-5 text-base leading-7 text-[#e2cfca]">
            Escríbenos para reservar una clase, revisar disponibilidad o recibir orientacion
            sobre el plan ideal para ti.
          </p>
          <a
            href={DEFAULT_WHATSAPP_URL + DEFAULT_WHATSAPP_MESSAGE}
            target="_blank"
            className="primary-cta mt-8"
          >
            Contactar por WhatsApp
          </a>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-[#ffffff14] shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <iframe
            title="Good Shape map"
            className="h-[420px] w-full"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=1000&amp;height=400&amp;hl=en&amp;q=Plaza dommy mall&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>
    </section>
  );
}
