'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import {
  Wifi,
  ParkingCircle,
  Palette,
  Lightbulb,
  Sofa,
  Shield,
  Leaf,
  Home,
} from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Smart Home Integration',
    description:
      'Fully automated systems for lighting, security, and climate control',
    color: 'bg-blue-500/10',
    textColor: 'text-blue-500',
  },
  {
    icon: Palette,
    title: 'Custom Color Schemes',
    description:
      'Personalized color palettes that match your style and preferences',
    color: 'bg-purple-500/10',
    textColor: 'text-purple-500',
  },
  {
    icon: Lightbulb,
    title: 'Premium Lighting',
    description:
      'Strategic lighting design to enhance ambiance and functionality',
    color: 'bg-amber-500/10',
    textColor: 'text-amber-500',
  },
  {
    icon: Sofa,
    title: 'Premium Furnishing',
    description: 'High-quality, custom-designed furniture for every room',
    color: 'bg-rose-500/10',
    textColor: 'text-rose-500',
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Advanced security features for your peace of mind',
    color: 'bg-emerald-500/10',
    textColor: 'text-emerald-500',
  },
  {
    icon: ParkingCircle,
    title: 'Parking Solutions',
    description: 'Efficient parking design with easy accessibility',
    color: 'bg-sky-500/10',
    textColor: 'text-sky-500',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Design',
    description: 'Sustainable materials and energy-efficient solutions',
    color: 'bg-green-500/10',
    textColor: 'text-green-500',
  },
  {
    icon: Home,
    title: 'Storage Solutions',
    description: 'Innovative storage designs to maximize space utilization',
    color: 'bg-orange-500/10',
    textColor: 'text-orange-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Amenities() {
  return (
    <Section id="amenities" variant="alternate">
      <div className="space-y-12">
        <SectionHeading
          title="Premium Amenities"
          description="Experience luxury living with our comprehensive range of premium amenities designed for your comfort."
          alignment="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {amenities.map(amenity => (
            <motion.div
              key={amenity.title}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`
                  relative overflow-hidden rounded-2xl p-6 h-full
                  ${amenity.color} hover:shadow-lg
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1
                `}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/5 blur-2xl transform rotate-45 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div
                    className={`
                    inline-flex items-center justify-center
                    w-12 h-12 rounded-xl
                    ${amenity.color} ${amenity.textColor}
                    transition-transform duration-300 group-hover:scale-110
                  `}
                  >
                    <amenity.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{amenity.title}</h3>
                    <p className="text-muted-foreground">
                      {amenity.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-2 right-2 opacity-10">
                    <amenity.icon className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
