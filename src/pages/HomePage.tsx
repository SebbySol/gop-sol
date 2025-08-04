import Hero from '../components/Hero';
import About from '../components/About';
import PhotoshopGallery from '../components/PhotoshopGallery';
import IllustratorGallery from '../components/IllustratorGallery';
import FigmaGallery from '../components/FigmaGallery';
import { useVantaFog } from '../hooks/useVantaFog';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function HomePage() {
  const vantaRef = useVantaFog();

  return (
    <div className="relative w-full overflow-x-hidden">
      <div 
        ref={vantaRef}
        className="fixed inset-0 -z-10"
        style={{ zIndex: -1 }}
      />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <PhotoshopGallery />
        <FigmaGallery />
        <IllustratorGallery />
        <Footer />
      </div>
    </div>
  );
}