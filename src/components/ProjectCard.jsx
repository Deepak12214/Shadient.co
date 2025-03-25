import React from 'react';

const ProjectCard = ({ imageUrl, tag, title, onReadMore, className = '' }) => {
  return (
    <div
      className={` 
         p-5 border border-[#A1AEBF] rounded-[4px] bg-[#0D0D0D] 
        flex flex-col gap-4 text-white ${className}
      `}
    >
      {/* Image frame */}
      {imageUrl && (
        <div className={`w-full h-[140px] bg-purple-500 rounded-[4px] overflow-hidden ${imageUrl==''?'hidden':''}`}>
          {/* <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> */}
        </div>
      )}

      {/* Tag */}
      {tag && (
        <div className="w-fit px-2 h-[22px] bg-[#FFA800] rounded-[4px] flex items-center justify-center text-black text-[11px] font-semibold">
          {tag}
        </div>
      )}

      {/* Title */}
      <h3 className="text-[20px] leading-[28px] font-bold font-['Quicksand']">
        {title}
      </h3>

      {/* Read More */}
      <button
        onClick={onReadMore}
        className="flex items-center gap-1 text-[#A1AEBF] text-sm mt-auto"
      >
        Read more
        <img src="/ArrowRight.svg" alt="" className="w-[16px] h-[16px] ml-1" />
      </button>
    </div>
  );
};

export default ProjectCard;
