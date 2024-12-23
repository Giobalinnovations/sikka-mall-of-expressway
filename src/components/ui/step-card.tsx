'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

export function StepCard({
  icon: Icon,
  title,
  description,
  stepNumber,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: stepNumber * 0.1 }}
      viewport={{ once: true }}
      className="relative flex gap-4 md:gap-6"
    >
      {/* Step number line connector */}
      {stepNumber < 3 && (
        <div className="absolute left-6 top-16 bottom-0 w-[1px] bg-border md:left-8" />
      )}

      {/* Icon container */}
      <div className="relative shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary md:h-16 md:w-16">
          <Icon className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {stepNumber}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 pb-8">
        <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
        <p className="text-muted-foreground md:text-lg">{description}</p>
      </div>
    </motion.div>
  );
}
