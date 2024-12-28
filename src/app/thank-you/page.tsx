'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function ThankYou() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-2xl w-full space-y-8 text-center"
      >
        {/* Success Icon */}
        <motion.div variants={itemVariants}>
          <div className="mx-auto w-16 h-16 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-primary" />
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Thank You for Reaching Out!
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            We&apos;ve received your message and will get back to you within 24
            hours. We&apos;re excited to discuss your project!
          </p>
        </motion.div>

        {/* What to Expect Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-semibold">What to Expect Next</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-secondary/20 p-6 rounded-xl">
              <p className="text-sm text-muted-foreground">
                Our design expert will review your requirements and prepare a
                personalized consultation plan.
              </p>
            </div>
            <div className="bg-secondary/20 p-6 rounded-xl">
              <p className="text-sm text-muted-foreground">
                We&apos;ll contact you to schedule a convenient time for an
                in-depth discussion about your vision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Urgent Contact */}
        <motion.div variants={itemVariants} className="pt-4">
          <p className="text-sm text-muted-foreground mb-6">
            Need immediate assistance? Call us directly:
            <a
              href="tel:+1234567890"
              className="text-primary hover:text-primary/90 ml-2 font-medium"
            >
              <Phone className="w-4 h-4 inline-block mr-1" />
              +918291435253
            </a>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/#portfolio" className="gap-2">
              Explore Our Work
            </Link>
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div variants={itemVariants} className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Join our community of{' '}
            <span className="text-primary font-medium">
              250+ satisfied clients
            </span>{' '}
            who have transformed their spaces with us
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
