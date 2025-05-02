
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Youtube } from 'lucide-react';
import RotatingText from './ui/RotatingText';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="py-16 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6 animate-fade-up">
            <div className="inline-block bg-secondary rounded-full px-4 py-1.5 mb-2">
            <span className="text-sm font-medium">Eat Right | Sleep Tight | Love Coding | Learn Always | Repeat</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              I'm <RotatingText phrases={["Software Developer", "GenAI Developer", "Tech Journalist"]} />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              I specialize in building robust solutions with technologies like{" "}
              <span className="text-green-600"><strong>Spring Boot</strong></span>,{" "}
              <span className="text-blue-600"><strong>PostgreSQL</strong></span>,{" "}
              <span className="text-purple-600"><strong>ComfyUI</strong></span>,{" "}
              <span className="text-orange-600"><strong>LLMs</strong></span> and more.
            </p>
          
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 group" asChild>
                <a href="/resume.pdf" download>
                  CV/Resume
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href='#contact'>Contact me</a>
              </Button>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
                <a href="https://www.instagram.com/devesh_bhardwajj/" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram" 
                    className="h-6  w-6" 
                  />
                </a>
                <a href="https://github.com/bhardwaj-devesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-black hover:text-gray-700 h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/deveshbhardwajj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 h-6 w-6" />
                </a>
                <a href="https://x.com/DeveshBhardwajj" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaXTwitter className="text-black hover:text-gray-700 h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/@deveshbhardwaj3625" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube className="text-red-600 hover:text-red-800 h-6 w-6" />
                </a>
                <a href="https://huggingface.co/DeveshBhardwajj" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
                    <img 
                      src="https://huggingface.co/front/assets/huggingface_logo.svg"
                      alt="Hugging Face" 
                      className="h-6 w-6" 
                    />
                  </a>
              </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr to-background rounded-full"></div>
              <img 
                src="/Images/Model2.2.png" 
                alt="Profile Picture" 
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
