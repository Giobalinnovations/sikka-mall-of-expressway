'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Paintbrush, Utensils, Bed, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Drawing Room Design',
    description:
      'Create stunning living spaces that combine comfort with sophistication. Our drawing room designs focus on optimal space utilization and aesthetic appeal.',
    icon: Sofa,
  },
  {
    title: 'Kitchen Design',
    description:
      'Transform your kitchen into a functional and beautiful space. We specialize in ergonomic layouts and modern appliance integration.',
    icon: Utensils,
  },
  {
    title: 'Bedroom Design',
    description:
      'Design peaceful and relaxing bedroom sanctuaries. We focus on comfort, storage solutions, and creating the perfect ambiance.',
    icon: Bed,
  },
  {
    title: 'Custom Solutions',
    description:
      'From furniture sourcing to lighting design and art curation, we provide comprehensive interior design solutions tailored to your needs.',
    icon: Paintbrush,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  return (
    <Section id="services" variant="default">
      <div className="space-y-12">
        <SectionHeading
          title="Our Services"
          description="Comprehensive interior design solutions tailored to transform your space into a perfect blend of functionality and aesthetics."
          alignment="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(service => (
            <motion.div key={service.title} variants={fadeIn}>
              <Card className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-full">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
