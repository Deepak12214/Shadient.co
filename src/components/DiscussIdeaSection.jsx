import React from 'react';
import CustomInput from './CustomInput';
import Button from './Button';

const DiscussIdeaSection = () => {
  return (
    <section className="w-full bg-[#110F0F] py-20 px-4 flex flex-col items-center">
      <div className="bg-[#FFA800] w-full max-w-6xl rounded-md px-6 py-12 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Let’s discuss the idea
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-[#3d3d3d] max-w-md mb-6">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
        </p>

        {/* Input + Send Button */}
        <div className="flex gap-2 w-full max-w-md justify-center">
          <CustomInput
            placeholder="Your email"
            className="bg-white text-black border-none w-full max-w-sm"
          />
          <Button label="SEND" variant="black" />
        </div>
      </div>

  <div className="w-full max-w-6xl flex justify-end mt-6">
  <Button label="GO TO TOP" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
</div>
    </section>
  );
};

export default DiscussIdeaSection;
