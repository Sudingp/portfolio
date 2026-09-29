import React from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition-all',
        'focus:border-red-500 focus:ring-1 focus:ring-red-500',
        className
      )}
      {...props}
    />
  );
}

export default Input;
