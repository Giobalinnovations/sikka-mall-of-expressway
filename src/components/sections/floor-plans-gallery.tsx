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
    title: 'BLOCK A | First Floor',
    category: 'Block A',
    image: 'ba-ff_o1er9v',
  },
  {
    id: 2,
    title: 'BLOCK A | Lower Ground Floor',
    category: 'Block A',
    image: 'ba-lgf_rmbngl',
  },
  {
    id: 3,
    title: 'BLOCK A | Upper Ground Floor',
    category: 'Block A',
    image: 'ba-ugf_m4qf6l',
  },
  {
    id: 4,
    title: 'BLOCK B | Second Floor',
    category: 'Block B',
    image: 'bb-sf_izijci',
  },
  {
    id: 5,
    title: 'BLOCK B | Third Floor',
    category: 'Block B',
    image: 'bb-tf_dkizfy',
  },
  {
    id: 6,
    title: 'BLOCK B | First Floor',
    category: 'Block B',
    image: 'bb-ff_fx0rby',
  },
  {
    id: 7,
    title: 'BLOCK B | Lower Ground Floor',
    category: 'Block B',
    image: 'bb-lgf_apte4q',
  },
  {
    id: 8,
    title: 'BLOCK B | Upper Ground Floor',
    category: 'Block B',
    image: 'bb-ugf_x6gfp9',
  },
  {
    id: 9,
    title: 'BLOCK C | Lower Ground Floor',
    category: 'Block C',
    image: 'bc-lgf_olg1gw',
  },
  {
    id: 10,
    title: 'BLOCK C | Upper Ground Floor',
    category: 'Block C',
    image: 'bc-ugf_bbxm21',
  },
  {
    id: 11,
    title: 'BLOCK C | First Floor',
    category: 'Block C',
    image: 'bc-ff_oxqmk0',
  },
];

const categories = ['Block A', 'Block B', 'Block C'];

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
  const [activeCategory, setActiveCategory] = useState('Block A');

  const filteredItems = floorPlans.filter(
    item => item.category === activeCategory
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Section id="floor-plans" variant="default">
      <div className="space-y-10">
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

        {/* Floor Plans Grid */}
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
                className="group flex flex-col bg-white rounded-2xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] relative">
                  <CloudinaryImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Title */}
                <div className="p-4 text-center border-t bg-muted/30">
                  <h3 className="text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
