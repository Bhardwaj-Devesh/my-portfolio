import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si'; // HuggingFace logo

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary py-16 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-2xl font-bold mb-6">Let’s Connect</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Got a project in mind, a job opportunity, a freelance gig, or just something cool to share? 
              I’d love to hear from you. Enter your email below and I’ll get back to you soon!
            </p>

            <form
              className="flex gap-2 max-w-md"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const subject = "Let's Connect!";
                const body = `Hi Devesh,\n\nI’d like to connect with you regarding...`;
                window.location.href = `mailto:deveshbhardwaj730@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}%0D%0A%0D%0AFrom: ${email}`;
              }}
            >
              <Input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                className="flex-1" 
                required 
              />
              <Button type="submit">Say Hello</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Let's chat about your project or just say hello! I'm always open to new opportunities and collaborations.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/bhardwaj-devesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-black hover:text-gray-700 h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/deveshbhardwajj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-600 hover:text-blue-800 h-6 w-6" />
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
                <a href="https://www.instagram.com/devesh_bhardwajj/" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram" 
                    className="h-6  w-6" 
                  />
                </a>
            </div>

          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Devesh Bhardwaj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
