import React from 'react';
import CustomInput from './CustomInput';
import Button from './Button';

const HeroSection = ({
  title,
  gradientWords = [],
  subtitle,
  description,
  showInput = false,
  buttonLabel,
  onButtonClick,
  className = '',
}) => {
  return (
    <section
      className={`relative w-full px-6 md:px-20 py-28 text-white ${className}`}
    >
      <div className="max-w-2xl">
        {subtitle && (
          <p className="text-[#FFA800] text-sm font-semibold mb-4">{subtitle}</p>
        )}

<h1 className="text-[80px] leading-[66px] font-bold font-sans whitespace-pre-line mb-4">
  {title.split(' ').map((word, idx) =>
    gradientWords.includes(word) ? (
      <span
        key={idx}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA7C0B] via-[#FBCF38] to-[#9DE8EE] inline-block mr-[12px]"
      >
        {word}
      </span>
    ) : (
      <span key={idx} className="inline-block mr-[12px]">
        {word}
      </span>
    )
  )}
</h1>


        {/* Description */}
        {description && (
          <p className="text-sm text-[#A1AEBF] mt-10">{description}</p>
        )}

        {/* Input + Button */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {showInput && <CustomInput placeholder="Email" />}
          <Button label={buttonLabel} onClick={onButtonClick}  variant="filled" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
