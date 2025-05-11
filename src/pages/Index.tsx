import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import WorkExperience from '@/components/WorkExperience';
import HobbiesSection from '@/components/HobbiesSection';
import ProjectSection from '@/components/ProjectSection';
import ChatbotWidget from '@/components/ChatbotWidget';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WorkExperience/>
        <ProjectSection />
        <HobbiesSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
