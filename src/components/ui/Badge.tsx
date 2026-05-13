import { type ReactNode } from 'react';

interface BadgeProps {
  variant?: 'mint' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = 'mint', children, className = '' }: BadgeProps) {
  const base = 'inline-block font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-none border';

  const variants = {
    mint: 'bg-electric-mint text-midnight-ink border-electric-mint',
    outline: 'bg-transparent text-canvas-white border-canvas-white',
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
