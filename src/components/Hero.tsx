
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Youtube } from 'lucide-react';

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
              <Button size="lg" className="gap-2 group" asChild>
                <a href="/resume.pdf" download>
                  CV/Resume
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Contact me
              </Button>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-3 pt-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-secondary">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-secondary">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-secondary">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-secondary">
                <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
                  <span className="font-bold text-lg">🤗</span>
                </a>
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
