'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems: {
  title: string;
  href: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Floor Plans',
    href: '#floor-plans',
  },
  {
    title: 'Amenities',
    href: '#amenities',
  },
  {
    title: 'Key Highlights',
    href: '#key-highlights',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <Image
            src="/m3m-logo.png"
            alt="IRIS BROADWAY"
            width={110}
            height={110}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="text-gray-800">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.items.map(subItem => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                    {subItem.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none text-gray-800"
                      >
                        {item.title}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-gray-300 text-gray-800 hover:bg-gray-100"
            asChild
          >
            <Link href="#hero">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-800 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white"
          >
            <SheetTitle>
              <Image
                src="/Logo.svg"
                alt="IRIS BROADWAY"
                width={150}
                height={150}
                className="mb-8"
              />
            </SheetTitle>
            <nav className="flex flex-col space-y-6 mt-8">
              {navigationItems.map(item => (
                <div key={item.title}>
                  {item.items ? (
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-800 text-lg">
                        {item.title}
                      </h4>
                      <div className="pl-4 space-y-4">
                        {item.items.map(subItem => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-base text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-lg text-gray-800 hover:text-gray-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
              <Button
                className="w-full mt-8 text-gray-800 hover:bg-gray-100 border-gray-300"
                variant="outline"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
