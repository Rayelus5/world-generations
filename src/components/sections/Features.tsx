import { motion } from 'framer-motion';
import { MOD_FEATURES } from '../../lib/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export function Features() {
  return (
    <section id="features" className="bg-canvas-white py-16 md:py-28 px-6">
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
            El Modpack
          </h2>
          <p className="font-mono text-sm text-graphite mt-4 tracking-wider">
            Más de 50 mods cuidadosamente seleccionados
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-midnight-ink">
          {MOD_FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-8 flex flex-col gap-4 border-b border-midnight-ink last:border-b-0 md:border-b-0 md:border-r md:[&:last-child]:border-r-0"
            >
              <h3
                className="font-display font-[700] uppercase text-midnight-ink tracking-tight"
                style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}
              >
                {feat.title}
              </h3>
              <p className="font-mono text-xs text-graphite leading-relaxed tracking-wide">
                {feat.description}
              </p>
              <ul className="mt-auto flex flex-col gap-1">
                {feat.mods.map((mod) => (
                  <li
                    key={mod}
                    className="font-mono text-xs text-midnight-ink tracking-wider flex items-center gap-2"
                  >
                    <span className="inline-block w-1 h-1 bg-electric-mint rounded-none flex-shrink-0" />
                    {mod}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Total mods note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-xs text-muted-ash text-center mt-8 tracking-widest"
        >
          Y muchos más incluidos en el instalador
        </motion.p>
      </div>
    </section>
  );
}
