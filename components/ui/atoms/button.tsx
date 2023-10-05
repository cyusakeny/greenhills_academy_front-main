import React, { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  bgColor: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, icon, onClick }) => {
  return (
    <button
      className={`bg-${bgColor} border-[1px] border-primary w-fit shrink-0 px-[12px] gap-2 h-[47px] py-[11.50px] flex justify-start items-center flex-row `}
      onClick={onClick}
    >
     <span className='text-primary font-semibold'>{text}</span> 
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
