import { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { ring2 } from 'ldrs';
import { Button } from '../ui/Button';
import { GITHUB_RELEASE_URL } from '../../lib/constants';

ring2.register();

export function Hero() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      window.open(GITHUB_RELEASE_URL, '_blank');
      toast.success('Descarga iniciada', {
        description: 'El instalador se está descargando.',
      });
      setLoading(false);
    }, 600);
  };

  return (
    <section
      id="hero"
      className="relative min-h-svh bg-midnight-ink flex flex-col items-center justify-center px-5 sm:px-8 pt-16"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(161,254,160,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1200px]">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-muted-ash mb-5 sm:mb-6"
        >
          Modpack Fabric 1.20.1
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-[100] leading-none tracking-[-0.03em] text-canvas-white uppercase"
          style={{
            fontSize: 'clamp(72px, 14vw, 180px)',
            textShadow: '0 0 80px rgba(161,254,160,0.15)',
          }}
        >
          THE WORLD
          <br />
          <span className="font-[900]">GENERATIONS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-1 sm:gap-3"
        >
          {['Fabric 1.20.1', 'Servidor privado', '+300 mods'].map((item, i) => (
            <span key={item} className="flex items-center gap-1 sm:gap-3">
              <span className="font-mono text-xs text-muted-ash tracking-wider">{item}</span>
              {i < 2 && <span className="hidden sm:inline font-mono text-xs text-electric-mint/40">·</span>}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 w-full sm:w-auto flex justify-center"
        >
          <Button variant="mint" size="lg" onClick={handleDownload} disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <l-ring-2 size="20" stroke="3" stroke-length="0.25" bg-opacity="0.1" speed="0.8" color="#000000" />
            ) : (
              <Download size={18} />
            )}
            Descargar instalador
          </Button>
        </motion.div>

        {/* Version note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-[10px] sm:text-xs text-muted-ash mt-3 tracking-widest"
        >
          Windows · Gratis · Sin cuenta requerida
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-electric-mint opacity-60"
        />
      </motion.div>
    </section>
  );
}
