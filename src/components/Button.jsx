import React from 'react'

const Button = ({ 
    label = 'BUTTON', 
    onClick , 
    variant = 'outline', // 'outline' or 'filled'
    className = '' 
  }) => {
    const baseClasses = `rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${className}`;

    const variantClasses = {
      outline: ' border border-[#FFA800] text-[#ffa800] bg-transparent hover:bg-[#8aff00]/10',
      filled: ' h-[52px] bg-[#ffa500] text-black hover:bg-[#ffb733]',
      black : 'bg-black text-white'
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} text-nowrap`}
      >
        {label}
      </button>
    );
  };

export default Button;

{/* <div className="flex gap-4 justify-center items-center min-h-screen bg-[#1a1a1a]">
      <Button 
        label="CONTACT" 
        variant="outline" 
        onClick={() => alert('CONTACT clicked')} 
      />
      
      <Button 
        label="ATTRACT" 
        variant="filled" 
        onClick={() => alert('ATTRACT clicked')} 
      />
    </div> */}

