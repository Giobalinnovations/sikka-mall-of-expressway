import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import ScrollToTop from '@/components/scroll-to-top';
import DesignServices from '@/components/sections/design-services';
import ThreeSteps from '@/components/sections/three-steps';
import AboutUs from '@/components/sections/about-us';
import Amenities from '@/components/sections/amenities';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <AboutUs />
        <Services />
        <ThreeSteps />
        <DesignServices />
        <Portfolio />
        <Amenities />
        <Testimonials />
        <Contact />
        <ScrollToTop />
      </main>
    </>
  );
}
