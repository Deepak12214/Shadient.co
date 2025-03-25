import React from 'react';
import ProjectCard from './ProjectCard';
import Button from './Button';

const projects = [
  {
    title: 'Creative landing page',
    tag: 'WEBSITE',
    imageUrl: '/placeholder.svg',
  },
  {
    title: "Why We Collect User's Data",
    tag: 'DIGITAL MARKETING',
    imageUrl: '',
  },
  {
    title: 'Creative Branding',
    tag: 'BRANDING',
    imageUrl: '',
  },
  {
    title: 'Creative landing page',
    tag: 'USER TESTING',
    imageUrl: '/placeholder.svg',
  },
  {
    title: 'Automation. Advanced Level',
    tag: 'DEVELOPMENT',
    imageUrl: '',
  },
  {
    title: 'How We Optimized Our SEO',
    tag: 'SEO',
    imageUrl: '',
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-[#110F0F] text-white px-6 md:px-20 py-20 mx-auto">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Panel */}
        <div className="lg:w-[30%] flex-shrink-0">
          <h2 className="text-2xl font-bold mb-4 leading-tight">Some pieces of our work</h2>
          <p className="text-sm text-[#A1AEBF] mb-6">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat
            scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
          </p>
          <Button label="SHOW MORE" />
        </div>

        {/* Grid Layout */}
        <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              imageUrl={project.imageUrl}
              tag={project.tag}
              title={project.title}
              onReadMore={() => console.log(`Reading ${project.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
