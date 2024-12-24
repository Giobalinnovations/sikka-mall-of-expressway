'use client';

import { ArrowRight, MousePointerClick, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ContactForm } from '@/components/ui/contact-form';

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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.webp"
            alt="Interior Design Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left side - Contact Form and Stats */}
          <div className="flex-1 w-full">
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Transform Your Space Into
                  <span className="text-primary block mt-2">A Work of Art</span>
                </h1>
                <p className="text-muted-foreground">
                  Get started with a free consultation. Fill out the form below
                  and our experts will get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />

              {/* Stats Section */}
              <motion.div
                variants={fadeIn}
                className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t"
              >
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-primary"
                  >
                    10+
                  </motion.h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-primary"
                  >
                    250+
                  </motion.h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Projects Done
                  </p>
                </div>
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-primary"
                  >
                    100%
                  </motion.h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Satisfaction
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Featured Image */}
          <motion.div
            variants={fadeIn}
            className="flex-1 relative w-full max-w-2xl"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/images/feature-img.webp"
                alt="Modern Interior Design"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={95}
              />
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="text-primary h-5 w-5" />
                  <span className="text-sm font-medium">Premium Design</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <MousePointerClick className="text-primary h-5 w-5" />
                  <span className="text-sm font-medium">
                    Interactive 3D Tours
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="h-5 w-5 rotate-90 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
