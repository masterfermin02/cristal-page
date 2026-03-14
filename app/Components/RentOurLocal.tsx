import { DEFAULT_WHATSAPP_URL } from "@/lib/constants";

const RENT_MESSAGE_CORTA = encodeURIComponent(
  "Hola, estoy interesado/a en alquilar su espacio para un taller o charla. Me gustaría consultar disponibilidad para la Jornada Corta (8 horas - $350). Mensaje enviado desde el sitio web.",
);

const RENT_MESSAGE_EXTENDIDA = encodeURIComponent(
  "Hola, estoy interesado/a en alquilar su espacio para un taller o charla. Me gustaría consultar disponibilidad para la Jornada Extendida (12 horas - $500). Mensaje enviado desde el sitio web.",
);

const RentOurLocal = () => {
  return (
    <section id="rent-our-local" className="section-shell py-20">
      <div className="glass-panel grid gap-8 p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <span className="section-kicker">Alquila nuestro espacio</span>
          <h2 className="section-title mt-5">Disponible para talleres y charlas.</h2>
          <div className="mt-6 space-y-4 text-base leading-7">
            <p className="text-[#d2c6c3]">
              Debido a la ubicacion estrategica y facil acceso que tenemos, nuestro espacio
              se presta para charlas, cursos, talleres y capacitaciones.
            </p>
            <p className="text-[#d2c6c3]">Capacidad para mas de 50 personas.</p>
            <p className="text-[#d2c6c3]">
              Disponible viernes, sabados y domingos con al menos 15 dias de anticipacion.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <a
            href={DEFAULT_WHATSAPP_URL + RENT_MESSAGE_CORTA}
            target="_blank"
            rel="noopener noreferrer"
            className="stack-card block transition-opacity hover:opacity-80"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#fe0000]">
              Jornada corta
            </p>
            <p className="mt-3 font-headline text-4xl font-extrabold text-white">$350</p>
            <p className="mt-2 text-sm text-[#f0e4e1]">8 horas</p>
          </a>
          <a
            href={DEFAULT_WHATSAPP_URL + RENT_MESSAGE_EXTENDIDA}
            target="_blank"
            rel="noopener noreferrer"
            className="stack-card block transition-opacity hover:opacity-80"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#fe0000]">
              Jornada extendida
            </p>
            <p className="mt-3 font-headline text-4xl font-extrabold text-white">$500</p>
            <p className="mt-2 text-sm text-[#f0e4e1]">12 horas</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RentOurLocal;
