import React from 'react';

const BackgroundFrame = () => {
  return (
    <>
    <div
      className=" fixed w-screen h-[867px] xl:min-h-full overflow-hidden -z-10"
      style={{
        top: '-2px',
        borderImage:
          'linear-gradient(112.33deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 98.46%) 1',
        backgroundColor: '#0d0d0d',
      }}
    >

      <div
        className="
          absolute rounded-full z-[1]
          [width:clamp(150px,25vw,360px)]
          [height:clamp(100px,18vw,256px)]
          [top:60%] [left:clamp(-80px,-6vw,-60px)]
          bg-[#EF9364]
          [filter:blur(100px)]
          [-rotate-[177.33deg]]
        "
      />

      <div
        className="
          absolute rounded-full z-[1]
          [width:clamp(80px,12vw,158px)]
          [height:clamp(120px,22vw,268px)]
          top-[-100px]
          [left:calc(100vw_-_clamp(120px,15vw,180px))]
          bg-[#8B7BCF]
          [filter:blur(100px)]
        "
      />
    </div>
    <div className="absolute inset-0 z-[-1] grid grid-cols-12 grid-rows-12 pointer-events-none">
  {[...Array(144)].map((_, i) => (
    <div key={i} className="border border-[#1a1818] opacity-20"></div>
  ))}
</div>
    </>
  );
};

export default BackgroundFrame;
