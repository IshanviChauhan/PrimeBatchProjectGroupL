import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

export const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  asChild = false,
  ...props 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer';
  
  const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-slate-600 bg-transparent text-white hover:bg-slate-700',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700',
    ghost: 'hover:bg-slate-700 text-white',
    link: 'underline-offset-4 hover:underline text-indigo-400'
  };

  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    const existingClassName = (children.props as any)?.className || '';
    return React.cloneElement(children as React.ReactElement<any>, { 
      className: `${existingClassName} ${classes}`.trim(),
      ...props 
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
