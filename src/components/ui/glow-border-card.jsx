import React from 'react';
import { cn } from '@/lib/utils';

export const GlowBorderCard = React.forwardRef(
  (
    {
      children,
      className,
      borderRadius = '1rem',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden isolate rounded-2xl bg-gradient-to-br from-[#121212]/95 to-[#0a0a0a]/95 border border-white/10 hover:border-red-500/50 transition-all duration-300 backdrop-blur-md shadow-xl hover:shadow-red-950/20",
          className
        )}
        style={{ borderRadius }}
        {...props}
      >
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    );
  }
);

GlowBorderCard.displayName = 'GlowBorderCard';

export default GlowBorderCard;
