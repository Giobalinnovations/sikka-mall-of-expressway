'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Dumbbell,
  Coffee,
  Users,
  Baby,
  Utensils,
  Palmtree,
  Table2,
  Sword,
  Trophy,
  Medal,
  Gamepad,
  Flower2,
  Users2,
  UtensilsCrossed,
  Wine,
  GalleryVerticalEnd,
  BookOpen,
  Building,
  Scissors,
  Cigarette,
} from 'lucide-react';

// Define types for amenities
type Amenity = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Amenities data for Ebony
const ebonyAmenities: Amenity[] = [
  {
    icon: <Medal className="w-6 h-6 text-primary" />,
    title: 'Squash Court',
    description: 'Professional grade squash court for sports enthusiasts',
  },
  {
    icon: <Medal className="w-6 h-6 text-primary" />,
    title: 'Badminton Court',
    description: 'Indoor badminton court with professional flooring',
  },
  {
    icon: <Table2 className="w-6 h-6 text-primary" />,
    title: 'Table Tennis Lounge',
    description: 'Dedicated space for table tennis with premium equipment',
  },
  {
    icon: <Sword className="w-6 h-6 text-primary" />,
    title: 'MMA Ring & Kick Boxing',
    description: 'Professional boxing ring and training facilities',
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary" />,
    title: 'Sports Lounge',
    description: 'Multi-purpose sports lounge for various activities',
  },
  {
    icon: <Coffee className="w-6 h-6 text-primary" />,
    title: 'Café Lounge',
    description: 'Relaxing café space for refreshments and socializing',
  },
  {
    icon: <Baby className="w-6 h-6 text-primary" />,
    title: 'Kids Play Area',
    description: 'Safe and engaging play area for children',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Multipurpose Hall',
    description: 'Versatile space for various events and activities',
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-primary" />,
    title: 'Gymnasium',
    description: 'State-of-the-art fitness center with modern equipment',
  },
  {
    icon: <Palmtree className="w-6 h-6 text-primary" />,
    title: 'Yoga Deck',
    description: 'Peaceful space for yoga and meditation',
  },
  {
    icon: <Utensils className="w-6 h-6 text-primary" />,
    title: 'Restaurant',
    description: 'Fine dining restaurant with diverse cuisine options',
  },
];

// Add Pine amenities data
const palmAmenities: Amenity[] = [
  {
    icon: <Baby className="w-6 h-6 text-primary" />,
    title: 'Kids Play Area',
    description: `Safe and engaging space designed for children's activities`,
  },
  {
    icon: <Coffee className="w-6 h-6 text-primary" />,
    title: 'Café & Patisserie',
    description: 'Gourmet café serving fresh pastries and beverages',
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-primary" />,
    title: 'Banquet Hall',
    description: 'Elegant space for hosting events and gatherings',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Multipurpose Hall',
    description: 'Versatile space for various community activities',
  },
  {
    icon: <Gamepad className="w-6 h-6 text-primary" />,
    title: 'Arcade & Gaming Zone',
    description: 'Modern gaming facility with latest entertainment options',
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-primary" />,
    title: 'Gymnasium',
    description: 'Fully equipped fitness center with modern apparatus',
  },
  {
    icon: <Palmtree className="w-6 h-6 text-primary" />,
    title: 'Yoga Deck',
    description: 'Tranquil space for yoga and meditation practices',
  },
  {
    icon: <Users2 className="w-6 h-6 text-primary" />,
    title: 'Elderly Zone',
    description: 'Dedicated area for senior citizens to relax and socialize',
  },
  {
    icon: <Flower2 className="w-6 h-6 text-primary" />,
    title: 'Butterfly Garden',
    description: 'Beautiful garden designed to attract butterflies and nature',
  },
];

// Add Pine amenities data
const pineAmenities: Amenity[] = [
  {
    icon: <Coffee className="w-6 h-6 text-primary" />,
    title: 'Cafeteria',
    description: 'Modern café serving fresh refreshments and snacks',
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-primary" />,
    title: 'Fitness Zone',
    description: 'State-of-the-art fitness center with modern equipment',
  },
  {
    icon: <Building className="w-6 h-6 text-primary" />,
    title: 'Indoor Pool',
    description: 'Temperature-controlled indoor swimming pool',
  },
  {
    icon: <Utensils className="w-6 h-6 text-primary" />,
    title: 'Restaurant',
    description: 'Fine dining establishment with diverse cuisine',
  },
  {
    icon: <Baby className="w-6 h-6 text-primary" />,
    title: 'Kids Play Area',
    description: 'Safe and engaging space for children',
  },
  {
    icon: <Scissors className="w-6 h-6 text-primary" />,
    title: 'Spa & Salon',
    description: 'Luxury spa and beauty salon services',
  },
  {
    icon: <Wine className="w-6 h-6 text-primary" />,
    title: 'Bar Lounge',
    description: 'Sophisticated lounge for drinks and socializing',
  },
  {
    icon: <GalleryVerticalEnd className="w-6 h-6 text-primary" />,
    title: 'Card Room',
    description: 'Dedicated space for card games and entertainment',
  },
  {
    icon: <Cigarette className="w-6 h-6 text-primary" />,
    title: 'Cigar Lounge',
    description: 'Exclusive lounge for cigar enthusiasts',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: 'Library',
    description: 'Quiet reading space with diverse collection',
  },
  {
    icon: <Gamepad className="w-6 h-6 text-primary" />,
    title: 'Arcade Zone',
    description: 'Modern gaming and entertainment area',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Multipurpose Hall',
    description: 'Versatile space for various events',
  },
  {
    icon: <Palmtree className="w-6 h-6 text-primary" />,
    title: 'Yoga Deck',
    description: 'Peaceful space for yoga and meditation',
  },
];

type TabType = 'ebony' | 'palm' | 'pine';

export default function Amenities() {
  const [activeTab, setActiveTab] = useState<TabType>('ebony');

  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">World-Class Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury living with our carefully curated selection of
            premium amenities
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border p-1 bg-gray-50">
            <button
              onClick={() => setActiveTab('ebony')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'ebony'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Ebony
            </button>
            <button
              onClick={() => setActiveTab('palm')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'palm'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Palm
            </button>
            <button
              onClick={() => setActiveTab('pine')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'pine'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Pine
            </button>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeTab === 'ebony' &&
            ebonyAmenities.map((amenity, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    {amenity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          {activeTab === 'palm' &&
            palmAmenities.map((amenity, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    {amenity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          {activeTab === 'pine' &&
            pineAmenities.map((amenity, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    {amenity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
