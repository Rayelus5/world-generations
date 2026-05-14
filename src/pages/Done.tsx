import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const DISCORD_URL = 'https://discord.gg/C39kKYFByC';

export function DonePage() {
  return (
    <div className="min-h-screen bg-midnight-ink">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-midnight-ink border-b border-white/10">
        <div className="mx-auto max-w-[1200px] h-16 flex items-center justify-between px-6">
          <Link
            to="/"
            className="font-ui font-semibold text-xl tracking-widest text-electric-mint uppercase"
          >
            TWG
          </Link>
          <Link
            to="/"
            className="font-mono text-xs tracking-widest uppercase text-muted-ash hover:text-canvas-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={13} />
            Inicio
          </Link>
        </div>
        <div className="h-px bg-electric-mint opacity-60" />
      </header>

      <main className="pt-16 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Subtle glow */}
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(161,254,160,0.07) 0%, transparent 70%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-7 max-w-lg"
        >
          {/* Check icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.2 }}
          >
            <CheckCircle2
              size={72}
              className="text-electric-mint"
              strokeWidth={1.25}
              style={{ filter: 'drop-shadow(0 0 24px rgba(161,254,160,0.5))' }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col gap-2"
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-electric-mint">
              Solicitud registrada
            </span>
            <h1
              className="font-display font-[100] uppercase text-canvas-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(52px, 9vw, 100px)' }}
            >
              Solicitud
              <br />
              <span className="font-[900]">Recibida</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p className="font-mono text-sm text-canvas-white leading-relaxed tracking-wide">
              Tu solicitud ha sido registrada correctamente.
            </p>
            <p className="font-mono text-sm text-muted-ash leading-relaxed tracking-wide">
              Las solicitudes se revisan manualmente. Si eres seleccionado/a para
              acceder al servidor, recibirás confirmación a través del Discord.
              Únete para no perderte el aviso.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2"
          >
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-ui font-bold text-sm tracking-widest uppercase px-10 py-4 bg-electric-mint text-midnight-ink rounded-[100px] hover:brightness-90 transition-all"
            >
              Unirse al Discord
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center font-ui font-semibold text-xs tracking-widest uppercase px-8 py-4 border border-white/30 text-muted-ash hover:border-canvas-white hover:text-canvas-white transition-all"
            >
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
