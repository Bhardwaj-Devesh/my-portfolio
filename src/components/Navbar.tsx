
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="py-5 w-full z-50 bg-background/80 backdrop-blur-sm sticky top-0">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-display font-bold tracking-tight">
            Devesh Bhardwaj
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks className="flex gap-8" />
          <Button>Contact</Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks className="flex flex-col gap-6" />
                <Button className="mt-2">Contact</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div className={className}>
      <a href="#work" className="text-sm hover:text-black/70 transition-colors">
        Work
      </a>
      <a href="#about" className="text-sm hover:text-black/70 transition-colors">
        About
      </a>
      <a href="#project" className="text-sm hover:text-black/70 transition-colors">
        Project
      </a>
      {/* <a href="#contact" className="text-sm hover:text-black/70 transition-colors">
        Contact
      </a> */}
    </div>
  );
};

export default Navbar;
