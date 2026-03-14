import "./globals.css";
import "./assets/scss/style.scss";
import { DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_URL } from "@/lib/constants";
import SplashScreen from "@/app/Components/SplashScreen";

export const metadata = {
  title: "Good shape",
  description: "Good shape gym page.",
};

function Footer() {
  return (
    <footer className="section-shell pb-10 pt-16">
      <div className="border-t border-white/5 bg-black px-6 py-12 text-center">
        <div className="text-3xl font-black italic text-white">
          GOOD<span className="text-[#fe0000]">SHAPE</span>
        </div>
        <div className="mt-6 flex justify-center gap-5 text-[#d2c6c3]">
          <a
            href="https://www.instagram.com/goodshapesti/?hl=en"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#121212] transition hover:border-[#fe0000] hover:text-[#fe0000]"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
            </svg>
          </a>
          <a
            href={DEFAULT_WHATSAPP_URL + DEFAULT_WHATSAPP_MESSAGE}
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#121212] transition hover:border-[#fe0000] hover:text-[#fe0000]"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
              <path d="M20 12a8 8 0 0 1-11.7 7l-4.3 1 1.1-4.1A8 8 0 1 1 20 12Z" />
              <path d="M9.4 8.9c-.3-.7-.6-.6-.9-.6h-.3c-.3 0-.7.1-.9.4-.3.4-1 1-.9 2.4 0 1.4 1 2.8 1.1 2.9.1.2 2 3.2 5 4.4 2.4.9 2.9.7 3.4.7.5-.1 1.7-.7 1.9-1.5.2-.8.2-1.4.1-1.5-.1-.1-.4-.2-.8-.4s-1.7-.8-2-.9c-.2-.1-.4-.1-.6.2l-.8 1c-.1.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.5l-.8-1.7Z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#121212] transition hover:border-[#fe0000] hover:text-[#fe0000]"
            aria-label="Contact"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
              <path d="M12 21s6-4.9 6-11a6 6 0 1 0-12 0c0 6.1 6 11 6 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.24em] text-[#b2a6a3]">
          Plaza Dommyn Mall · Santiago · Entrenamiento con compromiso
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <SplashScreen />
        <section className="site-shell min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
