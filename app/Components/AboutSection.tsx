export default function AboutSection() {
  return (
    <section id="sobre-me" className="section-shell py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[32px] border border-[#ffffff14] bg-[#191315] shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <img
            className="h-full w-full object-cover"
            src="/assets/img/gallery/cristal-goma.png"
            alt="Cristal Lopez"
          />
        </div>
        <div className="glass-panel p-8 lg:p-10">
          <span className="section-kicker">Sobre mi</span>
          <h2 className="section-title mt-5">Cristal Lopez</h2>
          <div className="mt-6 space-y-4 text-base leading-7">
            <p className="text-[#d2c6c3]">
              Soy Cristal Lopez, una dominicana de pura cepa nacida en 1997. Desde mi
              infancia, el mundo del deporte ha sido una parte fundamental de mi vida.
            </p>
            <p className="text-[#d2c6c3]">
              Comence practicando Taekwondo a los 9 anos y luego explore futbol, boxeo y
              gimnasia. Aunque soy ingeniera civil de profesion, desde marzo de 2020 decidi
              enfocarme en especializarme en fitness.
            </p>
            <p className="text-[#d2c6c3]">
              Durante este tiempo he realizado certificaciones y diplomados para brindar un
              servicio de calidad. En 2022 alcance el primer lugar en bikini wellness.
            </p>
            <p className="text-[#d2c6c3]">
              Good Shape es mi primer gran proyecto y mi objetivo es ayudarte a alcanzar tus
              metas de salud y bienestar de la manera mas profesional y comprometida posible.
            </p>
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[#fe0000]">
            Cristal Mabel Lopez
          </p>
        </div>
      </div>
    </section>
  );
}
