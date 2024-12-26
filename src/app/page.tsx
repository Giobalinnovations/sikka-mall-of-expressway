import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Testimonials from '@/components/sections/testimonials';
// import Contact from '@/components/sections/contact';
import ScrollToTop from '@/components/scroll-to-top';
// import DesignSs
import ThreeSteps from '@/components/sections/three-steps';
import AboutUs from '@/components/sections/about-us';
import Amenities from '@/components/sections/amenities';
// import FAQ from '@/components/sections/faq';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <AboutUs />
        <Services />
        <ThreeSteps />
        {/* <DesignServices /> */}
        <Portfolio />
        <Amenities />
        <Testimonials />
        {/* <FAQ /> */}
        {/* <Contact /> */}
        <ScrollToTop />
      </main>
    </>
  );
}
