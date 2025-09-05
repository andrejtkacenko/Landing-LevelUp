"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gamepad2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#games', label: 'Games' },
  { href: '#community', label: 'Community' },
  { href: '#events', label: 'Events' },
  { href: '#membership', label: 'Membership' },
  { href: '#recommender', label: 'Recommender' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", className)}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Gamepad2 className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold font-headline">LevelUp</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="p-4 flex-row items-center justify-between space-y-0 mb-4">
                     <Link href="/" className="flex items-center gap-2">
                        <Gamepad2 className="h-7 w-7 text-primary" />
                        <span className="text-2xl font-bold font-headline">LevelUp</span>
                    </Link>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                </SheetHeader>
                <div className="p-4 pt-0">
                  <NavLinks className="flex-col items-start space-y-4 text-lg" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
