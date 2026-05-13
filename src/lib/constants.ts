export const GITHUB_RELEASE_URL =
  'https://github.com/placeholder/the-world-generations/releases/latest/download/THE.WORLD.Setup.exe';

export const MOD_FEATURES = [
  {
    title: 'Rendimiento',
    description: 'El mejor FPS posible sin sacrificar calidad visual.',
    mods: ['Sodium', 'Lithium', 'Iris Shaders', 'FerriteCore', 'EntityCulling', 'ImmediatelyFast'],
  },
  {
    title: 'Mundo',
    description: 'Exploración infinita con biomas, estructuras y dungeons únicos.',
    mods: ["Biomes O' Plenty", 'Dungeons Arise', 'Towns & Towns', 'Oh The Biomes', 'Terralith', 'YUNG\'s Better'],
  },
  {
    title: 'Utilidades',
    description: 'Herramientas esenciales para una experiencia completa.',
    mods: ['JEI', 'ModMenu', 'JourneyMap', 'Waystones', 'AppleSkin', 'Jade'],
  },
];

export const TLAUNCHER_STEPS = [
  { num: '01', text: 'Descarga y ejecuta el instalador (.exe).' },
  { num: '02', text: 'Elige "Instalación Rápida TLauncher".' },
  { num: '03', text: 'Abre TLauncher, selecciona el perfil THE WORLD GENERATIONS y juega.' },
];

export const MANUAL_STEPS = [
  { num: '01', text: 'Instala Fabric 1.20.1 con el instalador incluido.' },
  { num: '02', text: 'Copia los mods y configuraciones a tu carpeta .minecraft.' },
  { num: '03', text: 'Selecciona el perfil gráfico que prefieras y lanza el juego.' },
];

export const SERVER_INFO = [
  { label: 'Versión', value: 'Fabric 1.20.1' },
  { label: 'Tipo', value: 'Survival / SMP Privado' },
  { label: 'IP del Servidor', value: 'IP próximamente' },
  { label: 'Estado', value: 'ONLINE', accent: true },
];
