'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 py-12 md:py-16"
        >
          {/* Top Section */}
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.5fr,2fr] items-start">
            {/* Logo and Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold tracking-tighter">
                  Interior<span className="text-primary">Home</span>Design
                </h2>
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Transform your living spaces with our expert interior design
                services. Creating beautiful, functional spaces that reflect
                your unique style.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map(social => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Links Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {footerLinks.map(group => (
                  <div key={group.title} className="space-y-4">
                    <h3 className="text-sm font-semibold tracking-wider uppercase">
                      {group.title}
                    </h3>
                    <ul className="space-y-2">
                      {group.links.map(link => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <p>© {currentYear} InteriorDesign. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
