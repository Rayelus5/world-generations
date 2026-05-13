import { Toaster } from 'sonner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowToInstall } from './components/sections/HowToInstall';
import { About } from './components/sections/About';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowToInstall />
        <About />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            letterSpacing: '0.05em',
          },
        }}
      />
    </>
  );
}
