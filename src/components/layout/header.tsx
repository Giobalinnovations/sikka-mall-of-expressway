'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Legacy',
    href: '#legacy',
  },
  {
    title: 'Key Facts',
    href: '#key-facts',
  },
  {
    title: 'Noida Highlights',
    href: '#noida-highlights',
  },
  {
    title: 'Why Invest',
    href: '#why-invest',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <Image
            src="/s-logo.png"
            alt="Sikka Mall of Expressway"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none text-gray-800"
                    >
                      {item.title}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
                src="/s-logo.png"
                alt="Sikka Mall of Expressway"
                width={100}
                height={100}
              />
            </SheetTitle>
            <nav className="flex flex-col space-y-6 mt-8">
              {navigationItems.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block text-lg text-gray-800 hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
