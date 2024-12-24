'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    description: 'Clean lines and neutral palette create a serene living space',
    image: '/images/portfolio/living-room-1.webp',
  },
  {
    id: 2,
    title: 'Contemporary Kitchen Design',
    category: 'Kitchen',
    description:
      'Sleek fixtures and smart storage solutions for modern cooking',
    image: '/images/portfolio/kitchen3.webp',
  },
  {
    id: 3,
    title: 'Luxurious Master Bedroom',
    category: 'Bedroom',
    description: 'Plush textures and ambient lighting for ultimate comfort',
    image: '/images/portfolio/bedroom.webp',
  },
  {
    id: 4,
    title: 'Urban Apartment Makeover',
    category: 'Full Home',
    description: 'Complete transformation of a city apartment',
    image: '/images/portfolio/home-design-1.webp',
  },
  {
    id: 5,
    title: 'Elegant Dining Room',
    category: 'Dining Room',
    description: 'Sophisticated dining space with custom lighting',
    image: '/images/portfolio/dining1.jpg',
  },
];

const categories = [
  'All',
  'Living Room',
  'Kitchen',
  'Bedroom',
  'Dining Room',
  'Full Home',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setHoveredItem(null);
  };

  return (
    <Section id="portfolio" variant="default">
      <div className="space-y-10">
        <SectionHeading
          title="Our Portfolio"
          description="Explore our collection of thoughtfully designed spaces that showcase our commitment to excellence."
          alignment="center"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'shadow-md scale-105'
                  : 'hover:scale-105'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="group relative overflow-hidden rounded-2xl bg-secondary/20"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        hoveredItem === item.id
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.2 }}
                      className="space-y-2"
                    >
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
