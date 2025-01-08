'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/contact-form';
import CloudinaryImage from '../cloudinary-image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-5 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left side - Contact Form */}
          <div className="flex-1 w-full">
            <motion.div variants={fadeIn} className="space-y-8">
              <ContactForm />
            </motion.div>
          </div>

          {/* Right side - Featured Image */}
          <motion.div
            variants={fadeIn}
            className="flex-1 relative w-full max-w-2xl"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <CloudinaryImage
                src="TREHANIRISBROADWA_dxdc4w"
                alt="Background"
                fill
                sizes="100vw"
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
