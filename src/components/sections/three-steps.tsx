'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { StepCard } from '@/components/ui/step-card';
import { Rocket, Palette, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Rocket,
    title: 'Start Project',
    description:
      'Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience',
  },
  {
    icon: Palette,
    title: 'Craft',
    description:
      'Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space',
  },
  {
    icon: CheckCircle,
    title: 'Execute',
    description:
      'Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space',
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

export default function ThreeSteps() {
  return (
    <Section id="process" variant="default">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left side - Content */}
        <div className="space-y-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading
              title="Designing Your Dream in Three Simple Steps"
              description="Transform your space into a masterpiece through our streamlined design process. We make luxury interior design accessible and effortless."
            />
          </motion.div>

          <div className="space-y-6 lg:pr-10">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted lg:mt-10"
        >
          <Image
            src="/images/feature-img-3.webp"
            alt="Interior Design Process"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
          />
        </motion.div>
      </div>
    </Section>
  );
}
