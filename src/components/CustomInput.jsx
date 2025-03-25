import React from 'react';

const CustomInput = ({ 
  placeholder = 'Your email', 
  value, 
  onChange, 
  className = '', 
  variant = 'dark' // 'dark' or 'light'
}) => {
  const baseClasses = `
    w-[320px] h-[52px] px-4 py-3 rounded-[30px] 
    border-2 text-sm outline-none transition-all duration-300
  `;

  const variantClasses = {
    dark: 'bg-[#0d0d0d] border-[#A1AEBF] text-white placeholder:text-[#A1AEBF]',
    light: 'bg-white border-[#A1AEBF] text-black placeholder:text-[#555]',
  };

  return (
    <input
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  );
};

export default CustomInput;


{/* <CustomInput 
placeholder="Email" 
value={email} 
onChange={(e) => setEmail(e.target.value)} 
variant="light" 
/> */}