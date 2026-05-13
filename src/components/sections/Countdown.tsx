import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// June 6, 2026 at 17:00 CEST (UTC+2, Spain summer time)
const LAUNCH_DATE = new Date('2026-06-06T17:00:00+02:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

const units = [
  { key: 'days' as const, label: 'Días' },
  { key: 'hours' as const, label: 'Horas' },
  { key: 'minutes' as const, label: 'Minutos' },
  { key: 'seconds' as const, label: 'Segundos' },
];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="launch" className="bg-midnight-ink py-28 px-6 overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-ash">
            Apertura oficial
          </span>
          <h2
            className="font-display font-[100] uppercase text-canvas-white leading-none tracking-tight mt-3"
            style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
          >
            El servidor abre en
          </h2>
          <p className="font-mono text-sm text-electric-mint mt-3 tracking-widest">
            6 JUN 2026 — 17:00h (hora española)
          </p>
        </motion.div>

        {timeLeft === null ? (
          /* Launched state */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 py-16"
          >
            <span className="font-mono text-xs tracking-widest uppercase bg-electric-mint text-midnight-ink px-4 py-2">
              Servidor Online
            </span>
            <p
              className="font-display font-[900] uppercase text-electric-mint leading-none tracking-tight text-center"
              style={{
                fontSize: 'clamp(56px, 10vw, 120px)',
                textShadow: '0 0 60px rgba(161,254,160,0.4)',
              }}
            >
              ¡Ya estamos online!
            </p>
          </motion.div>
        ) : (
          /* Countdown state */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-14"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/20">
              {units.map((unit, i) => (
                <div
                  key={unit.key}
                  className="flex flex-col items-center justify-center py-10 px-4 border-r border-b md:border-b-0 border-white/20 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(n+3)]:border-b-0"
                >
                  <motion.span
                    key={timeLeft[unit.key]}
                    initial={{ opacity: 0.4, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-display font-[900] text-electric-mint leading-none tabular-nums"
                    style={{
                      fontSize: 'clamp(52px, 8vw, 96px)',
                      textShadow: i === 3 ? '0 0 30px rgba(161,254,160,0.35)' : undefined,
                    }}
                  >
                    {pad(timeLeft[unit.key])}
                  </motion.span>
                  <span className="font-mono text-xs tracking-widest uppercase text-muted-ash mt-3">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* FOMO message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-xs text-muted-ash text-center mt-8 tracking-widest"
            >
              Solo por invitación · Asegura tu lugar antes de que abra
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
