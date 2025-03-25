import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const AboutContent = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full  px-6 md:px-20 py-20 bg-[#110F0F] text-white space-y-16">

      <div className="space-y-4 xl:w-5/6">
        <h2 className="text-2xl font-bold">Company</h2>
        <p className="text-sm text-[#A1AEBF] leading-relaxed">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a et.
          Nisi sem ut sed seed faucibus eu at elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a et. Nisi sem ut sed seed faucibus eu at elit.
          Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh.
          Non integer ac libero facilisis hendrerit a et. Nisi sem ut sed seed faucibus eu at elit.
        </p>
      </div>

      <div className="space-y-4 xl:w-5/6 ">
        <h2 className="text-2xl font-bold">Team</h2>
        <p className="text-sm text-[#A1AEBF] leading-relaxed">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a et.
          Nisi sem ut sed seed faucibus eu at elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a et.
          Nisi sem ut sed seed faucibus eu at elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
        </p>
      </div>

      <div>
        <Button label="GO TO HOME" onClick={() => navigate('/')} />
      </div>
    </section>
  );
};

export default AboutContent;
