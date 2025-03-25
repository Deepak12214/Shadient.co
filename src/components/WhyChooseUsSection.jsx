import React from 'react';
import Button from './Button'; // your reusable Button component

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Illustration */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="human.png"
            alt="Why Choose Us"
            className="max-w-[400px] w-full"
          />
        </div>

        {/* Text + CTA */}
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Why choose us</h2>
          <p className="text-sm text-[#A1AEBF] mb-6">
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a sit.
            Nisi sem ut sed sed faucibus et eu elit. Morbi aliquam porttitor metus consequat neque, tellus blandit.
          </p>
          <Button label="LET’S CONNECT" />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
