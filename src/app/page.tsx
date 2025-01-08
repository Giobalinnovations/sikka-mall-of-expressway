import Hero from '@/components/sections/hero';
import ScrollToTop from '@/components/scroll-to-top';

import AboutUs from '@/components/sections/about-us';

import EpicentreSection from '@/components/sections/EpicentreSection';
import Location from '@/components/sections/location';
import dynamic from 'next/dynamic';

// Dynamically import FloorPlansGallery component
const FloorPlansGallery = dynamic(
  () => import('@/components/sections/floor-plans-gallery'),
  {
    loading: () => (
      <div className="h-[600px] flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/*  */}
        <Hero />
        <AboutUs />
        <FloorPlansGallery />
        <EpicentreSection />
        <Location />
        <ScrollToTop />
      </main>
    </>
  );
}
