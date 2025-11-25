import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import FounderPanel from '@/components/FounderPanel';
import Products from '@/components/Products';
import Pricing from '@/components/Pricing';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <DashboardPreview />
      <FounderPanel />
      <Products />
      <Pricing />
      <Education />
      <Footer />
    </main>
  );
}
