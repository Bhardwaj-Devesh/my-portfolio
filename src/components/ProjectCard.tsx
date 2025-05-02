import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link1: string;
  link2?: string; 
  link1Title?: string; 
  link2Title?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  category,
  description,
  imageUrl,
  link1,
  link2,
  link1Title = "View Project", 
  link2Title = "View Backend",
  featured = false
}: ProjectCardProps) => {
  return (
    <div className={`group flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-md ${featured ? 'md:col-span-2' : ''}`}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="flex flex-col space-y-3 p-6">
        <div className="space-y-1">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
          <div className = "flex gap-4">
              <Button variant="ghost" className="w-fit p-0 h-auto gap-1 text-sm" asChild>
                <a href={link1} target="_blank" rel="noopener noreferrer">
                  {link1Title} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>

              {link2 && (
                <Button variant="ghost" className="w-fit p-0 h-auto gap-1 text-sm" asChild>
                  <a href={link2} target="_blank" rel="noopener noreferrer">
                    {link2Title} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
