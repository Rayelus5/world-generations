export function Footer() {
  const links = [
    { label: 'Características', href: '#features' },
    { label: 'Instalación', href: '#install' },
    { label: 'Servidor', href: '#about' },
  ];

  return (
    <footer className="bg-midnight-ink border-t border-white/10">
      <div className="h-px bg-electric-mint opacity-40" />
      <div className="mx-auto max-w-[1200px] px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-electric-mint font-ui font-semibold text-xl tracking-widest uppercase">
          TWG
        </div>

        <nav className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-widest uppercase text-muted-ash hover:text-canvas-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs text-muted-ash tracking-wider">
          © 2025 THE WORLD GENERATIONS
        </p>
      </div>
    </footer>
  );
}
