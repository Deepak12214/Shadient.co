import React from 'react';

const CustomerCard = ({ avatarUrl, name, role, description, className = '' }) => {
  return (
    <div
      className={`
        w-[270px] h-[200px] p-4 rounded-[4px] border border-[#A1AEBF]
        bg-[#0F0F0F] flex flex-col gap-2 text-white
        ${className}
      `}
    >
      {/* Top Row */}
      <div className="flex gap-3 items-start">
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={name}
          className="w-[40px] h-[40px] rounded-full border-[6px] border-[#0F0F0F] object-cover"
        />

        {/* Name + Role */}
        <div className="flex flex-col">
          <p className="text-[14px] leading-[18px] font-bold">{name}</p>
          <p className="text-xs text-[#A1AEBF]">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs leading-[18px] text-white mt-2">
        {description}
      </p>
    </div>
  );
};

export default CustomerCard;