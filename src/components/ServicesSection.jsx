import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Branding',
    iconUrl: '/SeoLogo.svg',
    description: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
  },
  {
    title: 'Web development',
    iconUrl: '/icons/web.svg',
    description: 'Integer ante non nunc, eget est justo vel semper nunc. Luctus',
  },
  {
    title: 'Digital marketing',
    iconUrl: '/icons/marketing.svg',
    description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est.',
  },
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

const ServicesSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 text-white bg-[#110F0F] mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-3">We Offer</h2>
        <p className="text-sm text-[#A1AEBF]">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. 
          Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            iconUrl={service.iconUrl} //Not using Just demo
            text={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
