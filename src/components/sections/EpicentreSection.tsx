'use client';

import { motion } from 'framer-motion';
import {
  Mountain,
  Map,
  Handshake,
  Building2,
  Train,
  LocateFixed,
} from 'lucide-react';

const highlights = [
  {
    icon: <Mountain className="w-6 h-6" />,
    text: 'One of the Greenest Area as it is located at the foothills of the Aravallis',
  },
  {
    icon: <Map className="w-6 h-6" />,
    text: 'Connected to Golf Course Road, Delhi and major parts of NCR',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    text: 'Promising business ecosystem',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    text: 'Great social and civic infrastructure',
  },
  {
    icon: <Train className="w-6 h-6" />,
    text: "Metro's Yellow Line extn. proposed from HUDA City Centre towards Sohna-Gurgaon Road",
  },
  {
    icon: <LocateFixed className="w-6 h-6" />,
    text: 'Connected via Gurugram – Sohna Elevated Road & located bang on Delhi-Vadodara-Mumbai Expressway',
  },
];

const EpicentreSection = () => {
  return (
    <section className="py-16" id="key-highlights">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#8CC63F]/10 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4 border border-[#8CC63F]/20"
              >
                <div className="text-[#8CC63F] bg-white p-3 rounded-lg shadow-sm">
                  {highlight.icon}
                </div>
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
