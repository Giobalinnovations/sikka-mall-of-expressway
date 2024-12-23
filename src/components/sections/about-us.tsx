'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

export default function AboutUs() {
  return (
    <Section id="about" variant="default" className="overflow-hidden py-20">
      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Left side - Content */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:col-span-5 lg:pr-8"
        >
          <span className="text-primary font-medium mb-4 block">ABOUT US</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
            We help to bring your{' '}
            <span className="italic text-primary">dream home</span> to reality
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
            <p>
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant enim aliquet volutpat leo
              ultrices. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum laboris diam.
            </p>
          </div>
        </motion.div>

        {/* Right side - Image Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:col-span-7 grid grid-cols-12 gap-4"
        >
          {/* Main Image */}
          <motion.div
            variants={imageVariants}
            className="col-span-12 md:col-span-7 relative aspect-[4/3]"
          >
            <Image
              src="/images/kitchen-1.webp"
              alt="Modern Kitchen Design"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
          </motion.div>

          {/* Secondary Image */}
          <motion.div
            variants={imageVariants}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-5 relative aspect-[3/4] md:mt-8"
          >
            <Image
              src="/images/bedroom.webp"
              alt="Bedroom Interior"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 30vw"
              quality={95}
            />
          </motion.div>

          {/* Logo or Brand Element */}
          <motion.div
            variants={imageVariants}
            transition={{ delay: 0.4 }}
            className="absolute -top-12 right-8 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-4"
          ></motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
