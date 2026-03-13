export const Menu = ({
  whatsAppUrl,
  message,
}: {
  whatsAppUrl: string;
  message: string;
}) => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-black italic tracking-tighter text-white hover:text-white">
          GOOD<span className="text-[#fe0000]">SHAPE</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#d3caca] lg:flex">
          <a href="/#hero" className="transition hover:text-[#fe0000]">
            Inicio
          </a>
          <a href="/#what-we-offer" className="transition hover:text-[#fe0000]">
            Ecosistema
          </a>
          <a href="/#our-team" className="transition hover:text-[#fe0000]">
            Equipo
          </a>
          <a href="/#contact" className="transition hover:text-[#fe0000]">
            Contacto
          </a>
        </nav>
        <a href={whatsAppUrl + message} target="_blank" className="primary-cta px-5 py-3 text-xs">
          Unete Ya
        </a>
      </div>
    </header>
  );
};
