import { type ReactNode } from 'react';

interface ButtonProps {
  variant?: 'mint' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({
  variant = 'mint',
  size = 'md',
  onClick,
  children,
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-ui font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer select-none border disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const variants = {
    mint: 'bg-electric-mint text-midnight-ink border-electric-mint hover:brightness-90',
    dark: 'bg-midnight-ink text-canvas-white border-canvas-white hover:bg-canvas-white hover:text-midnight-ink',
    ghost: 'bg-transparent text-canvas-white border-canvas-white hover:bg-canvas-white hover:text-midnight-ink',
  };

  const radius = {
    mint: 'rounded-[100px]',
    dark: 'rounded-none',
    ghost: 'rounded-none',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${radius[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
