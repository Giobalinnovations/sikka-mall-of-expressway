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
    title: 'Modern Entryway Design',
    category: 'Living Room',
    description:
      'Contemporary entryway featuring clean lines and elegant styling',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735189455/modern-styled-entryway_qvimku.jpg',
  },
  {
    id: 2,
    title: 'Retro-Modern Living Space',
    category: 'Living Room',
    description:
      'European-style living room with retro armchair and modern touches',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735189445/3d-rendering-modern-dining-room-living-room-with-retro-armchair-european-style_zf4pvj.jpg',
  },
  {
    id: 3,
    title: 'Luxury Living Room',
    category: 'Living Room',
    description:
      'Modern living space with luxury decor and statement yellow lighting',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735189442/3d-rendering-modern-dining-room-living-room-with-luxury-decor-yellow-lamp_vmbjqd.jpg',
  },
  {
    id: 4,
    title: 'Contemporary Living Design',
    category: 'Living Room',
    description: 'Sophisticated living room with modern luxury elements',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735189439/3d-rendering-modern-dining-room-living-room-with-luxury-decor_ic4qd0.jpg',
  },
  {
    id: 5,
    title: 'Loft Living Space',
    category: 'Living Room',
    description: 'Luxurious loft living room featuring built-in bookshelves',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735189415/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_ukyfkt.jpg',
  },
  {
    id: 6,
    title: 'Modern Domestic Living',
    category: 'Living Room',
    description: 'Elegant home interior with contemporary design elements',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735189415/modern-domestic-room-with-elegant-home-interior-design-generative-ai_kdocgp.jpg',
  },
  {
    id: 7,
    title: 'Elegant Kitchen Design',
    category: 'Kitchen',
    description:
      'Beautiful modern kitchen with premium finishes and smart layout',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190200/beautiful-kitchen-interior-design_gf9xvf.webp',
  },
  {
    id: 8,
    title: 'Minimalist Kitchen Space',
    category: 'Kitchen',
    description:
      'Clean and minimalist kitchen design with contemporary aesthetics',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190199/minimalist-kitchen-interior-design_dwa9tp.webp',
  },
  {
    id: 9,
    title: 'White & Wood Kitchen',
    category: 'Kitchen',
    description:
      'Modern white kitchen featuring warm wood accents and minimal design',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190198/3d-rendering-white-minimal-kitchen-with-wood-decoration_bszklb.webp',
  },
  {
    id: 10,
    title: 'Luxury Bedroom Suite',
    category: 'Bedroom',
    description:
      'Contemporary bedroom with statement lighting and elegant decor',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190281/3d-rendering-modern-dining-room-living-room-with-luxury-decor-yellow-lamp_rwg1y0.jpg',
  },
  {
    id: 11,
    title: 'Modern Bedroom Design',
    category: 'Bedroom',
    description: 'Sleek and contemporary bedroom with minimalist aesthetics',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190278/3d-modern-bedroom-interior_oydemw.jpg',
  },
  {
    id: 12,
    title: 'Elegant Mirror Suite',
    category: 'Bedroom',
    description: 'Tidy and sophisticated bedroom featuring a statement mirror',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190267/tidy-room-with-big-mirror_orqfht.jpg',
  },
  {
    id: 13,
    title: 'Luxury Hotel Suite',
    category: 'Bedroom',
    description:
      'Beautiful luxury bedroom suite with premium amenities and entertainment',
    image:
      'https://res.cloudinary.com/datdyxl7o/image/upload/q_auto,f_webp/v1735190258/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_aow1v2.jpg',
  },
];

const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom'];

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
