import { motion } from 'framer-motion';
import { SERVER_INFO } from '../../lib/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

export function About() {
  return (
    <section id="about" className="bg-canvas-white py-28 px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-display font-[200] uppercase text-midnight-ink leading-none tracking-tight"
            style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
          >
            El Servidor
          </h2>
          <p className="font-mono text-sm text-graphite mt-4 tracking-wider">
            Un SMP privado con amigos — exploración, construcción y aventura
          </p>
        </motion.div>

        {/* Server info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-midnight-ink mb-16">
          {SERVER_INFO.map((info, i) => (
            <motion.div
              key={info.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-8 border-b border-r border-midnight-ink last:border-b-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 flex flex-col gap-2"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-muted-ash">
                {info.label}
              </span>
              {info.accent ? (
                <span className="inline-block font-mono text-sm font-bold tracking-widest bg-electric-mint text-midnight-ink px-3 py-1 w-fit">
                  {info.value}
                </span>
              ) : (
                <span className="font-display font-[700] text-midnight-ink uppercase tracking-tight" style={{ fontSize: '28px' }}>
                  {info.value}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-midnight-ink p-10"
        >
          <p className="font-mono text-sm text-graphite leading-relaxed tracking-wide max-w-2xl">
            THE WORLD GENERATIONS es un servidor de Minecraft privado pensado para jugar con amigos.
            Con más de 300 mods cuidadosamente seleccionados, ofrece una experiencia completa de
            survival: nuevos biomas, estructuras generadas proceduralmente, optimización de rendimiento
            y todas las utilidades que necesitas para disfrutar al máximo.
          </p>
          <p className="font-mono text-sm text-muted-ash leading-relaxed tracking-wide mt-4 max-w-2xl">
            Fabric 1.20.1 · Solo por invitación
          </p>
        </motion.div>
      </div>
    </section>
  );
}
