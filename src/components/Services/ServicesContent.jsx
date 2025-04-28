import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../ProjectCard';
import ServiceCard from '../ServiceCard';

const ServicesContent = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'Mobile App',
      iconUrl: '/icons/app.svg',
      description: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
      title: 'SEO',
      iconUrl: '/icons/seo.svg',
      description: 'Integer ante non nunc, eget est justo vel semper nunc. Luctus',
    },
    {
      title: 'User testing',
      iconUrl: '/icons/testing.svg',
      description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est.',
    },
  ];
  const projects = [
    {
      title: 'Creative landing page',
      imageUrl: '/placeholder.svg',
    },

    {
      title: 'Creative landing page',
      imageUrl: '/placeholder.svg',
    },
    {
      title: 'Automation. Advanced Level',
      imageUrl: '/placeholder.svg',
    },

  ];
  
  return (
    <section className="w-full  px-6 md:px-20 py-20 bg-[#110F0F] text-white space-y-16">

      <div className="space-y-4 xl:w-5/6">
        <h2 className="text-2xl font-bold">Process
        </h2>
        <p className="text-sm text-[#A1AEBF] leading-relaxed">
        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui giin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </p>
      </div>

      <div className="space-y-4 ">
        <h2 className="text-2xl font-bold pb-4">Branding Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              imageUrl={project.imageUrl}
              title={project.title}
              onReadMore={() => console.log(`Reading ${project.title}`)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4 ">
        <h2 className="text-2xl font-bold pb-4">Other Services</h2>
        <div className="flex flex-wrap gap-6">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            iconUrl={service.iconUrl} 
            text={service.description}
          />
        ))}
      </div>
      </div>

      <div>
        <Button label="GO TO HOME" onClick={() => navigate('/')} />
      </div>
    </section>
  );
};

export default ServicesContent;
