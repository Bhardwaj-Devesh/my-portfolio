import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Personalized LinkedIn Post Generator",
    category: "Gradio | FastAPI | Fine-tuning | System Prompting",
    description: "A web application that generates personalized LinkedIn posts using AI, with seamless backend and frontend integration.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link1: "https://huggingface.co/spaces/DeveshBhardwajj/script-generator-ui", 
    Link2: "https://huggingface.co/spaces/DeveshBhardwajj/script-generator-api/tree/main",
    link1Title:"Frontend",
    link2Title: "Backend",
    featured: true
  },  
  {
    id: 2,
    title: "AI-Powered HR Interview Assistant",
    category: "Gradio | FastAPI | Fine-tuning | System Prompting",
    description: "A smart HR assistant that helps candidates practice interview questions, improve soft skills, and receive instant feedback — powered by natural language processing.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link1: "https://huggingface.co/spaces/DeveshBhardwajj/HR-Assistence",
    link1Title: "Try the Assistant"
  },  
  {
    id: 3,
    title: "Dual Character AI Fusion",
    category: "AI Art | LoRA | SDXL | ComfyUI",
    description: "Trained two separate LoRA models representing myself and a friend using flux, and merged them to generate photorealistic interactions. Used ComfyUI for merging workflows and fine-tuning for natural depth, lighting, and facial accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link1: "https://www.notion.so/MID-Capstone-Project-db376b457134489aaa8157c0a6dd0cd0?pvs=4",
    link1Title: "Project Walkthrough"
  },
  {
    id: 4,
    title: "Crypto Tracker App",
    category: "Web App | Finance | API Integration",
    description: "A modern cryptocurrency tracking app built with React and Chakra UI. Displays real-time crypto data using external APIs, with pagination and a responsive UI for all screen sizes.",
    imageUrl: "https://images.unsplash.com/photo-1622546497093-d78b6c24c0f4", 
    link1: "https://subka-crypto-app.netlify.app/",
    link1Title: "Live App",
    link2: "https://github.com/Bhardwaj-Devesh/crypto-app",
    link2Title: "Source Code"
  }
];

const ProjectSection = () => {
  return (
    <section id="project" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore my recent projects spanning web, mobile, and product design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            imageUrl={project.imageUrl}
            link1={project.link1}
            link2={project.Link2} 
            link1Title={project.link1Title}
            link2Title={project.link2Title}
            featured={project.featured}
          />
        ))}
      </div>

      </div>
    </section>
  );
};

export default ProjectSection;
