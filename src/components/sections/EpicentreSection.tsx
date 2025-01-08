'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Car, MapPin } from 'lucide-react';

const highlights = [
  { icon: <Building2 className="w-6 h-6" />, text: 'Spread over 2.8 acres' },
  {
    icon: <Users className="w-6 h-6" />,
    text: '3 lakh+ people in the vicinity',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    text: 'More than 30 Brands onboard',
  },
  {
    icon: <Users className="w-6 h-6" />,
    text: 'More than 1 Lakh* footfall in a week',
  },
  { icon: <Building2 className="w-6 h-6" />, text: 'Low maintenance cost' },
  { icon: <Car className="w-6 h-6" />, text: 'Parking space over 400' },
  { icon: <MapPin className="w-6 h-6" />, text: '1000 ft. Frontage' },
  { icon: <MapPin className="w-6 h-6" />, text: 'Bang on Dwarka Expressway' },
];

const EpicentreSection = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-background to-muted"
      id="key-highlights"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Epicentre of New Gurugram
          </h2>
          <p className="text-foreground/80 max-w-4xl mx-auto text-lg leading-relaxed">
            From a business perspective, retailing is the key driver of sales
            through direct marketing activities and exhibition of products to a
            wider audience. Retail stores not only bring goods closer to a
            larger audience but also deeply influence purchase decisions and
            help enhance a product&apos;s image for the brand. Retailing
            involves the skill to communicate products and engage with the
            ultimate consumers at a personal level. This makes the disbursal of
            large quantities of goods more efficient as it enables businesses to
            tap into a far wider map of potential buyers effectively. The
            importance of retailing is integral in shaping businesses across
            industries and simply cannot be understated.
          </p>
        </motion.div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4 border border-border"
              >
                <div className="text-primary">{highlight.icon}</div>
                <p className="text-card-foreground font-medium">
                  {highlight.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpicentreSection;
