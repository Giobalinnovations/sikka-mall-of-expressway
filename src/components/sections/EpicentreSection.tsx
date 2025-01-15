'use client';

import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';
import {
  Building2,
  Users,
  Wallet,
  MapPin,
  Shield,
  Car,
  Ruler,
  Trophy,
} from 'lucide-react';

interface Highlight {
  image?: string;
  text: string;
  icon: React.ReactNode;
}

const highlights: Highlight[] = [
  {
    image: 'sikka-mall/highlights/area',
    text: 'Spread over 1.5 acres',
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    image: 'sikka-mall/highlights/footfall',
    text: '50,000+ Daily Footfall',
    icon: <Users className="w-8 h-8" />,
  },
  {
    image: 'sikka-mall/highlights/investment',
    text: 'High ROI',
    icon: <Wallet className="w-8 h-8" />,
  },
  {
    image: 'sikka-mall/highlights/location',
    text: 'Prime Location',
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    text: 'Low Maintenance',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    text: 'Ample Parking Space',
    icon: <Car className="w-8 h-8" />,
  },
  {
    text: '100 ft. Wide Road',
    icon: <Ruler className="w-8 h-8" />,
  },
  {
    text: 'World Class Amenities',
    icon: <Trophy className="w-8 h-8" />,
  },
];

const HighlightCard = ({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) => {
  if (highlight.image) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <CloudinaryImage
            src={highlight.image}
            alt={highlight.text}
            width={400}
            height={300}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>

        <div className="absolute inset-0 flex items-end p-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-white font-semibold text-lg md:text-xl relative z-10 transform group-hover:translate-y-[-8px] transition-transform duration-300"
          >
            {highlight.text}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // Fallback to icon-based card when no image is available
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-card to-card/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
          {highlight.icon}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-foreground font-semibold text-lg md:text-xl"
        >
          {highlight.text}
        </motion.p>
      </div>
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </motion.div>
  );
};

const EpicentreSection = () => {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted relative overflow-hidden"
      id="key-highlights"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary inline-block border-b-2 border-primary pb-2"
            >
              Key Highlights
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Sikka Mall of Expressway the perfect
              destination for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.text}
                highlight={highlight}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EpicentreSection;
