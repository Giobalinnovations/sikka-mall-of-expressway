'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';

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
    <Section id="about" variant="default" className="overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-sm font-medium uppercase tracking-wider">
                  01 — Welcome
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Lorem ipsum dolor sit amet
                <span className="block mt-2"> amet</span>
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative aspect-[4/3] lg:aspect-[16/10]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <CloudinaryImage
                src="signaturedaxinvist_gz0zph"
                alt="Iris Broadway Shopping Centre Aerial View"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
