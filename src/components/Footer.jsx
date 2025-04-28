import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 flex-1">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="text-sm space-y-4 text-[#A1AEBF]">
              <li className="hover:text-white cursor-pointer transition">About us</li>
              <li className="hover:text-white cursor-pointer transition">Team</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="text-sm space-y-4 text-[#A1AEBF]">
              <li className="hover:text-white cursor-pointer transition">Branding</li>
              <li className="hover:text-white cursor-pointer transition">Web development</li>
              <li className="hover:text-white cursor-pointer transition">Digital marketing</li>
              <li className="hover:text-white cursor-pointer transition">Mobile app</li>
              <li className="hover:text-white cursor-pointer transition">SEO</li>
              <li className="hover:text-white cursor-pointer transition">User testing</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="text-sm space-y-4 text-[#A1AEBF]">
              <li className="hover:text-white cursor-pointer transition">Blog</li>
              <li className="hover:text-white cursor-pointer transition">Case study</li>
              <li className="hover:text-white cursor-pointer transition">Testimonials</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Follow us</h4>
            <ul className="text-sm space-y-4 text-[#A1AEBF]">
              <li className="hover:text-white cursor-pointer transition">Instagram</li>
              <li className="hover:text-white cursor-pointer transition">Figma</li>
            </ul>
          </div>
        </div>

        {/* Right Logo & Email */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <img src="/gradient-logo.svg" alt="Logo" className="w-[38px] h-[42px]" />
            <span className="text-white font-semibold text-base">Shadient.co</span>
          </div>
        </Link>

          <p className="text-sm text-[#A1AEBF]">Get latest updates</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full md:w-[260px] px-4 py-2 rounded-full border border-[#A1AEBF] bg-transparent text-white placeholder:text-[#A1AEBF] outline-none"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-[#A1AEBF]">
        Created by Shadient.co
      </div>
    </footer>
  );
};

export default Footer;
