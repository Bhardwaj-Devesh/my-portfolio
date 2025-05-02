
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6 animate-fade-up">
            <div className="inline-block bg-secondary rounded-full px-4 py-1.5 mb-2">
              <span className="text-sm font-medium">Product Designer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Designing experiences that <span className="text-gradient">matter</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              I create user-centered digital products and experiences that solve real problems for businesses and users.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 group">
                View my work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Contact me
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-background rounded-full animate-fade-in"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Designer working" 
                className="object-cover w-full h-full rounded-3xl shadow-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
