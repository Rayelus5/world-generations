import { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { ring2 } from 'ldrs';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { TLAUNCHER_STEPS, MANUAL_STEPS, GITHUB_RELEASE_URL } from '../../lib/constants';

ring2.register();

export function HowToInstall() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      window.open(GITHUB_RELEASE_URL, '_blank');
      toast.success('Descarga iniciada', { description: 'El instalador se está descargando.' });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="install" className="bg-midnight-ink py-28 px-6">
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
            className="font-display font-[100] uppercase text-canvas-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
          >
            Instalación
          </h2>
          <p className="font-mono text-sm text-muted-ash mt-4 tracking-wider">
            Elige el método que mejor se adapte a tu launcher
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/20">
          {/* TLauncher column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 border-b md:border-b-0 md:border-r border-white/20 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <Badge variant="mint">Recomendado</Badge>
              <h3 className="font-display font-[700] text-canvas-white uppercase tracking-tight" style={{ fontSize: '32px' }}>
                TLauncher
              </h3>
              <p className="font-mono text-xs text-muted-ash tracking-wider leading-relaxed">
                Instalación automática con un solo clic. El perfil se configura solo.
              </p>
            </div>

            <ol className="flex flex-col gap-6">
              {TLAUNCHER_STEPS.map((step) => (
                <li key={step.num} className="flex gap-5 items-start">
                  <span
                    className="font-display font-[900] text-electric-mint leading-none flex-shrink-0"
                    style={{ fontSize: '40px' }}
                  >
                    {step.num}
                  </span>
                  <p className="font-mono text-sm text-canvas-white tracking-wide leading-relaxed pt-1">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Manual column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <Badge variant="outline">Manual</Badge>
              <h3 className="font-display font-[700] text-canvas-white uppercase tracking-tight" style={{ fontSize: '32px' }}>
                Vanilla / MultiMC
              </h3>
              <p className="font-mono text-xs text-muted-ash tracking-wider leading-relaxed">
                Instalación paso a paso para cualquier launcher compatible con Fabric.
              </p>
            </div>

            <ol className="flex flex-col gap-6">
              {MANUAL_STEPS.map((step) => (
                <li key={step.num} className="flex gap-5 items-start">
                  <span
                    className="font-display font-[900] text-canvas-white leading-none flex-shrink-0 opacity-40"
                    style={{ fontSize: '40px' }}
                  >
                    {step.num}
                  </span>
                  <p className="font-mono text-sm text-canvas-white tracking-wide leading-relaxed pt-1">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-14"
        >
          <Button variant="mint" size="lg" onClick={handleDownload} disabled={loading}>
            {loading ? (
              <l-ring-2 size="20" stroke="3" stroke-length="0.25" bg-opacity="0.1" speed="0.8" color="#000000" />
            ) : (
              <Download size={18} />
            )}
            DESCARGAR INSTALADOR
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
