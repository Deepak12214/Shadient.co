import React from 'react';

const ServiceCard = ({ logoUrl, title, text, className = '' }) => {
  return (
    <div
      className={`
        border border-[#A1AEBF] rounded-[8px] 
        bg-[#0D0D0D] text-white 
        p-6 w-[320px]
        ${className}
      `}
    >
      {/* Logo */}
      <img
        src='/SeoLogo.svg'
        alt={title}
        className="w-6 h-6 mb-4"
      />

      {/* Title */}
      <h3 className="text-[28px] leading-[36px] font-bold mb-2">
        {title}
      </h3>

      {/* Text */}
      <p className="text-[14px] leading-[20px] tracking-[0.02em] text-[#FFFFFF99]">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
