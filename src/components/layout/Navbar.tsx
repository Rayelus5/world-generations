import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Características', href: '#features' },
    { label: 'Instalación', href: '#install' },
    { label: 'Servidor', href: '#about' },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight-ink border-b border-white/10">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
          className="font-ui font-semibold text-xl tracking-widest text-electric-mint uppercase"
        >
          TWG
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="font-ui text-sm tracking-widest uppercase px-4 py-2 border border-canvas-white text-canvas-white hover:bg-canvas-white hover:text-midnight-ink transition-all duration-200 cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="mint" size="sm" onClick={() => scrollTo('#hero')}>
            Descargar
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-canvas-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-midnight-ink border-t border-white/10 px-6 pb-4 flex flex-col gap-2">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-ui text-sm tracking-widest uppercase py-3 text-left text-canvas-white border-b border-white/10"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-2">
            <Button variant="mint" size="sm" onClick={() => scrollTo('#hero')}>
              Descargar
            </Button>
          </div>
        </div>
      )}

      {/* Electric Mint accent line */}
      <div className="h-px bg-electric-mint opacity-60" />
    </header>
  );
}
