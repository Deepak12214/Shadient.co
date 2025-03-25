import React from 'react';

const LogoBox = ({ logoUrl, name, className = '' }) => {
  return (
    <div
      className={`
        flex items-center gap-[10px]
        w-[140px] h-[48px] 
        px-[16px] py-[10px]
        border border-[#A1AEBF] rounded-[10px]
        bg-transparent text-white
        ${className}
      `}
    >
      <img src={logoUrl} alt={name} className="w-4 h-4 object-contain" />
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
};

export default LogoBox;


    //     <div className="bg-black p-10">
    //     <LogoBox
    //       logoUrl="https://logoipsum.com/logo.svg"
    //       name="Logoipsum"
    //     />
    //   </div>