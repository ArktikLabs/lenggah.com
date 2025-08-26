import React from 'react';
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary:
      "bg-accent-forest text-primary-ivory hover:bg-accent-forest/90 focus:ring-accent-forest/50 shadow-sm",
    secondary:
      "bg-secondary-wood text-text-charcoal hover:bg-secondary-wood/80 focus:ring-secondary-wood/50 border border-tertiary-earth/20",
    outline:
      "border-2 border-accent-forest text-accent-forest hover:bg-accent-forest hover:text-primary-ivory focus:ring-accent-forest/50 bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-14",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon
          className={`mr-2 ${
            size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"
          }`}
        />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon
          className={`ml-2 ${
            size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"
          }`}
        />
      )}
    </button>
  );
};