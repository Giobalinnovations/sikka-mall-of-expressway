'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { Section } from '@/components/ui/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const designServices = [
  {
    id: 'living-room',
    title: 'Living Room Interior Design',
    content:
      'Transform your living space into a perfect blend of comfort and style. Our expert designers create harmonious layouts that reflect your personality while maximizing functionality.',
    features: [
      'Custom furniture selection and arrangement',
      'Lighting design and ambient planning',
      'Color scheme and material consultation',
      'Art and decor curation',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Office Room Interior Design',
    content:
      'Create productive and inspiring workspaces that enhance collaboration and reflect your brand identity. We design offices that balance professionalism with comfort.',
    features: [
      'Ergonomic workspace planning',
      'Brand-aligned design elements',
      'Collaborative area design',
      'Acoustic and lighting solutions',
    ],
  },
  {
    id: 'bedroom',
    title: 'Bedroom Interior Design',
    content:
      'Design your perfect sanctuary for rest and relaxation. We create serene bedroom environments that combine comfort with sophisticated style.',
    features: [
      'Storage optimization solutions',
      'Mood lighting design',
      'Textile and material selection',
      'Custom headboard and furniture design',
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function DesignServices() {
  return (
    <Section id="design-services" variant="alternate">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left side - Image */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted"
        >
          <Image
            src="/images/feature-img-2.webp"
            alt="Modern Interior Design Showcase"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-8"
        >
          <SectionHeading
            title="Designing Your Dream With Brilliance"
            description="Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience"
          />

          <Accordion type="single" collapsible className="w-full">
            {designServices.map(service => (
              <AccordionItem key={service.id} value={service.id}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <p className="text-muted-foreground">{service.content}</p>
                    <ul className="grid gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <PlusCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Button size="lg" className="group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
