import React from 'react';
import LogoBox from './LogoBox';

const companies = [
  { name: 'Logoipsum', logoUrl: '/logo1.svg' },
  { name: 'offmax', logoUrl: 'logo2.svg' },
  { name: 'boltpro', logoUrl: '/logo1.svg'  },
  { name: 'codebase', logoUrl: 'logo2.svg' },
  { name: 'logoipsum', logoUrl: '/logo1.svg' },
  { name: 'byteflow', logoUrl: 'logo2.svg'  },
];

const TrustedSection = () => {
  return (
    <section className="w-full bg-black py-20  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12 px-6 md:px-20">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Trusted by 200+ companies<br />around the world
          </h2>
        </div>
        <p className="text-sm text-[#A1AEBF]">
          Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget.
          Diam morbi faucibus vitae neque in id. Nunc sed et dapibus nunc, porta enim orci urna, at. Lectus ac.
        </p>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="overflow-hidden mb-6">
        <div className="flex gap-4 animate-marquee hover:pause-marquee w-max">
          {[...companies, ...companies].map((company, idx) => (
            <LogoBox key={`top-${idx}`} logoUrl={company.logoUrl} name={company.name} />
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse hover:pause-marquee w-max">
          {[...companies, ...companies].map((company, idx) => (
            <LogoBox key={`bottom-${idx}`} logoUrl={company.logoUrl} name={company.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
