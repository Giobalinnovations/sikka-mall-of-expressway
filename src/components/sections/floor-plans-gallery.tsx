'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CloudinaryImage from '../cloudinary-image';

const floorPlans = [
  {
    id: 1,
    title: '3.5BHK Floor Plan',
    category: '3.5BHK',
    image: '3-5bhk_mabotc',
  },
  {
    id: 2,
    title: '2.5BHK Floor Plan',
    category: '2.5BHK',
    image: '2-5bhk_ehef71',
  },
];

const categories = ['3.5BHK', '2.5BHK'];

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

export default function FloorPlansGallery() {
  const [activeCategory, setActiveCategory] = useState('3.5BHK');

  const filteredItems = floorPlans.filter(
    item => item.category === activeCategory
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Section id="floor-plans" className="pb-6" variant="default">
      <div className="space-y-6">
        <SectionHeading
          title="Floor Plans"
          description="Explore our thoughtfully designed retail spaces across different blocks and floors."
          alignment="center"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-4"
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

        {/* Floor Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 max-w-5xl mx-auto"
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
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Image Container */}
                <div className="aspect-[16/9] relative h-[250px] md:h-[400px] flex items-center justify-center">
                  <CloudinaryImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4 md:p-8"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
