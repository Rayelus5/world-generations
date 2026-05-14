import { Link } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

interface Part {
  number: string;
  title: string;
  articles: { id: string; title: string; body: string[] }[];
}

const parts: Part[] = [
  {
    number: 'I',
    title: 'Introducción y Aceptación',
    articles: [
      {
        id: '1.1',
        title: 'Aceptación de los Términos',
        body: [
          'El acceso y uso del servidor de Minecraft "THE WORLD GENERATIONS" (en adelante, "el Servidor") implica la aceptación plena, incondicional y sin reservas de los presentes Términos de Servicio y Acuerdo de Licencia para Jugadores (en adelante, "los Términos"). Si no estás de acuerdo con alguna de las disposiciones aquí contenidas, deberás abstenerte de acceder al Servidor.',
          'Se considera que el jugador ha leído, comprendido y aceptado los presentes Términos en el momento en que se conecta por primera vez al Servidor, o en cualquier momento posterior si los Términos han sido actualizados.',
        ],
      },
      {
        id: '1.2',
        title: 'Naturaleza del Servicio',
        body: [
          'THE WORLD GENERATIONS es un servidor privado de Minecraft gestionado por Raimundo Palma Méndez (en adelante, "La Administración"). El Servidor opera bajo la modalidad de red de juego privada, por lo que La Administración se reserva el derecho de restringir el acceso a cualquier persona, en cualquier momento y sin necesidad de justificación.',
          'El Servidor no tiene carácter comercial ni ánimo de lucro. No se cobran tarifas de acceso, suscripciones ni ningún otro pago por el uso de los servicios ofrecidos.',
        ],
      },
      {
        id: '1.3',
        title: 'Modificaciones de los Términos',
        body: [
          'La Administración se reserva el derecho de modificar, actualizar o reemplazar los presentes Términos en cualquier momento, sin previo aviso. Las modificaciones entrarán en vigor en el momento de su publicación en los canales oficiales del Servidor.',
          'Es responsabilidad exclusiva del jugador revisar periódicamente los Términos para mantenerse informado de cualquier cambio. La continuación del uso del Servidor tras la publicación de modificaciones implica la aceptación de los nuevos Términos.',
        ],
      },
    ],
  },
  {
    number: 'II',
    title: 'Normas Generales de Conducta',
    articles: [
      {
        id: '2.1',
        title: 'Respeto e Integridad',
        body: [
          'Todo jugador está obligado a mantener un comportamiento respetuoso y cordial hacia los demás miembros de la comunidad y hacia La Administración. Queda estrictamente prohibido el uso de lenguaje ofensivo, discriminatorio, amenazante o acosador en cualquier canal de comunicación del Servidor, incluyendo el chat del juego, los canales de Discord y cualquier otro medio oficial.',
          'Se prohíbe cualquier forma de acoso, hostigamiento o comportamiento que genere un ambiente hostil para otros jugadores. El incumplimiento de esta norma podrá dar lugar a sanciones inmediatas, incluyendo la expulsión permanente del Servidor.',
        ],
      },
      {
        id: '2.2',
        title: 'Griefing y Sabotaje',
        body: [
          'Queda absolutamente prohibido el griefing en cualquiera de sus formas, entendiendo como tal cualquier acción destinada a dañar, destruir, robar o alterar las construcciones, recursos, territorios o progreso de otros jugadores sin su consentimiento explícito.',
          'Esta prohibición incluye, pero no se limita a: destrucción de edificaciones, robo de materiales de cofres o inventarios, modificación no autorizada del terreno, contaminación de fuentes de agua o cultivos, y cualquier otra acción que cause perjuicio material a otros jugadores.',
        ],
      },
      {
        id: '2.3',
        title: 'Spam y Publicidad',
        body: [
          'Queda prohibido el envío repetitivo y masivo de mensajes en el chat del Servidor (spam), así como la publicidad de cualquier tipo de producto, servicio, servidor u otro contenido externo sin la autorización expresa de La Administración.',
        ],
      },
    ],
  },
  {
    number: 'III',
    title: 'Integridad del Juego',
    articles: [
      {
        id: '3.1',
        title: 'Bugs y Exploits — Tolerancia Cero',
        body: [
          'La Administración mantiene una política de tolerancia cero respecto a la explotación de bugs, glitches, vulnerabilidades o cualquier otra falla del sistema de juego. Queda terminantemente prohibido el uso intencionado de estas irregularidades para obtener ventajas injustas sobre otros jugadores o para duplicar ítems, recursos o cualquier bien virtual.',
          'La mera sospecha fundada de explotación activa de bugs podrá dar lugar a una sanción inmediata mientras se investiga el caso.',
        ],
      },
      {
        id: '3.2',
        title: 'Obligación de Reporte',
        body: [
          'Todo jugador que descubra un bug, glitch, exploit o cualquier otra irregularidad en el Servidor tiene la obligación de reportarlo inmediatamente a La Administración a través de los canales oficiales designados.',
          'El ocultamiento deliberado de bugs conocidos o la comunicación de los mismos a otros jugadores sin reporte previo a La Administración será considerado equivalente a su explotación y sancionado en consecuencia.',
        ],
      },
      {
        id: '3.3',
        title: 'Bug Bounty',
        body: [
          'Como reconocimiento a la colaboración en el mantenimiento de la integridad del Servidor, La Administración podrá recompensar a los jugadores que reporten bugs significativos a través de un sistema de Bug Bounty. Las recompensas se otorgarán a discreción de La Administración y podrán consistir en recursos del juego, reconocimientos especiales u otros beneficios dentro del Servidor.',
        ],
      },
    ],
  },
  {
    number: 'IV',
    title: 'Seguridad y Software de Terceros',
    articles: [
      {
        id: '4.1',
        title: 'Mods de Cliente Permitidos',
        body: [
          'Se permite el uso de mods de cliente que mejoren la experiencia visual o de rendimiento sin alterar el equilibrio del juego, tales como mods de optimización gráfica, interfaces de usuario mejoradas, minimapas sin radar de jugadores, y similares. La determinación de si un mod específico está permitido o no queda a criterio exclusivo de La Administración.',
          'En caso de duda sobre la legalidad de un mod, el jugador debe consultar a La Administración antes de su uso.',
        ],
      },
      {
        id: '4.2',
        title: 'Hacks y Software Prohibido',
        body: [
          'Queda absolutamente prohibido el uso de cualquier software, mod, hack, cliente modificado o herramienta que otorgue ventajas injustas en el juego. Esto incluye, sin carácter limitativo: aimbots, wallhacks, speed hacks, fly hacks, X-Ray, kill aura, y cualquier otro programa que altere el comportamiento normal del juego de manera que beneficie al usuario frente a otros jugadores.',
          'La detección del uso de cualquiera de estos programas resultará en una sanción inmediata y permanente, sin posibilidad de apelación.',
        ],
      },
      {
        id: '4.3',
        title: 'Malware y Actividad Maliciosa',
        body: [
          'Queda absolutamente prohibida cualquier actividad tendente a comprometer la seguridad del Servidor o de sus jugadores, incluyendo la distribución de malware, intentos de acceso no autorizado a sistemas, y cualquier otra actividad de naturaleza maliciosa.',
        ],
      },
    ],
  },
  {
    number: 'V',
    title: 'Sistema Disciplinario',
    articles: [
      {
        id: '5.1',
        title: 'Escala de Sanciones',
        body: [
          'Las infracciones de los presentes Términos darán lugar a sanciones proporcionales a la gravedad de la falta cometida. La escala disciplinaria comprende, en orden de gravedad: (1) Advertencia formal (Warn) — notificación oficial de la infracción cometida; (2) Expulsión temporal (Kick) — desconexión inmediata del Servidor; (3) Prohibición temporal (Temp-Ban) — bloqueo del acceso al Servidor por un período determinado; (4) Prohibición permanente (Perma-Ban) — bloqueo definitivo e irrevocable del acceso al Servidor.',
          'La Administración se reserva el derecho de aplicar cualquier nivel de sanción directamente, sin necesidad de seguir un orden progresivo, en función de la gravedad de la infracción.',
        ],
      },
      {
        id: '5.2',
        title: 'Evasión de Sanciones',
        body: [
          'Cualquier intento de eludir o evitar una sanción en vigor, ya sea mediante el uso de cuentas alternativas, conexiones a través de VPN u otros métodos, constituirá una infracción grave que resultará en la sanción permanente de todas las cuentas identificadas como pertenecientes al mismo usuario.',
        ],
      },
    ],
  },
  {
    number: 'VI',
    title: 'Responsabilidad por Daños',
    articles: [
      {
        id: '6.1',
        title: 'Responsabilidad sobre la Cuenta',
        body: [
          'Cada jugador es el único y exclusivo responsable de todas las acciones llevadas a cabo desde su cuenta de Minecraft en el Servidor. No se aceptarán como eximente el acceso no autorizado a la cuenta por parte de terceros, el préstamo de credenciales a otras personas, ni ninguna otra circunstancia relacionada con la gestión privada de la cuenta.',
        ],
      },
      {
        id: '6.2',
        title: 'Sabotaje Estructural',
        body: [
          'En caso de sabotaje o destrucción de infraestructuras comunes del Servidor, tales como granjas comunales, sistemas de transporte, instalaciones de almacenamiento compartido u otras estructuras de uso colectivo, el responsable estará obligado a reparar o reponer los daños causados.',
        ],
      },
      {
        id: '6.3',
        title: 'Compensación Económica In-Game',
        body: [
          'Para daños causados a construcciones o recursos de otros jugadores, La Administración podrá imponer al infractor la obligación de compensar económicamente al perjudicado mediante la entrega de ítems, recursos o moneda del juego equivalentes al valor de los daños causados, según la valoración que realice La Administración.',
        ],
      },
      {
        id: '6.4',
        title: 'Exención de La Administración',
        body: [
          'La Administración no asume ninguna responsabilidad por pérdidas de ítems, progreso u otros bienes virtuales derivadas de fallos técnicos, corrupción de datos, actualizaciones del juego, interrupciones del servicio u otras circunstancias ajenas al control directo de La Administración. El Servidor se ofrece "tal cual" y sin garantías de disponibilidad continua o recuperación de datos.',
        ],
      },
    ],
  },
  {
    number: 'VII',
    title: 'Disposiciones Finales',
    articles: [
      {
        id: '7.1',
        title: 'Derecho de Admisión',
        body: [
          'La Administración se reserva el derecho de admisión y permanencia en el Servidor. Podrá denegar el acceso o expulsar a cualquier jugador en cualquier momento, sin necesidad de proporcionar justificación, especialmente en los casos en que su presencia se considere perjudicial para la comunidad o para el correcto funcionamiento del Servidor.',
        ],
      },
      {
        id: '7.2',
        title: 'Propiedad Intelectual',
        body: [
          'Todo el contenido generado específicamente para THE WORLD GENERATIONS, incluyendo pero no limitado a construcciones colectivas, sistemas de juego diseñados por La Administración, materiales creativos oficiales del Servidor y la identidad visual del mismo, es propiedad de La Administración. Queda prohibida su reproducción, distribución o uso fuera del contexto del Servidor sin autorización expresa.',
        ],
      },
      {
        id: '7.3',
        title: 'Cierre del Servidor y Wipe',
        body: [
          'La Administración se reserva el derecho de cerrar el Servidor temporal o definitivamente, o de realizar un reinicio completo del mundo de juego (wipe), en cualquier momento y sin previo aviso, sin que ello genere ningún tipo de obligación o responsabilidad frente a los jugadores.',
        ],
      },
      {
        id: '7.4',
        title: 'Aceptación Vinculante',
        body: [
          'La conexión al Servidor de Minecraft THE WORLD GENERATIONS a través de la dirección mc.rayelus.com constituye una firma digital del jugador y su aceptación plena, expresa e irrevocable de los presentes Términos en su versión vigente.',
          'Los presentes Términos de Servicio y Acuerdo de Licencia para Jugadores han sido redactados con la finalidad de garantizar una experiencia de juego justa, segura y agradable para todos los miembros de la comunidad de THE WORLD GENERATIONS.',
        ],
      },
    ],
  },
];

export function TermsPage() {
  return (
    <div className="min-h-screen bg-midnight-ink text-canvas-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-ui font-semibold text-xl tracking-widest text-electric-mint uppercase"
          >
            TWG
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-ash hover:text-canvas-white transition-colors"
          >
            <ArrowLeft size={14} />
            Volver
          </Link>
        </div>
        <div className="h-px bg-electric-mint opacity-60" />
      </div>

      <div className="mx-auto max-w-[860px] px-6 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-electric-mint mb-4">
            Última actualización: 15 de mayo de 2026
          </p>
          <h1
            className="font-display font-[100] uppercase leading-none tracking-tight text-canvas-white mb-6"
            style={{ fontSize: 'clamp(42px, 8vw, 80px)' }}
          >
            Términos de Servicio
          </h1>
          <p
            className="font-display font-[900] uppercase leading-none tracking-tight text-electric-mint"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            THE WORLD GENERATIONS
          </p>
          <p className="font-mono text-sm text-muted-ash mt-6 leading-relaxed max-w-[640px]">
            Acuerdo de Licencia para Jugadores. Versión 1.0. Al conectarte al servidor
            mc.rayelus.com aceptas estos términos de forma vinculante.
          </p>

          {/* PDF download */}
          <a
            href="/TÉRMINOS DE SERVICIO Y ACUERDO DE LICENCIA PARA JUGADORES.pdf"
            download
            className="inline-flex items-center gap-2 mt-8 px-5 py-3 border border-canvas-white font-mono text-xs tracking-widest uppercase text-canvas-white hover:bg-canvas-white hover:text-midnight-ink transition-all duration-200"
          >
            <Download size={14} />
            Descargar PDF
          </a>
        </motion.div>

        {/* Parts */}
        <div className="space-y-12">
          {parts.map((part, pi) => (
            <motion.section
              key={part.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={pi * 0.5}
            >
              {/* Part header */}
              <div className="border border-white/20 p-6 mb-0">
                <p className="font-mono text-xs tracking-widest uppercase text-electric-mint mb-1">
                  Parte {part.number}
                </p>
                <h2
                  className="font-display font-[200] uppercase leading-none text-canvas-white"
                  style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}
                >
                  {part.title}
                </h2>
              </div>

              {/* Articles */}
              <div className="border border-white/20 border-t-0 divide-y divide-white/10">
                {part.articles.map((art) => (
                  <div key={art.id} className="p-6">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-mono text-xs text-electric-mint tracking-widest shrink-0">
                        {art.id}
                      </span>
                      <h3 className="font-mono text-sm font-bold tracking-wider uppercase text-canvas-white">
                        {art.title}
                      </h3>
                    </div>
                    <div className="space-y-3 pl-8">
                      {art.body.map((paragraph, i) => (
                        <p
                          key={i}
                          className="font-mono text-sm text-muted-ash leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="font-mono text-xs text-muted-ash leading-relaxed">
            Para cualquier consulta sobre estos Términos, contacta con La Administración a
            través de los canales oficiales del Servidor.{' '}
            <a
              href="https://discord.gg/C39kKYFByC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-mint hover:underline"
            >
              Únete a Discord
            </a>
            .
          </p>
          <p className="font-mono text-xs text-muted-ash mt-3">
            © 2026 THE WORLD GENERATIONS · mc.rayelus.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
