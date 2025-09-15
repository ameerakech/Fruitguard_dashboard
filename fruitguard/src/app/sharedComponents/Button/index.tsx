import { ReactNode } from "react";

interface ButtonProps {
  buttonText: string;
  variant: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  onClickHandler: () => void;
  icon?: ReactNode;
  className?: string; 
}

const Button = ({ buttonText, variant, size = 'medium', onClickHandler, icon, className = '' }: ButtonProps) => {
  const buttonVariants = () => {
    switch (variant) {
      case 'primary': return 'bg-[#FFF661] text-[#683929] border-none';
      case 'secondary': return 'text-[#683929] border border-[#683929] hover:bg-[#893929] hover:text-[#FFFFFF]';
      default: return 'bg-[#683929] text-white border-none';
    }
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-12 py-3 text-[20px]',
  };

  return (
    <button
      onClick={onClickHandler}
      className={`${buttonVariants()} ${sizeStyles[size]} cursor-pointer rounded flex items-center gap-3 justify-center ${className}`}
    >
      {icon}
      {buttonText}
    </button>
  );
};

export default Button;
