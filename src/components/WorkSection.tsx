
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "UX/UI Design",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#project1",
    featured: true
  },
  {
    id: 2,
    title: "Financial App",
    category: "Mobile Design",
    description: "Mobile banking application designed for simplicity and security.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#project2"
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "Dashboard Design",
    description: "Patient management system for healthcare professionals.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    link: "#project3"
  },
  {
    id: 4,
    title: "Travel Platform",
    category: "Web Design",
    description: "Comprehensive travel booking and planning platform design.",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    link: "#project4"
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg">
            Explore my recent design projects spanning web, mobile, and product design.
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
              link={project.link}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
