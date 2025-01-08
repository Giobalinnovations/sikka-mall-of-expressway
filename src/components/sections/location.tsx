'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';

const advantages = [
  {
    id: 1,
    title: 'Airport Connectivity',
    description:
      'Seamless access to Jewar Airport, South Delhi via DND Flyway, and connectivity with Yamuna Expressway',
    icon: '✈️',
  },
  {
    id: 2,
    title: 'Greater Noida Expressway',
    description:
      'The project is situated near the Greater Noida Expressway, which provides easy connectivity to other parts of Delhi-NCR and nearby cities.',
    icon: '🛣️',
  },
  {
    id: 3,
    title: 'Yamuna Expressway',
    description:
      'The Yamuna Expressway is also easily accessible from OMEGA 2, making it convenient for residents to travel to Agra and other destinations.',
    icon: '🚗',
  },
  {
    id: 4,
    title: 'Near Pari Chowk',
    description:
      'Pari Chowk, one of the major landmarks in Greater Noida, is in close proximity to OMEGA 2. It offers various shopping malls, entertainment options, and commercial hubs.',
    icon: '🏢',
  },
  {
    id: 5,
    title: 'Educational Hub',
    description:
      'There are several renowned educational institutions like Gautam Buddha University and Amity University located near OMEGA 2.',
    icon: '🎓',
  },
  {
    id: 6,
    title: 'Infrastructure Development',
    description:
      'The area around OMEGA 2 has seen significant infrastructure development with well-planned roads, parks, and public amenities.',
    icon: '🏗️',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export default function LocationAdvantages() {
  return (
    <Section id="location" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <SectionHeading
                title="Prime Location Advantages"
                description="An epicenter for corporate activity and renowned educational institutions, this vibrant stretch attracts a multitude of individuals daily. Investing here means seizing a myriad of opportunities, each day presenting a wealth of potential."
                alignment="left"
              />
            </div>
            <motion.div
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <CloudinaryImage
                src="loca_viswwb"
                alt="Location Map"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                crop="fit"
              />
            </motion.div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col space-y-4">
                  <span className="text-4xl">{advantage.icon}</span>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
