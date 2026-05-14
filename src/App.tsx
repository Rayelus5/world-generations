import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowToInstall } from './components/sections/HowToInstall';
import { About } from './components/sections/About';
import { Countdown } from './components/sections/Countdown';
import { Discord } from './components/sections/Discord';
import { WhitelistPage } from './pages/Whitelist';
import { DonePage } from './pages/Done';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Features />
        <HowToInstall />
        <About />
        <Discord />
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whitelist" element={<WhitelistPage />} />
        <Route path="/done" element={<DonePage />} />
      </Routes>
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
