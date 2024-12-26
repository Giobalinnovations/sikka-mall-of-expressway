'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { Users, LineChart, BadgePercent } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Handpicked, Experienced & Verified',
    description:
      'Our team consists of carefully selected, experienced professionals who have been thoroughly verified to ensure the highest quality of service.',
    color: 'bg-blue-500/10',
    textColor: 'text-blue-500',
  },
  {
    icon: LineChart,
    title: 'Assistance in understanding Quotations',
    description:
      'We help you understand and compare quotes effectively, ensuring you get the right price for your interior design project.',
    color: 'bg-purple-500/10',
    textColor: 'text-purple-500',
  },
  {
    icon: BadgePercent,
    title: 'MagicInterior Offers & Discounts',
    description:
      'Exclusive offers and discounts on our interior design services to help you create your dream space within your budget.',
    color: 'bg-rose-500/10',
    textColor: 'text-rose-500',
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

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" variant="alternate">
      <div className="space-y-12">
        <SectionHeading
          title="Why Choose Us?"
          description="Discover the advantages of working with our expert team for your interior design needs."
          alignment="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map(feature => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`
                  relative overflow-hidden rounded-2xl p-6 h-full
                  ${feature.color} hover:shadow-lg
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
                    ${feature.color} ${feature.textColor}
                    transition-transform duration-300 group-hover:scale-110
                  `}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-2 right-2 opacity-10">
                    <feature.icon className="w-12 h-12" />
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
