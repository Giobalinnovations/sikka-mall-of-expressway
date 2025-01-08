'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import {
  Waves,
  Dumbbell,
  Heart,
  Video,
  Briefcase,
  Users2,
  BookOpen,
  Flower2,
  Shirt,
  Stethoscope,
  Puzzle,
} from 'lucide-react';

const amenities = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description:
      'Luxurious infinity pool with temperature control and stunning views',
    color: 'bg-blue-500/10',
    textColor: 'text-blue-500',
  },
  {
    icon: Dumbbell,
    title: 'Gymnasium',
    description:
      'State-of-the-art fitness center with modern equipment and personal trainers',
    color: 'bg-purple-500/10',
    textColor: 'text-purple-500',
  },
  {
    icon: Heart,
    title: 'Spa & Salon',
    description:
      'Premium wellness center offering rejuvenating treatments and services',
    color: 'bg-amber-500/10',
    textColor: 'text-amber-500',
  },
  {
    icon: Video,
    title: 'Mini Theatre',
    description:
      'Private cinema experience with premium seating and sound system',
    color: 'bg-rose-500/10',
    textColor: 'text-rose-500',
  },
  {
    icon: Briefcase,
    title: 'Co-working Space',
    description:
      'Professional workspace with high-speed internet and modern amenities',
    color: 'bg-indigo-500/10',
    textColor: 'text-indigo-500',
  },
  {
    icon: Users2,
    title: 'Conference Room',
    description:
      'Well-equipped meeting spaces for professional gatherings and presentations',
    color: 'bg-cyan-500/10',
    textColor: 'text-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'E-library',
    description:
      'Digital library with extensive collection of books and reading spaces',
    color: 'bg-yellow-500/10',
    textColor: 'text-yellow-500',
  },
  {
    icon: Flower2,
    title: 'Yoga Deck',
    description: 'Serene space for yoga and meditation with panoramic views',
    color: 'bg-teal-500/10',
    textColor: 'text-teal-500',
  },
  {
    icon: Shirt,
    title: 'Laundromat',
    description:
      'Modern laundry facility with smart washing and drying machines',
    color: 'bg-pink-500/10',
    textColor: 'text-pink-500',
  },
  {
    icon: Stethoscope,
    title: "Doctor's Room",
    description:
      'On-site medical facility for basic healthcare and emergencies',
    color: 'bg-red-500/10',
    textColor: 'text-red-500',
  },
  {
    icon: Puzzle,
    title: 'Kids Indoor Play Area',
    description:
      'Safe and engaging play space with educational toys and activities',
    color: 'bg-lime-500/10',
    textColor: 'text-lime-500',
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
