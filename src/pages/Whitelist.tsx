import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Users, AlertTriangle } from 'lucide-react';

const TOTAL_SPOTS = 30;
const SPOTS_START = new Date('2026-05-07T00:00:00+02:00');
const LAUNCH_DATE = new Date('2026-06-06T17:00:00+02:00');
const FORMSPARK_URL = 'https://submit-form.com/wiCIgcpvi';
const DISCORD_URL = 'https://discord.gg/C39kKYFByC';

function getSpotsLeft(): number {
  if (Date.now() >= LAUNCH_DATE.getTime()) return 0;
  const days = Math.floor((Date.now() - SPOTS_START.getTime()) / 86_400_000);
  return Math.max(0, TOTAL_SPOTS - days);
}

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }
function getTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}
function pad(n: number) { return String(n).padStart(2, '0'); }

function urgency(spots: number): { label: string; pulse: boolean } {
  if (spots > 15) return { label: 'PLAZAS DISPONIBLES', pulse: false };
  if (spots > 8)  return { label: '¡PLAZAS LIMITADAS!', pulse: false };
  if (spots > 3)  return { label: '¡ÚLTIMAS PLAZAS!', pulse: true };
  if (spots > 0)  return { label: '¡ÚLTIMA OPORTUNIDAD!', pulse: true };
  return { label: 'SIN PLAZAS DISPONIBLES', pulse: false };
}

export function WhitelistPage() {
  const navigate = useNavigate();
  const [spots, setSpots] = useState(getSpotsLeft);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      setSpots(getSpotsLeft());
      setTimeLeft(getTimeLeft());
    }, 1_000);
    return () => clearInterval(id);
  }, []);

  const isClosed = spots === 0;
  const taken = TOTAL_SPOTS - spots;
  const { label: urgencyLabel, pulse } = urgency(spots);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !username.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Nombre completo': name.trim(),
          'Usuario de Minecraft': username.trim(),
        }),
      });
      if (res.ok) {
        navigate('/done');
      } else {
        setError('Error al enviar la solicitud. Inténtalo de nuevo.');
      }
    } catch {
      setError('Error de conexión. Comprueba tu internet e inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

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

      <main className="pt-16">
        <AnimatePresence mode="wait">
          {isClosed ? (
            /* ── CERRADO ──────────────────────────────────────── */
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 text-center gap-7"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase bg-white/10 text-muted-ash px-4 py-2">
                Lista cerrada
              </span>
              <h1
                className="font-display font-[100] uppercase text-canvas-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(56px, 10vw, 120px)' }}
              >
                Sin plazas
                <br />
                <span className="font-[900]">Disponibles</span>
              </h1>
              <p className="font-mono text-sm text-muted-ash max-w-md leading-relaxed tracking-wide">
                No quedan plazas disponibles hasta nuevo aviso. Únete al Discord
                para estar al tanto de futuras aperturas y sorteos de acceso.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-ui font-bold text-sm tracking-widest uppercase px-10 py-4 bg-electric-mint text-midnight-ink rounded-[100px] hover:brightness-90 transition-all"
              >
                Unirse al Discord
              </a>
            </motion.div>
          ) : (
            /* ── ABIERTO ──────────────────────────────────────── */
            <motion.div key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              {/* ── Hero FOMO ─────────────────────────────────── */}
              <section className="relative flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-16 pb-12 min-h-[calc(100vh-64px)]">
                {/* Radial glow */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(161,254,160,0.09) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-[860px]">

                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-electric-mint"
                  >
                    Temporada 1 · Acceso anticipado
                  </motion.span>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="font-display font-[100] leading-none tracking-[-0.03em] text-canvas-white uppercase"
                    style={{
                      fontSize: 'clamp(60px, 13vw, 150px)',
                      textShadow: '0 0 80px rgba(161,254,160,0.15)',
                    }}
                  >
                    Solicita
                    <br />
                    <span className="font-[900]">Tu Plaza</span>
                  </motion.h1>

                  {/* Spots block */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center gap-3"
                  >
                    {/* Big number */}
                    <div className="flex items-end gap-3 leading-none">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={spots}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-display font-[900] text-electric-mint"
                          style={{
                            fontSize: 'clamp(80px, 18vw, 180px)',
                            textShadow: '0 0 50px rgba(161,254,160,0.45)',
                            lineHeight: 1,
                          }}
                        >
                          {spots}
                        </motion.span>
                      </AnimatePresence>
                      <span className="font-mono text-sm text-muted-ash pb-4 tracking-wider">
                        / {TOTAL_SPOTS}
                      </span>
                    </div>

                    {/* Urgency label */}
                    <span
                      className={`font-mono text-xs tracking-[0.3em] uppercase text-electric-mint ${pulse ? 'animate-pulse' : ''}`}
                    >
                      {urgencyLabel}
                    </span>

                    {/* 30-cell grid */}
                    <div className="grid grid-cols-10 gap-1 sm:gap-1.5 mt-1 w-[240px] sm:w-[300px]">
                      {Array.from({ length: TOTAL_SPOTS }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.015 }}
                          className={`h-2 ${i < taken ? 'bg-white/12' : 'bg-electric-mint'}`}
                        />
                      ))}
                    </div>
                    <p className="font-mono text-[10px] text-muted-ash tracking-widest">
                      {taken} ocupadas · {spots} disponibles
                    </p>
                  </motion.div>

                  {/* Compact countdown */}
                  {timeLeft && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex items-center gap-2 font-mono text-xs text-muted-ash tracking-widest border border-white/15 px-5 py-2.5"
                    >
                      <Clock size={11} className="text-electric-mint shrink-0" />
                      <span>El servidor abre en</span>
                      <span className="text-canvas-white font-bold">
                        {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m{' '}
                        <motion.span
                          key={timeLeft.seconds}
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.15 }}
                        >
                          {pad(timeLeft.seconds)}s
                        </motion.span>
                      </span>
                    </motion.div>
                  )}

                  {/* Arrow down */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="font-mono text-[9px] tracking-widest uppercase text-muted-ash">
                      solicitar
                    </span>
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.4 }}
                      className="w-px h-7 bg-electric-mint opacity-50"
                    />
                  </motion.div>
                </div>
              </section>

              {/* ── Formulario ────────────────────────────────── */}
              <section className="py-16 md:py-20 px-5 sm:px-8 bg-midnight-ink">
                <div className="mx-auto max-w-[560px]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-white/20"
                  >
                    {/* Card header */}
                    <div className="px-8 md:px-10 py-6 border-b border-white/20 flex items-center gap-3">
                      <Users size={15} className="text-electric-mint shrink-0" />
                      <div>
                        <p className="font-ui font-semibold text-sm tracking-widest uppercase text-canvas-white">
                          Solicitud de acceso
                        </p>
                        <p className="font-mono text-[10px] text-muted-ash tracking-wider mt-0.5">
                          Revisada manualmente · Solo jugadores seleccionados
                        </p>
                      </div>
                    </div>

                    {/* Form body */}
                    <form onSubmit={handleSubmit} className="px-8 md:px-10 py-9 flex flex-col gap-6">
                      {/* Nombre */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="wl-name"
                          className="font-mono text-[10px] tracking-widest uppercase text-muted-ash"
                        >
                          Nombre real completo <span className="text-electric-mint">*</span>
                        </label>
                        <input
                          id="wl-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          minLength={3}
                          placeholder="Nombre y apellidos"
                          className="bg-white/5 border border-white/20 text-canvas-white font-mono text-sm px-4 py-3 outline-none focus:border-electric-mint transition-colors duration-200 placeholder:text-muted-ash/40 rounded-none w-full"
                        />
                      </div>

                      {/* Username */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="wl-user"
                          className="font-mono text-[10px] tracking-widest uppercase text-muted-ash"
                        >
                          Username de Minecraft <span className="text-electric-mint">*</span>
                        </label>
                        <input
                          id="wl-user"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          minLength={3}
                          maxLength={16}
                          placeholder="TuNick123"
                          className="bg-white/5 border border-white/20 text-canvas-white font-mono text-sm px-4 py-3 outline-none focus:border-electric-mint transition-colors duration-200 placeholder:text-muted-ash/40 rounded-none w-full"
                        />
                      </div>

                      {/* Warning note */}
                      <div className="flex gap-3 border border-white/10 px-4 py-3 bg-white/3">
                        <AlertTriangle
                          size={13}
                          className="text-electric-mint shrink-0 mt-0.5"
                        />
                        <p className="font-mono text-[10px] text-muted-ash leading-relaxed tracking-wider">
                          Las plazas se asignan de forma manual. Ser seleccionado/a no está
                          garantizado. Si eres aceptado/a, recibirás confirmación a través
                          del Discord.
                        </p>
                      </div>

                      {/* Error */}
                      {error && (
                        <p className="font-mono text-xs text-red-400 tracking-wide">{error}</p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading || !name.trim() || !username.trim()}
                        className="w-full bg-electric-mint text-midnight-ink font-ui font-bold text-sm tracking-widest uppercase py-4 rounded-[100px] hover:brightness-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1 cursor-pointer"
                      >
                        {loading ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="w-3 h-3 border-2 border-midnight-ink/30 border-t-midnight-ink rounded-full animate-spin" />
                            Enviando...
                          </span>
                        ) : (
                          `SOLICITAR PLAZA — ${spots} restantes`
                        )}
                      </button>

                      <p className="font-mono text-[10px] text-muted-ash text-center tracking-widest">
                        Sin compromiso · Datos usados solo para gestión de acceso
                      </p>
                    </form>
                  </motion.div>

                  {/* Discord note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-mono text-xs text-muted-ash text-center mt-6 tracking-wider"
                  >
                    ¿Quieres estar al tanto primero?{' '}
                    <a
                      href={DISCORD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-mint hover:underline"
                    >
                      Únete al Discord
                    </a>
                  </motion.p>
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
