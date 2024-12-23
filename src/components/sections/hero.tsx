'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MousePointerClick, Sparkles, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div variants={fadeIn} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Transform Your Space Into
                <span className="text-primary block mt-2">A Work of Art</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                Elevate your living spaces with our expert interior design
                services. We create stunning, functional spaces that reflect
                your unique style.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group" asChild>
                <Link href="#portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="#contact">
                  Book Consultation
                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">250+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
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
