
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary py-16 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-2xl font-bold mb-6">Stay in touch</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Subscribe to my newsletter to get updates on my latest work, design tips, and community events.
            </p>
            
            <form className="flex gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1" 
                required 
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Let's chat about your project or just say hello! I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
                  <span className="font-bold text-sm">🤗</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <a href="/" className="text-xl font-display font-bold tracking-tight">
              DesignFolio
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DesignFolio. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
