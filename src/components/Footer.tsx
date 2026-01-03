import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="relative z-20 py-16 md:py-24 px-8 md:px-10"
      style={{ backgroundColor: 'var(--hero-gradient-start)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              BARINN
            </h3>
            <p 
              className="text-white/80 text-base"
              style={{ fontFamily: 'var(--font-clash-regular)' }}
            >
              Hristu upp kvöldið með frábærum kokteílum
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Flýtileiðir
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Heim", href: "/" },
                { label: "Kokteílar 101", href: "/cocktails" },
                { label: "Uppskriftir", href: "/recipes" },
                { label: "Um Barinn", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-base"
                    style={{ fontFamily: 'var(--font-clash-regular)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 
              className="text-xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Flokkar
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Gin", href: "/cocktails/gin" },
                { label: "Romm", href: "/cocktails/romm" },
                { label: "Tequila", href: "/cocktails/tequila" },
                { label: "Viskí", href: "/cocktails/viski" },
                { label: "Vodka", href: "/cocktails/vodka" },
                { label: "Spritz", href: "/cocktails/spritz" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-base"
                    style={{ fontFamily: 'var(--font-clash-regular)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Hafðu Samband
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@barinn.is"
                  className="text-white/80 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-clash-regular)' }}
                >
                  hello@barinn.is
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/barinn.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-base"
                  style={{ fontFamily: 'var(--font-clash-regular)' }}
                >
                  @barinn.is
                </a>
              </li>
              <li>
                <p
                  className="text-white/80 text-base"
                  style={{ fontFamily: 'var(--font-clash-regular)' }}
                >
                  Reykjavík, Ísland
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-white/60 text-sm"
              style={{ fontFamily: 'var(--font-clash-regular)' }}
            >
              © {new Date().getFullYear()} Barinn. Allur réttur áskilinn.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'var(--font-clash-regular)' }}
              >
                Persónuvernd
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: 'var(--font-clash-regular)' }}
              >
                Skilmálar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

